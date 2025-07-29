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

export const AGUA_PRODUCTS: Product[] = [
    {
      id: 468,
      title: 'E’pura ama tu cuerpo Agua Purificada sin sodio',
      price: 200.0,
      image: '/assets/Segmentos/Bebidas/Agua/Epura Agua Purificada sin Sodio CONT NET 1,5 L.png',
      category: 'bebidas',
      subcategory: 'agua',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/1,5 L',
      part: 'Mayoreo a partir de 12 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 469,
      title: 'Nestle Pureza Vital Agua Purificada',
      price: 200.0,
      image: '/assets/Segmentos/Bebidas/Agua/Nestle Pureza Vital Agua Purificada CONT NET 600 ML.png',
      category: 'bebidas',
      subcategory: 'agua',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/600 ml',
      part: 'Mayoreo a partir de 12 piezas',
      isFeatured: true,
      stock: 1000,
    },
];