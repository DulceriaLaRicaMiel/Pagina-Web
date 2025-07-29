import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../auth/services/clients.service';
import { EmployeesService } from '../../../auth/services/employees.service';
import { AdminsService } from '../../../auth/services/admins.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dominioEspecificoValidator } from '../../../validations/validators';
import { forkJoin } from 'rxjs';

interface Clients {
  idcliente: number;
  nombre: string;
  appaterno: string;
  apmaterno: string;
  telefono: number;
  correo: string;
  contrasenia: string;
  created_at: string;
  updated_at: string;
}

interface Employees {
  idempleado: number;
  nombre: string;
  appaterno: string;
  apmaterno: string;
  telefono: number;
  nss: number;
  rfc: string;
  correo: string;
  contrasenia: string;
  created_at: string;
  updated_at: string;
}

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

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  clients: Clients[] = [];
  employees: Employees[] = [];
  administrator: Administrator[] = [];
  filteredUsers: any[] = [];
  showAddModal = false;
  showEditModal = false;
  showDeleteModal = false;
  userForm!: FormGroup;
  currentUser: Clients | Employees | Administrator | null = null;
  
  // Variables para búsqueda y paginación
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 7;
  totalPages: number = 1;

  constructor(
    private clientsService: ClientsService, 
    private employeesService: EmployeesService,
    private adminsService: AdminsService, 
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.initForm();
  }

  initForm(user?: Clients | Employees | Administrator) {
    this.userForm = this.fb.group({
      correo: [user?.correo || '', [Validators.required, Validators.email, Validators.maxLength(60), dominioEspecificoValidator('@gmail.com')]],
      contrasenia: [user?.contrasenia || '', [Validators.required, Validators.maxLength(255)]],
    });
  }

  loadUsers() {
    forkJoin([
      this.clientsService.getClients(),
      this.employeesService.getEmployees(),
      this.adminsService.getAdministrator(),
    ]).subscribe({
      next: ([clients, employees, administrator]) => {
        this.clients = clients;
        this.employees = employees;
        this.administrator = administrator;
        this.filterUsers();
      },
      error: (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    });
  }

  filterUsers() {
    if (!this.searchTerm) {
      // Si no hay término de búsqueda, mostrar todos los usuarios combinados
      this.filteredUsers = [
        ...this.clients.map(c => ({ ...c, type: 'cliente' })),
        ...this.employees.map(e => ({ ...e, type: 'empleado' })),
        ...this.administrator.map(a => ({ ...a, type: 'administrador '}))
      ];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredUsers = [
        ...this.clients.filter(c => 
          c.correo.toLowerCase().includes(term) || 
          c.nombre.toLowerCase().includes(term) ||
          `${c.nombre} ${c.appaterno} ${c.apmaterno}`.toLowerCase().includes(term)
        ).map(c => ({ ...c, type: 'cliente' })),
        ...this.employees.filter(e => 
          e.correo.toLowerCase().includes(term) || 
          e.nombre.toLowerCase().includes(term) ||
          `${e.nombre} ${e.appaterno} ${e.apmaterno}`.toLowerCase().includes(term)
        ).map(e => ({ ...e, type: 'empleado' })),
        ...this.administrator.filter(a => 
          a.correo.toLowerCase().includes(term) || 
          a.nombre.toLowerCase().includes(term) ||
          `${a.nombre} ${a.appaterno} ${a.apmaterno}`.toLowerCase().includes(term)
        ).map(a => ({ ...a, type: 'administrador' })),
      ];
    }
    
    // Calcular total de páginas
    this.totalPages = Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    // Asegurarse de que currentPage no exceda el total de páginas
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages > 0 ? this.totalPages : 1;
    }
  }

  onSearch() {
    this.currentPage = 1; // Resetear a la primera página al buscar
    this.filterUsers();
  }

  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredUsers.slice(startIndex, endIndex);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  private transformUserData(data: any): any {
    return {
      Correo: data.correo, 
      Contrasenia: data.contrasenia, 
    };
  }

  addUsers() {
    if (this.userForm.valid) {
      const userData = this.transformUserData(this.userForm.value); 
      this.clientsService.createClients;this.employeesService.createEmployees(userData).subscribe({
        next: (response) => {
          console.log('Usuario creado:', response);
          this.loadUsers();
        },
        error: (error) => {
          console.error('Error al crear usuario:', error);
        },
      });
    } else {
      this.markFormGroupTouched(this.userForm);
    }
  }
  
  getPagesArray(): number[] {
  return Array.from({ length: this.totalPages }, (_, i) => i + 1);
}

  markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
}