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

export const VINAGRE_PRODUCTS: Product[] = [
    {
      id: 774,
      title: 'Clemente Jacques Vinagre blanco de alcohol de caña',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Vinagre/Clemente Jacques Vinagre Blanco de Alcohol CONT NET 1 L.png',
      category: 'abarrotes',
      subcategory: 'vinagre',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/1 Litro',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 775,
      title: 'Clemente Jacques Vinagre blanco de alcohol de caña',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Vinagre/Clemente Jacques Vinagre Blanco de Alcohol CONT NET 500 ML.png',
      category: 'abarrotes',
      subcategory: 'vinagre',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/500 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 776,
      title: 'Clemente Jacques Vinagre de manzana',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Vinagre/Clemente Jacques Vinagre de Manzana CONT NET 500 ML.png',
      category: 'abarrotes',
      subcategory: 'vinagre',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/500 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 777,
      title: 'Vinagre Monarca',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Vinagre/Vinagre Monarca CONT NET 1 L.png',
      category: 'abarrotes',
      subcategory: 'vinagre',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1 Litro',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];