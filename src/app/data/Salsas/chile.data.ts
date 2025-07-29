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

export const CHILEPOLVO_PRODUCTS: Product[] = [
    {
      id: 440,
      title: 'Chile en Polvo',
      price: 200.0,
      image: '/assets/Segmentos/Salsas/Chile en Polvo/Chile Molido.png',
      category: 'salsas',
      subcategory: 'chile',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 500 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 441,
      title: 'Chile Rico La Laguna Chile Molido',
      price: 200.0,
      image: '/assets/Segmentos/Salsas/Chile en Polvo/Chile Rico La Laguna Chile Molido CONT NET 950 G.png',
      category: 'salsas',
      subcategory: 'chile',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 950 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 442,
      title: 'Chiligrin Normal Mezcla de Chiles en Polvo',
      price: 200.0,
      image: '/assets/Segmentos/Salsas/Chile en Polvo/Chiligrin Normal Chile en Polvo CONT. NET 500 KG.png',
      category: 'salsas',
      subcategory: 'chile',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 500 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 443,
      title: 'Chiligrin Normal Chile en Polvo',
      price: 200.0,
      image: '/assets/Segmentos/Salsas/Chile en Polvo/Chiligrin Normal Chile en Povo CONT NET 1 KG.png',
      category: 'salsas',
      subcategory: 'chile',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 444,
      title: 'El Original Miguelito',
      price: 200.0,
      image: '/assets/Segmentos/Salsas/Chile en Polvo/Miguelito CONT NET 450 G.png',
      category: 'salsas',
      subcategory: 'chile',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 950 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 445,
      title: 'El Original Miguelito',
      price: 200.0,
      image: '/assets/Segmentos/Salsas/Chile en Polvo/Miguelito CONT NET 980 G.png',
      category: 'salsas',
      subcategory: 'chile',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 980 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 446,
      title: 'Tajín Clásico Salsa en Polvo',
      price: 200.0,
      image: '/assets/Segmentos/Salsas/Chile en Polvo/Tajin Salsa en Polvo CONT NET 255 G.png',
      category: 'salsas',
      subcategory: 'chile',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 255 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];