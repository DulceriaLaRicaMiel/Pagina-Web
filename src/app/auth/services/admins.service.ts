import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { environment } from '../../../environments/environment';

interface Administrator {
  idadministrador: number;
  nombre: string;
  appaterno: string;
  apmaterno: string;
  telefono: number;
  correo: string;
  contrasenia: string;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  private apiURL = `${environment.baseUrl}/api/administrator`;
  constructor(private http: HttpClient) { }

  getAdministrator(): Observable<Administrator[]> {
      return this.http.get<Administrator[]>(this.apiURL);
    }
  
     getAdministratorById(id: number): Observable<Administrator> {
      return this.http.get<Administrator>(`${this.apiURL}/${id}`);
    }
}
