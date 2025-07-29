import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { loadStripe } from '@stripe/stripe-js';
import { switchMap, catchError } from 'rxjs/operators';
import { Observable, from, throwError } from 'rxjs';

interface StripeCheckoutItem {
  id: number;
  quantity: number;
  unit_price?: number;
  name?: string; 
}

interface SessionStatus {
  status: string;
  customer_email?: string;
  payment_status?: string;
  amount_total?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.apiUrl;
  private _cartItems: any[] = []; 

  // Precios por mayoreo (opcional: puedes mantener esto solo en el backend)
  private readonly BULK_DISCOUNT_THRESHOLDS: {[key: number]: number} = {
    13: 4, // Producto ID 13 tiene descuento por mayoreo a partir de 4 unidades
    14: 4  // Producto ID 14 tiene descuento por mayoreo a partir de 4 unidades
  };

  setCartItems(items: any[]): void {
    this._cartItems = items;
  }

  getCartItems(): any[] {
    return this._cartItems;
  }

  /**
   * Realiza el proceso de checkout
   * @param items Los items del carrito
   * @param cartEncoded Opcional: carrito codificado (no usado en esta implementación)
   */
  checkout(items: StripeCheckoutItem[], cartEncoded?: string): Observable<void> {
    // Validar items antes de enviar
    const validatedItems = this.validateItems(items);
    
    this.setCartItems(validatedItems);

    return this._http.post<{id: string}>(`${this._url}/create-checkout-session`, { 
      items: validatedItems 
    }).pipe(
      switchMap(response => this.redirectToStripe(response.id)),
      catchError(error => {
        console.error('Error en checkout:', error);
        return throwError(() => new Error(this.getUserFriendlyError(error)));
      })
    );
  }

  /**
   * Obtiene el estado de una sesión de pago
   * @param sessionId El ID de la sesión de Stripe
   */
  getSessionStatus(sessionId: string): Observable<SessionStatus> {
    return this._http.get<SessionStatus>(
      `${this._url}/session-status?session_id=${sessionId}`
    ).pipe(
      catchError(error => {
        console.error('Error al verificar estado:', error);
        return throwError(() => new Error('Error al verificar estado del pago'));
      })
    );
  }

  /**
   * Valida los items antes de enviarlos al backend
   * @param items Los items a validar
   */
  private validateItems(items: StripeCheckoutItem[]): StripeCheckoutItem[] {
    return items.map(item => {
      if (!item.id || !item.quantity || item.quantity <= 0) {
        throw new Error('Los items del carrito no son válidos');
      }
      return item;
    });
  }

  /**
   * Redirige a Stripe para el pago
   * @param sessionId El ID de la sesión de checkout
   */
  private redirectToStripe(sessionId: string): Observable<void> {
    return from(this.initializeStripe(sessionId));
  }

  /**
   * Inicializa Stripe y redirige al checkout
   * @param sessionId El ID de la sesión de checkout
   */
  private async initializeStripe(sessionId: string): Promise<void> {
    try {
      const stripe = await loadStripe(environment.stripePublicKey);
      if (!stripe) {
        throw new Error('No se pudo inicializar Stripe');
      }

      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Error al inicializar Stripe:', error);
      throw error;
    }
  }

  /**
   * Traduce errores técnicos a mensajes amigables para el usuario
   * @param error El error original
   */
  private getUserFriendlyError(error: any): string {
    if (error.error?.error?.code === 'resource_missing') {
      return 'No se encontró información del producto. Por favor, actualiza la página e intenta nuevamente.';
    }
    return 'Ocurrió un error al procesar el pago. Por favor, intenta nuevamente.';
  }

  /**
   * (Opcional) Verifica si un item califica para descuento por mayoreo
   * Esto puede usarse para mostrar información al usuario antes del checkout
   * @param productId El ID del producto
   * @param quantity La cantidad solicitada
   */
  qualifiesForBulkDiscount(productId: number, quantity: number): boolean {
    const threshold = this.BULK_DISCOUNT_THRESHOLDS[productId];
    return threshold ? quantity >= threshold : false;
  }

  /**
   * (Opcional) Obtiene el umbral de cantidad para descuento por mayoreo
   * @param productId El ID del producto
   */
  getBulkDiscountThreshold(productId: number): number | null {
    return this.BULK_DISCOUNT_THRESHOLDS[productId] || null;
  }
}