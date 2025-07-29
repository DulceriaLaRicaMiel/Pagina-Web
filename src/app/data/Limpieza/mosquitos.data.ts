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

export const MOSQUITOS_PRODUCTS: Product[] = [
    {
      id: 981,
      title: 'Raid Insecticida en Aerosol',
      price: 71.99,
      bulkPrices: [
      { minQuantity: 4, price: 70.99, priceId: 'price_1RmGj3RjoYBH8yfChszvS7rA' },
    ],
      image: '/assets/Segmentos/Limpieza/Proteccion contra mosquitos/Raid en Aerosol CONT NET 400 ML.png',
      category: 'limpieza',
      subcategory: 'mosquitos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/400 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 982,
      title: 'Raidolitos de protección contra mosquitos',
      price: 19.05,
      bulkPrices: [
      { minQuantity: 4, price: 17.84, priceId: 'price_1RmGn9RjoYBH8yfCMQxqa7ve' },
    ],
      image: '/assets/Segmentos/Limpieza/Proteccion contra mosquitos/Raid Raidolitos CONT 10 PZ.png',
      category: 'limpieza',
      subcategory: 'mosquitos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 10 piezas Contenido Neto 12,0 g C/U',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];