// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.baseUrl}/api/auth`;
  private currentUser = new BehaviorSubject<any>(null);
  private authToken: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(correo: string, contrasenia: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { correo, contrasenia }).pipe(
      tap((response: any) => {
        if (response.success) {
          this.authToken = response.token;
          this.currentUser.next(response.user);
          // Guardar el tipo de usuario en el servicio
          this.setUserRole(response.user.type || 'cliente');
        }
      })
    );
  }

  registerCliente(clienteData: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/clients`, clienteData);
  }

  registerEmpleado(empleadoData: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/employees`, empleadoData);
  }

  logout(): void {
    this.authToken = null;
    this.currentUser.next(null);
    this.router.navigate(['/landing']);
  }

  getToken(): string | null {
    return this.authToken;
  }

  isLoggedIn(): boolean {
    return this.authToken !== null;
  }

  getUser(): any {
    return this.currentUser.value;
  }

getUserRole(): string {
    const user = this.getUser();
    if (!user) return 'cliente'; // Por defecto si no hay usuario
    
    // Identificar el tipo de usuario basado en la estructura del objeto
    if (user.idadministrador !== undefined) {
      return 'administrador';
    } else if (user.idempleado !== undefined) {
      return 'empleado';
    } else if (user.idcliente !== undefined) {
      return 'cliente';
    }
    
    return 'cliente'; // Por defecto
  }

  private setUserRole(role: string): void {
    const user = this.getUser();
    if (user) {
      user.type = role;
      this.currentUser.next(user);
    }
  }
}