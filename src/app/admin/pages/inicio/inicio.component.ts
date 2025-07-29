import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { forkJoin } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { ActivitiesService } from '../../../auth/services/Activities.service';
import { ClientsService } from '../../../auth/services/clients.service';
import { EmployeesService } from '../../../auth/services/employees.service';
import { AdminsService } from '../../../auth/services/admins.service';
import { ProductsService } from '../../../auth/services/products.service';
import { SalesService } from '../../../auth/services/sales.service';

interface Activity {
  user: string;
  message: string;
  time: string;
  userInitials: string;
}

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent implements OnInit, AfterViewInit {
  userCount: number = 0;
  revenue: number = 0;
  orderCount: number = 0;
  activityPercentage: number = 0;
  userName: string = '';
  userFullName: string = '';
  userInitials: string = '';
  showWelcomeTooltip: boolean = false;
  recentActivities: any[] = [];
  isLoading: boolean = false; 
  private maxActivities = 4;
  isMobileMenuActive: boolean = false;

  constructor(private authService: AuthService, 
    private activitiesService: ActivitiesService,
    private productsService: ProductsService,
    private salesService: SalesService,
    private clientsService: ClientsService, 
    private employeesService: EmployeesService,
    private adminsService: AdminsService
  ) {
    Chart.register(...registerables);
    this.activitiesService.loadActivitiesFromStorage();
  }

  ngOnInit(): void {
    this.loadUserData();
    this.loadDashboardData();
    this.loadRecentActivities();
  }

  loadRecentActivities(): void {
    this.isLoading = true;
    this.activitiesService.getRecentActivities(7)
      .then(activities => {
        this.recentActivities = activities;
        this.isLoading = false;
      })
      .catch(error => {
        console.error('Error al cargar actividades:', error);
        this.isLoading = false;
      });
  }

  loadUserData(): void {
    const user = this.authService.getUser();
    if (user) {
      this.userName = `${user.nombre} ${user.appaterno}`;
      this.userFullName = `${user.nombre} ${user.appaterno} ${user.apmaterno || ''}`.trim();
      this.userInitials = this.getInitials(this.userName);
    }
  }

  toggleWelcomeMessage(): void {
    this.showWelcomeTooltip = !this.showWelcomeTooltip;
    if (this.showWelcomeTooltip) {
      setTimeout(() => {
        this.showWelcomeTooltip = false;
      }, 3000); // Oculta automáticamente después de 3 segundos
    }
  }
  
  toggleMobileMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }
  
   loadDashboardData(): void {
    forkJoin([
      this.clientsService.getClients(),
      this.employeesService.getEmployees(),
      this.adminsService.getAdministrator(),
      this.productsService.getProducts(),
      this.salesService.getSales()
    ]).subscribe({
      next: ([clients, employees, admins, products, sales]) => {
        // Calcular total de usuarios
        this.userCount = clients.length + employees.length + admins.length;
        
        // Calcular total de productos
        this.orderCount = products.length;
        
        // Calcular ingresos totales (suma simple de todas las ventas)
        this.revenue = sales.reduce((total: number, sale: any) => {
          // Convertir a número y asegurar que sea válido
          const saleTotal = parseFloat(sale.total) || 0;
          return total + saleTotal;
        }, 0);
        
        // Porcentaje de actividad fijo o calculado de otra forma
        this.activityPercentage = this.calculateActivityPercentage(sales);
      },
      error: (error) => {
        console.error('Error al cargar datos del dashboard:', error);
      }
    });
  }

  private calculateActivityPercentage(sales: any[]): number {
    // Puedes implementar aquí otra lógica para calcular el porcentaje de actividad
    // Por ahora lo dejamos como un valor fijo basado en si hay ventas o no
    return sales.length > 0 ? 87 : 0;
  }

  ngAfterViewInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    // Verificamos si estamos en el navegador antes de acceder a document
    if (typeof document !== 'undefined') {
      // Sales chart
      const salesCtx = document.getElementById('salesChart') as HTMLCanvasElement;
      if (salesCtx) {
        new Chart(salesCtx, {
          type: 'line',
          data: {
            labels: ['Tiburones', 'Nescafe', 'Coca Cola', 'Pall Mall', 'Re Mix', 'Valentina', 'Bubbaloo'],
            datasets: [{
              label: 'Productos',
              data: [12000, 19000, 15000, 18000, 21000, 25000, 22000,],
              borderColor: '#e80c76',
              backgroundColor: 'rgba(231, 92, 219, 0.1)',
              tension: 0.4,
              fill: true
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              }
            }
          }
        });
      }
      
      // Categories chart
      const categoriesCtx = document.getElementById('categoriesChart') as HTMLCanvasElement;
      if (categoriesCtx) {
        new Chart(categoriesCtx, {
          type: 'doughnut',
          data: {
            labels: ['Dulces', 'Botanas', 'Abarrotes', 'Bebidas', 'Desechables'],
            datasets: [{
              data: [35, 25, 20, 15, 5],
              backgroundColor: [
                '#00b894',
                '#0984e3',
                '#6c5ce7',
                '#fdcb6e',
                '#636e72'
              ],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              }
            }
          }
        });
      }
    }
  }

  private calculateMonthlySales(sales: any[]): number[] {
    const monthlySales = Array(12).fill(0);
    
    sales.forEach(sale => {
      const saleTotal = parseFloat(sale.total) || 0;
      const saleDate = new Date(sale.fechaventa);
      const month = saleDate.getMonth();
      monthlySales[month] += saleTotal;
    });
    
    return monthlySales;
  }

  private calculateCategoriesData(products: any[]): { labels: string[], values: number[] } {
    const categoriesMap = new Map<string, number>();
    
    products.forEach(product => {
      const category = product.categoria || 'Sin categoría';
      categoriesMap.set(category, (categoriesMap.get(category) || 0) + 1);
    });
    
    return {
      labels: Array.from(categoriesMap.keys()),
      values: Array.from(categoriesMap.values())
    };
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }
}