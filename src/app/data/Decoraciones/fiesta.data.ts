export interface BulkPrice {
  minQuantity: number;
  price: number;
  priceId?: string; // ID de precio en Stripe para este nivel de mayoreo
}

export interface Product {
  id: number;
  title: string;
  price: number;
  bulkPrices?: BulkPrice[];
  image: string;
  category: string;
  subcategory: string;
  rating: number;
  reviews: number;
  description: string;
  part: string;
  isFeatured: boolean;
  stock: number;
}

export const FIESTA_PRODUCTS: Product[] = [
    {
      id: 818,
      title: 'Loot Bags',
      price: 200.0,
      image: '/assets/Segmentos/Decoraciones/Fiesta/Loot Bags CONT 4 PZ.png',
      category: 'decoraciones',
      subcategory: 'fiesta',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 4 piezas',
      part: '',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 819,
      title: 'Loot Bags (16.5 cm x 22.86 cm)',
      price: 200.0,
      image: '/assets/Segmentos/Decoraciones/Fiesta/Loot Bags CONT 8 PZ.png',
      category: 'decoraciones',
      subcategory: 'fiesta',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 8 piezas',
      part: '',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 820,
      title: 'Vela para Pastel',
      price: 200.0,
      image: '/assets/Segmentos/Decoraciones/Fiesta/Vela para Pastel 0.png',
      category: 'decoraciones',
      subcategory: 'fiesta',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 1 pieza',
      part: '',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 821,
      title: 'Alegria Vela para Pastel',
      price: 200.0,
      image: '/assets/Segmentos/Decoraciones/Fiesta/Vela para Pastel.png',
      category: 'decoraciones',
      subcategory: 'fiesta',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 1 pieza',
      part: '',
      isFeatured: true,
      stock: 1000,
    },
];