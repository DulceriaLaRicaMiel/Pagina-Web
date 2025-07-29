// menu.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Chart, registerables } from 'chart.js';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  activeItem: string = '';
  userRole: string = 'cliente'; // Valor por defecto
  isMobileMenuActive: boolean = false;
  
  // Mapeo de rutas a nombres de ítem
  private routeToItemMap: { [key: string]: string } = {
    '/inicio': 'dashboard',
    '/usuarios': 'users',
    '/clientes': 'clients',
    '/empleados': 'employees',
    '/inventarios': 'products',
    '/ventas': 'sales',
    '/ajustes': 'settings',
    '/landing': 'logout'
  };

  // Definir qué items mostrar para cada rol
  private rolePermissions: { [key: string]: string[] } = {
    'cliente': ['dashboard', 'users', 'products'],
    'empleado': ['dashboard', 'users', 'clients', 'products', 'sales'],
    'administrador': ['dashboard', 'users', 'clients', 'employees', 'products', 'sales', 'settings']
  };

  constructor(private router: Router, private authService: AuthService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    // Obtener el rol del usuario actual
    this.userRole = this.authService.getUserRole();
    
    // Establecer el ítem activo inicial basado en la ruta actual
    this.setActiveItemFromRoute(this.router.url);

    // Suscribirse a cambios de ruta
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.setActiveItemFromRoute(event.url);
      });
  }

  private setActiveItemFromRoute(url: string): void {
    // Encontrar la clave que coincida con la ruta
    const matchedRoute = Object.keys(this.routeToItemMap).find(route => url.includes(route));
    this.activeItem = matchedRoute ? this.routeToItemMap[matchedRoute] : '';
  }

  setActiveItem(item: string): void {
    this.activeItem = item;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  getInitials(name: string): string {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : '';
  }

  shouldShowItem(itemName: string): boolean {
    // Verificar si el rol tiene permiso para ver este item
    return this.rolePermissions[this.userRole]?.includes(itemName) || false;
  }

  logout(): void {
    this.authService.logout();
  }
}