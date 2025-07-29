import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from '../../auth/services/checkout.service';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  bulkPrices?: { minQuantity: number; price: number }[];
}

interface TicketItem extends CartItem {
  total: number;
  effectivePrice: number;
  savings: number;
}

interface TicketData {
  name: string;
  business: string;
  phone: string;
  address: string;
  rfc: string;
  location: string;
  date: string;
  time: string;
  items: TicketItem[];
  subtotal: number;
  total: number;
  totalSavings: number;
  totalInWords: string;
  pickupDate: string;
}

@Component({
  selector: 'app-success',
  standalone: false,
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {
  sessionId: string | null = null;
  loading = true;
  error: string | null = null;
  ticketData: TicketData | null = null;
  downloadDisabled = false;
  private isBrowser: boolean;

  private businessInfo = {
    name: 'MARIA LUCINA ELVIRA ROSALES LEZAMA',
    business: 'DULCERIA LA RICA MIEL',
    phone: '01 (271) 714 0917',
    address: 'Calle 11 No. 1201 ESQ AV 12, COL. CENTRO C.P. 94500',
    rfc: 'ROLL-650629-AP1',
    location: 'CORDOBA VER.'
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: ActivatedRoute,
    private checkoutService: CheckoutService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.initializeComponent();
  }

  private initializeComponent(): void {
    this.sessionId = this.route.snapshot.queryParamMap.get('session_id');
    
    if (this.sessionId) {
      this.verifySessionStatus();
    } else {
      this.handleError('No se encontró ID de sesión');
    }
  }

  private verifySessionStatus(): void {
    this.checkoutService.getSessionStatus(this.sessionId!).subscribe({
      next: () => {
        this.loading = false;
        this.generateTicket();
      },
      error: (err) => {
        this.handleError('Error al verificar el estado del pago', err);
      }
    });
  }

  private handleError(message: string, error?: any): void {
    if (error) {
      console.error('Error en SuccessComponent:', error);
    }
    this.error = message;
    this.loading = false;
  }

  generateTicket(): void {
    if (!this.isBrowser) {
      this.handleError('No se puede generar ticket en el servidor');
      return;
    }

    try {
      const cartItems = this.getCartItems();
      
      if (cartItems.length === 0) {
        this.handleError('No se encontraron productos en el carrito');
        return;
      }

      this.ticketData = this.createTicketData(cartItems);
      this.clearCartStorage();
      
    } catch (error) {
      this.handleError('Error al generar el ticket', error);
    }
  }

  downloadTicket(): void {
    if (!this.isBrowser || !this.ticketData || this.downloadDisabled) return;

    this.downloadDisabled = true;
    
    try {
      const ticketContent = this.generateTicketHTML();
      const printWindow = window.open('', '_blank');
      
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(`
          <html>
            <head>
              <title>Ticket de Compra - ${this.ticketData?.business}</title>
              <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
                .ticket { max-width: 300px; margin: 0 auto; border: 1px solid #000; padding: 15px; }
                .ticket-header, .ticket-footer { text-align: center; }
                .ticket-item { display: flex; justify-content: space-between; margin: 5px 0; }
                .ticket-summary { margin-top: 10px; }
                .ticket-total { display: flex; justify-content: space-between; font-weight: bold; margin-top: 5px; }
                .ticket-savings { display: flex; justify-content: space-between; color: green; margin: 5px 0; }
                hr { border: 0.5px dashed #000; margin: 10px 0; }
                .important { font-weight: bold; color: red; }
                .original-price { text-decoration: line-through; color: #999; font-size: 0.8em; margin-left: 5px; }
                .savings { color: green; font-size: 0.8em; margin-left: 5px; }
                .item-details { display: flex; flex-direction: column; }
                .item-price { display: flex; flex-direction: column; align-items: flex-end; }
                .bulk-price { color: green; font-weight: bold; font-size: 0.8em }
              </style>
            </head>
            <body onload="window.print(); window.close();">
              ${ticketContent}
            </body>
          </html>
        `);
        printWindow.document.close();
      } else {
        throw new Error('No se pudo abrir la ventana de impresión');
      }
    } catch (error) {
      console.error('Error al generar el ticket:', error);
      this.downloadDisabled = false;
    }
  }

  private generateTicketHTML(): string {
    if (!this.ticketData) return '';

    return `
      <div class="ticket">
        <div class="ticket-header">
          <h2>${this.ticketData.business}</h2>
          <p>${this.ticketData.name}</p>
          <p>Tel: ${this.ticketData.phone}</p>
          <p>${this.ticketData.address}</p>
          <p>${this.ticketData.rfc}</p>
          <p>${this.ticketData.location}</p>
        </div>
        
        <div class="ticket-body">
          <p>Fecha: ${this.ticketData.date} - Hora: ${this.ticketData.time}</p>
          <hr>
          
          <h3>Detalle de compra:</h3>
          ${this.ticketData.items.map(item => {
            const hasDiscount = item.effectivePrice < item.price;
            return `
              <div class="ticket-item">
                <div class="item-details">
                  <span>${item.title} x${item.quantity}</span>
                  ${hasDiscount ? `<span class="original-price">Precio normal: $${item.price.toFixed(2)} c/u</span>` : ''}
                </div>
                <div class="item-price">
                  <span>$${item.total.toFixed(2)}</span>
                  ${hasDiscount ? `
                    <div>
                      <span class="bulk-price">Precio mayoreo: $${item.effectivePrice.toFixed(2)} c/u </span>
                      <span class="savings">Ahorro: $${item.savings.toFixed(2)}</span>
                    </div>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
          
          <hr>
          <div class="ticket-summary">
            <div class="ticket-total">
              <span>Subtotal:</span>
              <span>$${this.ticketData.subtotal.toFixed(2)}</span>
            </div>
            ${this.ticketData.totalSavings > 0 ? `
            <div class="ticket-savings">
              <span>Descuentos por mayoreo:</span>
              <span>-$${this.ticketData.totalSavings.toFixed(2)}</span>
            </div>
            ` : ''}
            <div class="ticket-total">
              <span>Total:</span>
              <span>$${this.ticketData.total.toFixed(2)}</span>
            </div>
          </div>
          <p>(${this.numberToWords(this.ticketData.total)} pesos)</p>
        </div>
        
        <div class="ticket-footer">
          <p>Salida la mercancía no se aceptan devoluciones</p>
          <p>Gracias por su Compra</p>
          <p class="important">Tiene hasta el ${this.ticketData.pickupDate} para recoger su producto</p>
        </div>
      </div>
    `;
  }

  private getCartItems(): CartItem[] {
    try {
      const sessionCart = sessionStorage.getItem('cart');
      if (sessionCart) {
        sessionStorage.removeItem('cart');
        const items = JSON.parse(sessionCart);
        // Asegurarse que bulkPrices esté definido para productos con descuento
        return items.map((item: any) => ({
          ...item,
          bulkPrices: item.bulkPrices || []
        }));
      }
      
      const localCart = localStorage.getItem('cart');
      if (localCart) {
        localStorage.removeItem('cart');
        const items = JSON.parse(localCart);
        return items.map((item: any) => ({
          ...item,
          bulkPrices: item.bulkPrices || []
        }));
      }
      
      return [];
    } catch (error) {
      console.error('Error al obtener el carrito:', error);
      return [];
    }
  }

  private createTicketData(cartItems: CartItem[]): TicketData {
    const now = new Date();
    
    const processedItems = cartItems.map(item => {
      const effectivePrice = this.getEffectivePrice(item);
      const regularTotal = item.price * item.quantity;
      const actualTotal = effectivePrice * item.quantity;
      const savings = regularTotal - actualTotal;

      return {
        ...item,
        effectivePrice,
        total: actualTotal,
        savings
      };
    });

    const subtotal = processedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = processedItems.reduce((sum, item) => sum + item.total, 0);
    const totalSavings = processedItems.reduce((sum, item) => sum + item.savings, 0);
    
    return {
      ...this.businessInfo,
      date: now.toLocaleDateString('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      time: now.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }),
      items: processedItems,
      subtotal,
      total,
      totalSavings,
      totalInWords: this.numberToWords(total),
      pickupDate: this.calculatePickupDate(now)
    };
  }

  private getEffectivePrice(item: CartItem): number {
    if (!item.bulkPrices || item.bulkPrices.length === 0) {
      return item.price;
    }

    // Ordenar de mayor a menor cantidad
    const sortedBulkPrices = [...item.bulkPrices].sort((a, b) => b.minQuantity - a.minQuantity);
    
    // Encontrar el primer precio que cumpla con la cantidad mínima
    const applicableBulkPrice = sortedBulkPrices.find(bp => item.quantity >= bp.minQuantity);
      
    return applicableBulkPrice ? applicableBulkPrice.price : item.price;
  }

  private clearCartStorage(): void {
    try {
      sessionStorage.removeItem('cart');
      localStorage.removeItem('cart');
    } catch (error) {
      console.error('Error al limpiar el carrito:', error);
    }
  }

  private calculatePickupDate(currentDate: Date): string {
    const pickupDate = new Date(currentDate);
    pickupDate.setDate(pickupDate.getDate() + 3);
    return pickupDate.toLocaleDateString('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  private numberToWords(num: number): string {
    const units = ['', 'un', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const teens = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const tens = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const hundreds = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    // Redondear al número entero más cercano
    const roundedNum = Math.round(num);
    
    if (roundedNum === 0) return 'cero';
    
    if (roundedNum < 10) return units[roundedNum];
    if (roundedNum < 20) return teens[roundedNum - 10];
    
    if (roundedNum < 100) {
      const ten = Math.floor(roundedNum / 10);
      const unit = roundedNum % 10;
      return tens[ten] + (unit !== 0 ? ' y ' + units[unit] : '');
    }

    if (roundedNum < 1000) {
      const hundred = Math.floor(roundedNum / 100);
      const remainder = roundedNum % 100;
      if (hundred === 1 && remainder === 0) return 'cien';
      return hundreds[hundred] + (remainder !== 0 ? ' ' + this.numberToWords(remainder) : '');
    }

    if (roundedNum < 1000000) {
      const thousand = Math.floor(roundedNum / 1000);
      const remainder = roundedNum % 1000;
      let thousandStr = thousand === 1 ? 'mil' : this.numberToWords(thousand) + ' mil';
      return thousandStr + (remainder !== 0 ? ' ' + this.numberToWords(remainder) : '');
    }

    return 'Número demasiado grande';
  }
}