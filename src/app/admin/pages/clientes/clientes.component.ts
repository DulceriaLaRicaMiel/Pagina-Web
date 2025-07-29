import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../auth/services/clients.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { soloLetrasValidator, soloLetras, soloNumerosValidator, dominioEspecificoValidator } from '../../../validations/validators';
import { AuthService } from '../../../auth/services/auth.service';
import { ActivitiesService } from '../../../auth/services/Activities.service';

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

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
 clients: Clients[] = [];
 filteredClients: Clients[] = [];
    showAddModal = false;
    showEditModal = false;
    showDeleteModal = false;
    clientsForm!: FormGroup;
    currentClients: Clients | null = null;
    searchTerm: string = '';
    currentPage: number = 1;
    itemsPerPage: number = 7;
    totalPages: number = 1;

    constructor(private clientsService: ClientsService, private fb: FormBuilder, private authService: AuthService, private activitiesService: ActivitiesService) {}

    ngOnInit(): void {
        this.loadClients();
        this.initForm();
    }

    initForm(clients?: Clients) {
      this.clientsForm = this.fb.group({
        nombre: [clients?.nombre || '', [Validators.required, Validators.maxLength(40), soloLetrasValidator()]],
        appaterno: [clients?.appaterno || '', [Validators.required, Validators.maxLength(40), soloLetrasValidator()]],
        apmaterno: [clients?.apmaterno || '', [Validators.required, Validators.maxLength(40), soloLetrasValidator()]],
        telefono: [clients?.telefono || '', [Validators.required, soloNumerosValidator(10)]],
        correo: [clients?.correo || '', [Validators.required, Validators.email, Validators.maxLength(60)]],
        contrasenia: [clients?.contrasenia || '', [Validators.required, Validators.maxLength(255)]],
      });
    }

      // Filtrado de clientes
  filterClients() {
    if (!this.searchTerm) {
      this.filteredClients = [...this.clients];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredClients = this.clients.filter(client => 
        client.nombre.toLowerCase().includes(term) ||
        client.appaterno.toLowerCase().includes(term) ||
        client.apmaterno.toLowerCase().includes(term) ||
        client.correo.toLowerCase().includes(term)
      );
    }
    this.currentPage = 1;
    this.calculateTotalPages();
  }

  // Paginación
  calculateTotalPages() {
    this.totalPages = Math.ceil(this.filteredClients.length / this.itemsPerPage);
  }

  get paginatedClients(): Clients[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredClients.slice(startIndex, startIndex + this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

    validarCorreo(): void {
      const correoControl = this.clientsForm.get('correo');
      if (correoControl?.invalid) {
        console.log('Correo inválido');
      } else {
        console.log('Correo válido');
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

    loadClients() {
      this.clientsService.getClients().subscribe({
        next: (data: Clients[]) => {
          this.clients = data;
          this.filteredClients = [...data]; // Añade esta línea
          this.calculateTotalPages();
        },
        error: (error) => {
          console.error('Error al obtener clientes:', error);
          alert('Error al cargar clientes');
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
  
    private transformClientData(data: any): any {
      return {
        Nombre: data.nombre, 
        ApPaterno: data.appaterno,
        ApMaterno: data.apmaterno,
        Telefono: data.telefono, 
        Correo: data.correo, 
        Contrasenia: data.contrasenia, 
      };
    }

    addClients() {
      if (this.clientsForm.valid) {
        const clientData = this.transformClientData(this.clientsForm.value); 
        this.clientsService.createClients(clientData).subscribe({
          next: (response) => {
            console.log('Cliente creado:', response);
            const user = this.authService.getUser();
        if (user) {
          this.activitiesService.registerActivity(
            user,
            `Registró nuevo cliente: ${clientData.Nombre} ${clientData.ApPaterno}`,
            'client',
            'created'
          );
        }
            this.loadClients();
            this.closeAddModal();
          },
          error: (error) => {
            console.error('Error al crear cliente:', error);
            alert('Error al crear el cliente');
          },
        });
      } else {
        this.markFormGroupTouched(this.clientsForm);
      }
    }

      openEditModal(clients: Clients) {
        this.currentClients = clients;
        this.initForm(clients);
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
        this.currentClients = null;
      }

      updateClients() {
        if (this.clientsForm.valid && this.currentClients) {
          const clientData = this.transformClientData(this.clientsForm.value); 
          this.clientsService
            .updateClients(this.currentClients.idcliente, clientData)
            .subscribe({
              next: (response) => {
                console.log('Cliente actualizado:', response);
                const user = this.authService.getUser();
          if (user) {
            this.activitiesService.registerActivity(
              user,
              `Actualizó datos del cliente: ${clientData.Nombre} ${clientData.ApPaterno}`,
              'client',
              'updated'
            );
          }
                this.loadClients();
                this.closeEditModal();
              },
              error: (error) => {
                console.error('Error al actualizar cliente:', error);
                alert('Error al actualizar el cliente');
              },
            });
        } else {
          this.markFormGroupTouched(this.clientsForm);
        }
      }

      openDeleteModal(clients: Clients) {
        this.currentClients = clients;
        this.showDeleteModal = true;
      }
    
      closeDeleteModal() {
        this.showDeleteModal = false;
        this.currentClients = null;
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
    
      deleteClients() {
        if (this.currentClients) {
          this.clientsService.deleteClients(this.currentClients.idcliente).subscribe({
            next: (response) => {
              console.log('Cliente eliminado:', response);
              const user = this.authService.getUser();
        if (user) {
          this.activitiesService.registerActivity(
            user,
            `Eliminó cliente: ${this.currentClients?.nombre} ${this.currentClients?.appaterno}`,
            'client',
            'deleted'
          );
        }
              this.loadClients();
              this.closeDeleteModal();
            },
            error: (error) => {
              console.error('Error al eliminar cliente:', error);
              alert('Error al eliminar el cliente');
            },
          });
        }
      }
}
