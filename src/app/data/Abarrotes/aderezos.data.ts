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

export const ADEREZOS_PRODUCTS: Product[] = [
    {
      id: 536,
      title: 'Clemente Jacques Aderezo para Ensaladas César',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Aderezo/Clemente Jacques Aderezo para Ensaladas Cesar CONT NET 237 G.png',
      category: 'abarrotes',
      subcategory: 'aderezos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/237 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 537,
      title: 'Clemente Jacques Aderezo para Ensaladas César',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Aderezo/Clemente Jacques Aderezo para Ensaladas Cesar CONT NET 710 G.png',
      category: 'abarrotes',
      subcategory: 'aderezos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 6/710 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 538,
      title: 'Clemente Jacques Aderezo para Ensaladas Ranch',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Aderezo/Clemente Jacques Aderezo para Ensaladas Ranch CONT NET 237 G.png',
      category: 'abarrotes',
      subcategory: 'aderezos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/237 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 539,
      title: 'Clemente Jacques Aderezo para Ensaladas Ranch',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Aderezo/Clemente Jacques Aderezo para Ensaladas Ranch CONT NET 710 G.png',
      category: 'abarrotes',
      subcategory: 'aderezos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 6/710 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];