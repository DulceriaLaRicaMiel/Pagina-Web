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

export const SERVILLETAS_PRODUCTS: Product[] = [
    {
      id: 970,
      title: 'Pétalo Servilleta ¡Gran Tamaño!',
      price: 200.0,
      image: '/assets/Segmentos/Limpieza/Servilletas/Servilleta Petalo CONT 135 HOJAS.png',
      category: 'limpieza',
      subcategory: 'servilletas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 135 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 0,
    },
    {
      id: 971,
      title: 'Servilleta Vogue Resistente',
      price: 200.0,
      image: '/assets/Segmentos/Limpieza/Servilletas/Servilleta Vogue CONT 100 HOJAS.png',
      category: 'limpieza',
      subcategory: 'servilletas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 48/100 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 0,
    },
    {
      id: 972,
      title: 'WOW Calidad y ahorro para tu familia',
      price: 49.00,
      bulkPrices: [
      { minQuantity: 4, price: 48.33, priceId: 'price_1RmHXpRjoYBH8yfCpxL7DgTq' },
    ],
      image: '/assets/Segmentos/Limpieza/Servilletas/Servilleta Wow CONT 450 HOJAS.png',
      category: 'limpieza',
      subcategory: 'servilletas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 450 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];