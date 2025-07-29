import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AuthService } from './auth.service';
import { ClientsService } from './clients.service';
import { EmployeesService } from './employees.service';
import { AdminsService } from './admins.service';
import { ProductsService } from './products.service';
import { SalesService } from './sales.service';

export interface Activity {
  user: string;
  message: string;
  time: string;
  userInitials: string;
  type: 'sale' | 'product' | 'employee' | 'client' | 'admin';
  action: 'created' | 'updated' | 'deleted';
}

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private activities: Activity[] = [];

  constructor(
    private authService: AuthService,
    private clientsService: ClientsService,
    private employeesService: EmployeesService,
    private adminsService: AdminsService,
    private productsService: ProductsService,
    private salesService: SalesService
  ) {}

  getRecentActivities(maxActivities: number = 7): Promise<Activity[]> {
    // Ordenar por fecha descendente y limitar
    const sortedActivities = [...this.activities]
      .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
      .slice(0, maxActivities);
    
    return Promise.resolve(sortedActivities);
  }

  registerActivity(
    user: any,
    message: string,
    type: Activity['type'],
    action: Activity['action']
  ): void {
    const activity: Activity = {
      user: `${user.nombre} ${user.appaterno}`,
      userInitials: this.getInitials(`${user.nombre} ${user.appaterno}`),
      message,
      time: this.formatActivityTime(new Date().toISOString()),
      type,
      action
    };
    
    this.activities.unshift(activity); // Agregar al inicio del array
    
    // Opcional: Guardar en localStorage para persistencia
    localStorage.setItem('activities', JSON.stringify(this.activities));
  }

  private getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  private formatActivityTime(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    
    const diffMinutes = Math.round(diffMs / (1000 * 60));
    const diffHours = Math.round(diffMs / (1000 * 60 * 60));
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffMinutes < 1) return 'Hace unos momentos';
    if (diffMinutes < 60) return `Hace ${diffMinutes} min`;
    if (diffHours < 24) return `Hace ${diffHours} hrs`;
    if (diffDays === 1) return 'Ayer';
    return `Hace ${diffDays} días`;
  }

  // Cargar actividades desde localStorage al iniciar
  loadActivitiesFromStorage(): void {
    const storedActivities = localStorage.getItem('activities');
    if (storedActivities) {
      this.activities = JSON.parse(storedActivities);
    }
  }
}