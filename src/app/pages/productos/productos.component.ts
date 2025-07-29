import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { soloLetras } from '../../validations/validators';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from '../../../environments/environment';
import { CheckoutService } from '../../auth/services/checkout.service';
import { firstValueFrom } from 'rxjs';
import { Product, PRODUCTS } from '../../data/products.data';
import { Category, Subcategory, CATEGORIES } from '../../data/categories.data';

interface CartItem extends Product {
  quantity: number;
  effectivePrice?: number;
}

interface Notification {
  show: boolean;
  message: string;
}

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent {

 private stripePublicKey = loadStripe(environment.stripePublicKey);
 private apiUrl = environment.apiUrl; 
 private isBrowser: boolean;
 isCartEmpty = true;

  products: Product[] = PRODUCTS;

  filteredProducts: Product[] = [];
  cart: CartItem[] = [];
  isCartOpen = false;
  searchTerm = '';
  selectedCategory = 'all';
  selectedSubcategory = 'all';
  selectedMinPieces = 'all';
  cartTotalItems = 0;
  cartTotalPrice = 0;
  cartTotalSavings = 0;
  selectedProduct: Product | null = null;
  isProductModalOpen = false;
  notification: Notification = { show: false, message: '' };

  isImageViewerOpen = false;
  currentImageUrl = '';
  imageZoomScale = 1;
  imageOffsetX = 0;
  imageOffsetY = 0;
  isDraggingImage = false;
  dragStartX = 0;
  dragStartY = 0;
  dragStartOffsetX = 0;
  dragStartOffsetY = 0;
  processingPayment: boolean = false;

  categories: Category[] = CATEGORIES;

  constructor(
    private checkoutService: CheckoutService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.initializeCart();
    this.filteredProducts = [...this.products];
    this.updateCartTotals();
  }

  private initializeCart(): void {
    if (this.isBrowser) {
      const isSuccessPage = window.location.pathname.includes('success');
      this.cart = isSuccessPage ? [] : this.getCartFromStorage();
      this.isCartEmpty = this.cart.length === 0; // Actualizar estado del carrito
    } else {
      this.cart = [];
      this.isCartEmpty = true;
    }
  }

  private getCartFromStorage(): CartItem[] {
    try {
      const sessionCart = sessionStorage.getItem('cart');
      if (sessionCart) return JSON.parse(sessionCart);
      
      const localCart = localStorage.getItem('cart');
      return localCart ? JSON.parse(localCart) : [];
    } catch (e) {
      console.error('Error al leer el carrito', e);
      return [];
    }
  }

  private saveCartToStorage(cart: CartItem[]): void {
    if (!this.isBrowser) return;
    
    try {
      sessionStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('cart', JSON.stringify(cart));
      this.isCartEmpty = cart.length === 0; // Actualizar estado del carrito
    } catch (e) {
      console.error('Error al guardar el carrito', e);
    }
  }

  private clearCartStorage(): void {
    if (!this.isBrowser) return;
    
    try {
      sessionStorage.removeItem('cart');
      localStorage.removeItem('cart');
      this.isCartEmpty = true; // Actualizar estado del carrito
    } catch (e) {
      console.error('Error al limpiar el carrito', e);
    }
  }

  private getMinPiecesFromProduct(product: Product): number {
    const match = product.part.match(/Mayoreo a partir de (\d+) piezas/i);
    return match ? parseInt(match[1], 10) : 0;
  }

  onKeyPress(event: KeyboardEvent): boolean {
    return soloLetras(event);
  }

  getStars(rating: number): string[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push('full');
      } else if (i === fullStars && halfStar) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }

    return stars;
  }

  getCategoryName(categorySlug: string, subcategorySlug?: string): string {
    if (subcategorySlug) {
      const category = this.categories.find((c) => c.value === categorySlug);
      if (category) {
        const subcategory = category.subcategories.find(
          (s) => s.value === subcategorySlug
        );
        if (subcategory) return `${category.name} / ${subcategory.name}`;
      }
      return subcategorySlug;
    }

    const category = this.categories.find((c) => c.value === categorySlug);
    return category ? category.name : categorySlug;
  }

  onCategoryChange(): void {
    this.selectedSubcategory = 'all';
    this.filterProducts();
  }

  getCurrentSubcategories(): Subcategory[] {
    if (this.selectedCategory === 'all') return [];
    const category = this.categories.find(
      (c) => c.value === this.selectedCategory
    );
    return category ? category.subcategories : [];
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory =
        this.selectedCategory === 'all' ||
        product.category === this.selectedCategory;
      const matchesSubcategory =
        this.selectedSubcategory === 'all' ||
        product.subcategory === this.selectedSubcategory;

      let matchesMinPieces = true;
      if (this.selectedMinPieces !== 'all') {
        const selectedPieces = parseInt(this.selectedMinPieces, 10);
        const productMinPieces = this.getMinPiecesFromProduct(product);
        matchesMinPieces = productMinPieces === selectedPieces;
      }

      return matchesSearch && matchesCategory && matchesSubcategory && matchesMinPieces;
    });
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  addToCart(product: Product): void {
    if (product.stock <= 0) {
      this.showNotification(`${product.title} está agotado y no se puede agregar al carrito`);
      return;
    }

    const existingItem = this.cart.find((item) => item.id === product.id);

    if (existingItem) {
      if (existingItem.quantity >= product.stock) {
        this.showNotification(`No hay suficiente stock de ${product.title}`);
        return;
      }
      existingItem.quantity++;existingItem.effectivePrice = this.getProductPrice(product, existingItem.quantity);
    } else {
      this.cart.push({
        ...product,
        quantity: 1,
        effectivePrice: product.price 
      });
    }

    this.updateCartTotals();
    this.saveCartToStorage(this.cart);
    this.showNotification(`${product.title} agregado al carrito`);
  }

  hasOutOfStockItems(): boolean {
    return this.cart.some(item => {
      const product = this.products.find(p => p.id === item.id);
      return product ? item.quantity > product.stock : false;
    });
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter((item) => item.id !== productId);
    this.updateCartTotals();
    this.saveCartToStorage(this.cart); 
  }

  updateQuantity(productId: number, change: number): void {
    const item = this.cart.find((item) => item.id === productId);
    if (item) {
      const product = this.products.find(p => p.id === productId);

      if (change > 0 && product && item.quantity >= product.stock) {
        this.showNotification(`No hay suficiente stock de ${item.title}`);
        return;
      }
      
      item.quantity += change;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
        return;
      }
       item.effectivePrice = this.getProductPrice(item, item.quantity);
      this.updateCartTotals();
      this.saveCartToStorage(this.cart);
    }
  }

  getProductPrice(product: Product, quantity: number): number {
  if (!product.bulkPrices || product.bulkPrices.length === 0) {
    return product.price;
  }

  // Ordenar de mayor a menor cantidad para aplicar el descuento correcto
  const sortedBulkPrices = [...product.bulkPrices].sort((a, b) => b.minQuantity - a.minQuantity);
  
  // Encontrar el precio por mayoreo que corresponde a la cantidad
  const applicableBulkPrice = sortedBulkPrices.find(bp => quantity >= bp.minQuantity);
    
  return applicableBulkPrice ? applicableBulkPrice.price : product.price;
}

// Método para calcular el ahorro por item
  getItemSavings(item: CartItem): number {
    if (!item.bulkPrices || item.bulkPrices.length === 0) return 0;
    
    const regularPrice = item.price * item.quantity;
    const bulkPrice = this.getProductPrice(item, item.quantity) * item.quantity;
    
    return regularPrice - bulkPrice;
  }

  // Método para verificar si un item tiene descuento por mayoreo
  hasBulkDiscount(item: CartItem): boolean {
    if (!item.bulkPrices || item.bulkPrices.length === 0) return false;
    return this.getProductPrice(item, item.quantity) < item.price;
  }

  // Método para obtener el próximo nivel de descuento
  getNextDiscountLevel(item: CartItem): { quantity: number, price: number } | null {
    if (!item.bulkPrices || item.bulkPrices.length === 0) return null;
    
    const sortedBulkPrices = [...item.bulkPrices].sort((a, b) => a.minQuantity - b.minQuantity);
    const nextLevel = sortedBulkPrices.find(bp => bp.minQuantity > item.quantity);
    
    return nextLevel ? { quantity: nextLevel.minQuantity, price: nextLevel.price } : null;
  }

calculateItemPrice(item: CartItem): number {
   return (item.effectivePrice || this.getProductPrice(item, item.quantity)) * item.quantity;
}

getBulkDiscountInfo(product: Product): string {
    if (!product.bulkPrices || product.bulkPrices.length === 0) return '';
    
    const sortedLevels = [...product.bulkPrices].sort((a, b) => a.minQuantity - b.minQuantity);
    return sortedLevels.map(level => 
      `A partir de ${level.minQuantity} unidades: $${level.price.toFixed(2)} c/u`
    ).join('\n');
  }

  updateCartTotals(): void {
    this.cartTotalItems = this.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const regularTotal = this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Calcular total con descuentos aplicados
    const discountedTotal = this.cart.reduce((total, item) => {
      const effectivePrice = this.getProductPrice(item, item.quantity);
      item.effectivePrice = effectivePrice; // Actualizar precio efectivo
      return total + (effectivePrice * item.quantity);
    }, 0);
    
    this.cartTotalPrice = discountedTotal;
    this.cartTotalSavings = regularTotal - discountedTotal;
    this.isCartEmpty = this.cart.length === 0;
  }
  
  async checkout(): Promise<void> {
    this.processingPayment = true;

    try {
      if (this.cart.length === 0) {
        this.showNotification('El carrito está vacío');
        return;
      }

      if (this.hasOutOfStockItems()) {
        this.showNotification('Algunos productos no tienen suficiente stock');
        return;
      }

      sessionStorage.setItem('cart', JSON.stringify(this.cart));

      const stripeItems = this.cart.map(item => ({
        id: item.id, 
        quantity: item.quantity,
        unit_price: this.getProductPrice(item, item.quantity) 
      }));

      await firstValueFrom(this.checkoutService.checkout(stripeItems));

      this.clearCartStorage();
      this.cart = [];
      this.updateCartTotals();
      
    } catch (error: any) { 
      console.error('Error en checkout:', error);
      let message = 'Error al procesar el pago';
      
      if (error instanceof Error) {
        message = error.message;
      } else if (error?.message) {
        message = error.message;
      }

      this.showNotification(message);
    } finally {
        // Desactivar estado de carga siempre
        this.processingPayment = false;
    }
  }

  viewDetails(productId: number): void {
    this.selectedProduct = this.products.find((p) => p.id === productId) || null;
    this.isProductModalOpen = true;
  }

  closeProductModal(): void {
    this.isProductModalOpen = false;
  }

  showNotification(message: string): void {
    this.notification = { show: true, message };
    setTimeout(() => {
      this.notification.show = false;
    }, 3000);
  }

  openImageViewer(imageUrl: string): void {
    this.currentImageUrl = imageUrl;
    this.isImageViewerOpen = true;
    this.resetImageZoom();
  }

  closeImageViewer(): void {
    this.isImageViewerOpen = false;
    this.resetImageZoom();
  }

  resetImageZoom(): void {
    this.imageZoomScale = 1;
    this.imageOffsetX = 0;
    this.imageOffsetY = 0;
  }

  onImageWheel(event: WheelEvent): void {
    event.preventDefault();

    const delta = -Math.sign(event.deltaY);
    const newScale = this.imageZoomScale + delta * 0.2;

    this.imageZoomScale = Math.min(Math.max(newScale, 1), 5);

    if (this.imageZoomScale === 1) {
      this.imageOffsetX = 0;
      this.imageOffsetY = 0;
    }
  }

  startImageDrag(event: MouseEvent): void {
    if (this.imageZoomScale <= 1) return;

    this.isDraggingImage = true;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    this.dragStartOffsetX = this.imageOffsetX;
    this.dragStartOffsetY = this.imageOffsetY;
    event.preventDefault();
  }

  onImageDrag(event: MouseEvent): void {
    if (!this.isDraggingImage) return;

    const dx = event.clientX - this.dragStartX;
    const dy = event.clientY - this.dragStartY;

    this.imageOffsetX = this.dragStartOffsetX + dx;
    this.imageOffsetY = this.dragStartOffsetY + dy;
  }

  endImageDrag(): void {
    this.isDraggingImage = false;
  }
}