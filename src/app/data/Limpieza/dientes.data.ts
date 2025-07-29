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

export const DIENTES_PRODUCTS: Product[] = [
    {
      id: 958,
      title: 'Colgate Crema Dental con Flúor',
      price: 15.99,
      bulkPrices: [
      { minQuantity: 4, price: 15.99, priceId: 'price_1RmGejRjoYBH8yfCuBuclRs6' },
    ],
      image: '/assets/Segmentos/Limpieza/Pasta de Dientes/Colgate CONT 12 PZ.png',
      category: 'limpieza',
      subcategory: 'dientes',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 12/12 piezas Contenido Neto 22 ml C/U',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 959,
      title: 'Colgate Crema Dental con Flúor',
      price: 15.99,
      bulkPrices: [
      { minQuantity: 4, price: 15.99, priceId: 'price_1RmGbpRjoYBH8yfCTgwqzTkB' },
    ],
      image: '/assets/Segmentos/Limpieza/Pasta de Dientes/Colgate CONT NET 22 ML.png',
      category: 'limpieza',
      subcategory: 'dientes',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/22 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 960,
      title: 'Pasta Dental con Flúor Crest Complete',
      price: 200.0,
      image: '/assets/Segmentos/Limpieza/Pasta de Dientes/Crest Complete CONT NET 100 ML.png',
      category: 'limpieza',
      subcategory: 'dientes',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 36/100 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 0,
    },
];