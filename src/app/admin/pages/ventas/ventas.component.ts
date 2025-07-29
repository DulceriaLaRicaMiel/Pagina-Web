import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../../auth/services/sales.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { soloLetrasValidator, soloLetras, soloNumerosValidator, dominioEspecificoValidator } from '../../../validations/validators';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { ActivitiesService } from '../../../auth/services/Activities.service';
import { ClientsService } from '../../../auth/services/clients.service';
import { EmployeesService } from '../../../auth/services/employees.service';

interface Sales {
  idventa: number;
  idcliente: number;
  idempleado: number;
  cliente: string;
  fechaventa: string;
  hora: string;
  total: number | string; 
  metodopago: string;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-ventas',
  standalone: false,
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export class VentasComponent implements OnInit{

          sales: Sales[] = [];
          filteredSales: Sales[] = [];
          showAddModal = false;
          showEditModal = false;
          showDeleteModal = false;
          salesForm!: FormGroup;
          currentSales: Sales | null = null;
          searchTerm: string = '';
          currentPage: number = 1;
          itemsPerPage: number = 7;
          totalPages: number = 1;

          constructor(private salesService: SalesService, private fb: FormBuilder,  private authService: AuthService, private clientsService: ClientsService, private employeesService: EmployeesService, private activitiesService: ActivitiesService) {}

          ngOnInit(): void {
            this.loadSales();
            this.initForm();
        }

        initForm(sales?: Sales) {
          this.salesForm = this.fb.group({
            cliente: [sales?.cliente || '', [Validators.required, Validators.maxLength(40), soloLetrasValidator()]],
            fechaventa: [sales?.fechaventa || '', [Validators.required, Validators.maxLength(20)]],
            hora: [sales?.hora || this.getCurrentTime(), [Validators.required, this.timeValidator]],
            total: [sales?.total || '', [ Validators.required, Validators.pattern(/^\d+\.?\d{0,2}$/) ]],
            metodopago: [sales?.metodopago || '', [Validators.required, Validators.maxLength(40), soloLetrasValidator()]],
        });
        }

        // Validador personalizado para formato de hora
private timeValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;
  
  // Validar formato HH:MM o HH:MM:SS
  const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;
  return timeRegex.test(value) ? null : { invalidTime: true };
}

// Método para obtener la hora actual en formato HH:MM:SS
private getCurrentTime(): string {
  const now = new Date();
  return now.toTimeString().substring(0, 8);
}

  // Filtrado de ventas
  filterSales() {
    if (!this.searchTerm) {
      this.filteredSales = [...this.sales];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredSales = this.sales.filter(sale => 
        sale.cliente.toLowerCase().includes(term) ||
        sale.metodopago.toLowerCase().includes(term)
      );
    }
    this.currentPage = 1;
    this.calculateTotalPages();
  }

  // Paginación
  calculateTotalPages() {
    this.totalPages = Math.ceil(this.filteredSales.length / this.itemsPerPage);
  }

  get paginatedSales(): Sales[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredSales.slice(startIndex, startIndex + this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

    // Usa la función para evitar la entrada de números
    onKeyPress(event: KeyboardEvent): boolean {
      return soloLetras(event);
    }
  
    soloNumeros(event: KeyboardEvent): boolean {
      const charCode = event.key.charCodeAt(0);
      if (charCode >= 48 && charCode <= 57) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    }
  
    limitarLongitud(event: Event, maxLength: number): void {
      const input = event.target as HTMLInputElement;
      if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
      }
    }

    // Reemplaza soloNumeros por esta función
soloNumerosConDecimales(event: KeyboardEvent): boolean {
  const charCode = event.key.charCodeAt(0);
  const currentValue = (event.target as HTMLInputElement).value;
  
  // Permitir números (0-9), punto decimal (.) y teclas de control
  if (
    (charCode >= 48 && charCode <= 57) || // Números 0-9
    charCode === 46 || // Punto decimal
    charCode === 8 || // Backspace
    charCode === 9 // Tab
  ) {
    // Solo permitir un punto decimal
    if (charCode === 46 && currentValue.includes('.')) {
      event.preventDefault();
      return false;
    }
    return true;
  }
  event.preventDefault();
  return false;
}

// Función para limitar decimales
limitarDecimales(event: Event, maxLength: number): void {
  const input = event.target as HTMLInputElement;
  const value = input.value;
  
  // Si contiene punto decimal
  if (value.includes('.')) {
    const partes = value.split('.');
    if (partes[1].length > 2) { // Limitar a 2 decimales
      input.value = partes[0] + '.' + partes[1].substring(0, 2);
    }
  }
  
  // Limitar longitud total
  if (value.length > maxLength) {
    input.value = value.slice(0, maxLength);
  }
}

    loadSales() {
      this.salesService.getSales().subscribe({
        next: (data: Sales[]) => {
          console.log('Datos recibidos:', data);
          this.sales = data;
          this.filteredSales = [...data];
          this.calculateTotalPages();
        },
        error: (error) => {
          console.error('Error al obtener ventas:', error);
          alert('Error al cargar ventas');
        },
      });
    }

    openAddModal() {
      this.initForm();
      this.showAddModal = true;
    }
  
    closeAddModal() {
      this.showAddModal = false;
    }
  
    private transformSalesData(data: any): any {
      return {
        Cliente: data.cliente, 
        FechaVenta: data.fechaventa,
        Hora: data.hora,
        Total: Number (data.total),
        MetodoPago: data.metodopago,
      };
    }

    addSales() {
      if (this.salesForm.valid) {
        const salesData = this.transformSalesData(this.salesForm.value); 
        this.salesService.createSales(salesData).subscribe({
          next: (response) => {
            console.log('Venta creado:', response);
             const user = this.authService.getUser();
        if (user) {
          this.activitiesService.registerActivity(
            user,
            `Registró nueva venta: $${salesData.Total} - Cliente: ${salesData.Cliente}`,
            'sale',
            'created'
          );
        }
            this.loadSales();
            this.closeAddModal();
          },
          error: (error) => {
            console.error('Error al crear venta:', error);
            alert('Error al crear el venta');
          },
        });
      } else {
        this.markFormGroupTouched(this.salesForm);
      }
    }

    openEditModal(sales: Sales) {
              this.currentSales = sales;
              this.initForm(sales);
              this.showEditModal = true;
            }
          
            markFormGroupTouched(formGroup: FormGroup) {
              Object.keys(formGroup.controls).forEach((field) => {
                const control = formGroup.get(field);
                control?.markAsTouched({ onlySelf: true });
              });
            }
      
            closeEditModal() {
              this.showEditModal = false;
              this.currentSales = null;
            }

            updateSales() {
              if (this.salesForm.valid && this.currentSales) {
                const salesData = this.transformSalesData(this.salesForm.value); 
                this.salesService
                  .updateSales(this.currentSales.idventa, salesData)
                  .subscribe({
                    next: (response) => {
                      console.log('Venta actualizado:', response);
                       const user = this.authService.getUser();
                       if (user) {
                       this.activitiesService.registerActivity(
                        user,
                       `Actualizó venta #${this.currentSales?.idventa}: $${salesData.Total}`,
                       'sale',
                       'updated'
                       );
                      }
                      this.loadSales();
                      this.closeEditModal();
                    },
                    error: (error) => {
                      console.error('Error al actualizar venta:', error);
                      alert('Error al actualizar el venta');
                    },
                  });
              } else {
                this.markFormGroupTouched(this.salesForm);
              }
            }

            openDeleteModal(sales: Sales) {
              this.currentSales = sales;
              this.showDeleteModal = true;
            }
          
            closeDeleteModal() {
              this.showDeleteModal = false;
              this.currentSales = null;
            }

    getPageNumbers(): number[] {
    const pages = [];
    const maxVisiblePages = 5; // Número máximo de páginas visibles en la paginación
    
    if (this.totalPages <= maxVisiblePages) {
      // Mostrar todas las páginas si son menos que el máximo visible
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Lógica para mostrar páginas con "..." cuando hay muchas
      const half = Math.floor(maxVisiblePages / 2);
      let start = Math.max(1, this.currentPage - half);
      let end = Math.min(this.totalPages, start + maxVisiblePages - 1);
      
      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }
      
      // Siempre mostrar la primera página
      if (start > 1) {
        pages.push(1);
        if (start > 2) {
          pages.push(-1); // -1 representará los "..."
        }
      }
      
      // Páginas centrales
      for (let i = start; i <= end; i++) {
        if (i >= 1 && i <= this.totalPages) {
          pages.push(i);
        }
      }
      
      // Siempre mostrar la última página
      if (end < this.totalPages) {
        if (end < this.totalPages - 1) {
          pages.push(-1); // -1 representará los "..."
        }
        pages.push(this.totalPages);
      }
    }
    
    return pages;
  }

            deleteSales() {
              if (this.currentSales) {
                this.salesService.deleteSales(this.currentSales.idventa).subscribe({
                  next: (response) => {
                    console.log('Venta eliminado:', response);
                    const user = this.authService.getUser();
                  if (user) {
                  this.activitiesService.registerActivity(
                  user,
                  `Eliminó venta #${this.currentSales?.idventa}: $${this.currentSales?.total}`,
                  'sale',
                  'deleted'
                   );
                  }
                    this.loadSales();
                    this.closeDeleteModal();
                  },
                  error: (error) => {
                    console.error('Error al eliminar venta:', error);
                    alert('Error al eliminar venta');
                  },
                });
              }
            }
}
