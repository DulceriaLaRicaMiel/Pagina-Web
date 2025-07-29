import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../../auth/services/employees.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { soloLetrasValidator, soloLetras, soloNumerosValidator, dominioEspecificoValidator } from '../../../validations/validators';
import { AuthService } from '../../../auth/services/auth.service';
import { ActivitiesService } from '../../../auth/services/Activities.service';

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

@Component({
  selector: 'app-empleados',
  standalone: false,
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  employees: Employees[] = [];
  filteredEmployees: Employees[] = [];
  showAddModal = false;
  showEditModal = false;
  showDeleteModal = false;
  employeesForm!: FormGroup;
  currentEmployees: Employees | null = null;
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 7;
  totalPages: number = 1;

  constructor(private employeesService: EmployeesService, private fb: FormBuilder, private authService: AuthService, private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.loadEmployees();
    this.initForm();
  }

  initForm(employees?: Employees) {
    this.employeesForm = this.fb.group({
      nombre: [employees?.nombre || '', [Validators.required, Validators.maxLength(40), soloLetrasValidator()]],
      appaterno: [employees?.appaterno || '', [Validators.required, Validators.maxLength(40), soloLetrasValidator()]],
      apmaterno: [employees?.apmaterno || '', [Validators.required, Validators.maxLength(40), soloLetrasValidator()]],
      telefono: [employees?.telefono || '', [Validators.required, soloNumerosValidator(10)]],
      nss: [employees?.nss || '', [Validators.required, soloNumerosValidator(11)]],
      rfc: [employees?.rfc || '', [Validators.required, Validators.maxLength(13)]],
      correo: [employees?.correo || '', [Validators.required, Validators.email, Validators.maxLength(60)]],
      contrasenia: [employees?.contrasenia || '', [Validators.required, Validators.maxLength(255)]],
    });
  }

  // Filtrado de empleados
  filterEmployees() {
    if (!this.searchTerm) {
      this.filteredEmployees = [...this.employees];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredEmployees = this.employees.filter(employee => 
        employee.nombre.toLowerCase().includes(term) ||
        employee.appaterno.toLowerCase().includes(term) ||
        employee.apmaterno.toLowerCase().includes(term) ||
        employee.correo.toLowerCase().includes(term)
      );
    }
    this.currentPage = 1;
    this.calculateTotalPages();
  }

  // Paginación
  calculateTotalPages() {
    this.totalPages = Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
  }

  get paginatedEmployees(): Employees[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredEmployees.slice(startIndex, startIndex + this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Validaciones
  validarCorreo(): void {
    const correoControl = this.employeesForm.get('correo');
    if (correoControl?.invalid) {
      console.log('Correo inválido');
    } else {
      console.log('Correo válido');
    }
  }

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

  // Cargar empleados
  loadEmployees() {
    this.employeesService.getEmployees().subscribe({
      next: (data: Employees[]) => {
        this.employees = data;
        this.filteredEmployees = [...data];
        this.calculateTotalPages();
      },
      error: (error) => {
        console.error('Error al obtener empleados:', error);
        alert('Error al cargar empleados');
      },
    });
  }

  // Modal para agregar
  openAddModal() {
    this.initForm();
    this.showAddModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
  }

  // Transformar datos para la API
  private transformEmployeeData(data: any): any {
    return {
      Nombre: data.nombre, 
      ApPaterno: data.appaterno,
      ApMaterno: data.apmaterno,
      Telefono: data.telefono,
      NSS: data.nss,
      RFC: data.rfc, 
      Correo: data.correo, 
      Contrasenia: data.contrasenia,
    };
  }

  // Agregar empleado
  addEmployees() {
    if (this.employeesForm.valid) {
      const employeeData = this.transformEmployeeData(this.employeesForm.value); 
      this.employeesService.createEmployees(employeeData).subscribe({
        next: (response) => {
          console.log('Empleado creado:', response);
          const user = this.authService.getUser();
        if (user) {
          this.activitiesService.registerActivity(
            user,
            `Registró nuevo empleado: ${employeeData.Nombre} ${employeeData.ApPaterno}`,
            'employee',
            'created'
          );
        }
          this.loadEmployees();
          this.closeAddModal();
        },
        error: (error) => {
          console.error('Error al crear empleado:', error);
          alert('Error al crear el empleado');
        },
      });
    } else {
      this.markFormGroupTouched(this.employeesForm);
    }
  }

  // Modal para editar
  openEditModal(employees: Employees) {
    this.currentEmployees = employees;
    this.initForm(employees);
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
    this.currentEmployees = null;
  }

  // Actualizar empleado
  updateEmployees() {
    if (this.employeesForm.valid && this.currentEmployees) {
      const employeeData = this.transformEmployeeData(this.employeesForm.value); 
      this.employeesService
        .updateEmployees(this.currentEmployees.idempleado, employeeData)
        .subscribe({
          next: (response) => {
            console.log('Empleado actualizado:', response);
            const user = this.authService.getUser();
          if (user) {
            this.activitiesService.registerActivity(
              user,
              `Actualizó datos del empleado: ${employeeData.Nombre} ${employeeData.ApPaterno}`,
              'employee',
              'updated'
            );
          }
            this.loadEmployees();
            this.closeEditModal();
          },
          error: (error) => {
            console.error('Error al actualizar empleado:', error);
            alert('Error al actualizar el empleado');
          },
        });
    } else {
      this.markFormGroupTouched(this.employeesForm);
    }
  }

  // Modal para eliminar
  openDeleteModal(employees: Employees) {
    this.currentEmployees = employees;
    this.showDeleteModal = true;
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.currentEmployees = null;
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


  // Eliminar empleado
  deleteEmployees() {
    if (this.currentEmployees) {
      this.employeesService.deleteEmployees(this.currentEmployees.idempleado).subscribe({
        next: (response) => {
          console.log('Empleado eliminado:', response);
          const user = this.authService.getUser();
        if (user) {
          this.activitiesService.registerActivity(
            user,
            `Eliminó empleado: ${this.currentEmployees?.nombre} ${this.currentEmployees?.appaterno}`,
            'employee',
            'deleted'
          );
        }
          this.loadEmployees();
          this.closeDeleteModal();
        },
        error: (error) => {
          console.error('Error al eliminar empleado:', error);
          alert('Error al eliminar el empleado');
        },
      });
    }
  }
}