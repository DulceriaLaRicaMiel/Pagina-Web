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

export const ATUN_PRODUCTS: Product[] = [
    {
      id: 548,
      title: 'El Dorado Atún con 30% de Soya en Agua con Aceite',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Atun/El Dorado Soya en Agua con Aceite CONT NET 130 G.png',
      category: 'abarrotes',
      subcategory: 'atun',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/130 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 549,
      title: 'El Dorado Atún con 30% de Soya en Agua',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Atun/El Dorado Soya en Agua CONT NET 130 G.png',
      category: 'abarrotes',
      subcategory: 'atun',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/130 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 550,
      title: 'Tuny Clásico Atún en Agua sin Soya',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Atun/Tuny Clásico Atún en Agua CONT NET 75 G.png',
      category: 'abarrotes',
      subcategory: 'atun',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 8/75 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];