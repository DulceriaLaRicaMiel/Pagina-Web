import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../auth/services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { soloLetrasValidator, soloLetras, soloNumerosValidator } from '../../../validations/validators';
import { AuthService } from '../../../auth/services/auth.service';
import { ActivitiesService } from '../../../auth/services/Activities.service';

interface Products {
  idproducto: number;
  nombre: string;
  precio: number | string;
  descripcion: string;
  stock: number;
  categoria: string;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-inventarios',
  standalone: false,
  templateUrl: './inventarios.component.html',
  styleUrl: './inventarios.component.css'
})

export class InventariosComponent implements OnInit {
  products: Products[] = [];
  filteredProducts: Products[] = [];
  showAddModal = false;
  showEditModal = false;
  showDeleteModal = false;
  productsForm!: FormGroup;
  currentProducts: Products | null = null;
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 7;
  totalPages: number = 1;
  userRole: string = 'cliente';

  constructor(private productsService: ProductsService, private fb: FormBuilder, private authService: AuthService, private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
    this.loadProducts();
    this.initForm();
}

initForm(products?: Products) {
          this.productsForm = this.fb.group({
            nombre: [products?.nombre || '', [Validators.required, Validators.maxLength(50), soloLetrasValidator()]],
            precio: [products?.precio || '', [Validators.required, Validators.pattern(/^\d+\.?\d{0,2}$/)]],
            descripcion: [products?.descripcion || '', [Validators.required, Validators.maxLength(50)]],
            stock: [products?.stock || '', [Validators.required, soloNumerosValidator(10)]],
            categoria: [products?.categoria || '', [Validators.required, Validators.maxLength(50), soloLetrasValidator()]],
          });
        }

  // Filtrado de productos
  filterProducts() {
    if (!this.searchTerm) {
      this.filteredProducts = [...this.products];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredProducts = this.products.filter(product => 
        product.nombre.toLowerCase().includes(term) ||
        product.categoria.toLowerCase().includes(term)
      );
    }
    this.currentPage = 1;
    this.calculateTotalPages();
  }

  // Paginación
  calculateTotalPages() {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }

  get paginatedProducts(): Products[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, startIndex + this.itemsPerPage);
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

    loadProducts() {
      this.productsService.getProducts().subscribe({
        next: (data: Products[]) => {
          this.products = data;
          this.filteredProducts = [...data];
          this.calculateTotalPages();
        },
        error: (error) => {
          console.error('Error al obtener productos:', error);
          alert('Error al cargar productos');
        },
      });
    }

    openAddModal() {
      if (this.userRole === 'cliente') {
      alert('No tienes permisos para agregar productos');
      return;
    }
      this.initForm();
      this.showAddModal = true;
    }
  
    closeAddModal() {
      this.showAddModal = false;
    }
  
    private transformProductsData(data: any): any {
      return {
        Nombre: data.nombre, 
        Precio: Number (data.precio),
        Descripcion: data.descripcion,
        STOCK: data.stock,
        Categoria: data.categoria,
      };
    }

    addProducts() {
      if (this.productsForm.valid) {
        const productsData = this.transformProductsData(this.productsForm.value); 
        this.productsService.createProducts(productsData).subscribe({
          next: (response) => {
            console.log('Producto creado:', response);
            // Registrar actividad
          const user = this.authService.getUser();
          if (user) {
            this.activitiesService.registerActivity(
              user,
              `Agregó nuevo producto: ${productsData.Nombre}`,
              'product',
              'created'
            );
          }
            this.loadProducts();
            this.closeAddModal();
          },
          error: (error) => {
            console.error('Error al crear producto:', error);
            alert('Error al crear el producto');
          },
        });
      } else {
        this.markFormGroupTouched(this.productsForm);
      }
    }

        openEditModal(products: Products) {
          if (this.userRole === 'cliente') {
             alert('No tienes permisos para editar productos');
            return;
          }
          this.currentProducts = products;
          this.initForm(products);
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
          this.currentProducts = null;
        }

        updateProducts() {
          if (this.productsForm.valid && this.currentProducts) {
            const productsData = this.transformProductsData(this.productsForm.value); 
            this.productsService
              .updateProducts(this.currentProducts.idproducto, productsData)
              .subscribe({
                next: (response) => {
                  console.log('Producto actualizado:', response);
                  // Registrar actividad
            const user = this.authService.getUser();
            if (user) {
              this.activitiesService.registerActivity(
                user,
                `Actualizó producto: ${productsData.Nombre}`,
                'product',
                'updated'
              );
            }
                  this.loadProducts();
                  this.closeEditModal();
                },
                error: (error) => {
                  console.error('Error al actualizar producto:', error);
                  alert('Error al actualizar el producto');
                },
              });
          } else {
            this.markFormGroupTouched(this.productsForm);
          }
        }

        openDeleteModal(products: Products) {
          if (this.userRole === 'cliente') {
            alert('No tienes permisos para eliminar productos');
            return;
          }
          this.currentProducts = products;
          this.showDeleteModal = true;
        }
      
        closeDeleteModal() {
          this.showDeleteModal = false;
          this.currentProducts = null;
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

        deleteProducts() {
          if (this.currentProducts) {
            this.productsService.deleteProducts(this.currentProducts.idproducto).subscribe({
              next: (response) => {
                console.log('Producto eliminado:', response);
                // Registrar actividad
            const user = this.authService.getUser();
            if (user) {
              this.activitiesService.registerActivity(
                user,
                `Eliminó producto: ${this.currentProducts?.nombre}`,
                'product',
                'deleted'
              );
            }
                this.loadProducts();
                this.closeDeleteModal();
              },
              error: (error) => {
                console.error('Error al eliminar producto:', error);
                alert('Error al eliminar el producto');
              },
            });
          }
        }
}
