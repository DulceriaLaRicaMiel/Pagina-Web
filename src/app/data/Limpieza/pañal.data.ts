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

export const PAÑAL_PRODUCTS: Product[] = [
    {
      id: 961,
      title: 'Klee Bebé Absorsec Nucleo Absorbente',
      price: 124.99,
      bulkPrices: [
      { minQuantity: 4, price: 123.75, priceId: 'price_1RmH3ARjoYBH8yfChgOFwL0G' },
    ],
      image: '/assets/Segmentos/Limpieza/Proteccion/Kleen Bebe Absorsec CONT 40 PAÑALES.png',
      category: 'limpieza',
      subcategory: 'pañal',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 4/40 piezas Grande | Etapa 4',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 962,
      title: 'Kleen Bebé Suavelastic',
      price: 200.0,
      image: '/assets/Segmentos/Limpieza/Proteccion/Kleen Bebe Suavelastic CONT 40 PAÑALES.png',
      category: 'limpieza',
      subcategory: 'pañal',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 4/40 piezas Etapa 5 | Jumbo 14,5 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 0,
    },
    {
      id: 963,
      title: 'Kotex Protección Avanzada Naturals',
      price: 16.00,
      bulkPrices: [
      { minQuantity: 4, price: 15.20, priceId: 'price_1RmH9NRjoYBH8yfCXsEMXCvY' },
    ],
      image: '/assets/Segmentos/Limpieza/Proteccion/Kotex Proteccion Avanzada Naturals con Manzanilla CONT 10 Toallas.png',
      category: 'limpieza',
      subcategory: 'pañal',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 10/10 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 964,
      title: 'Saba Buenas Noches Noctura',
      price: 23.50,
      bulkPrices: [
      { minQuantity: 4, price: 23.00, priceId: 'price_1RmHIIRjoYBH8yfC3xdXQt7B' },
    ],
      image: '/assets/Segmentos/Limpieza/Proteccion/Saba Buenas Noches CONT 8 Nocturna Toallas Extra Largas con Alas.png',
      category: 'limpieza',
      subcategory: 'pañal',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 6/8 piezas Contenido 3/10 piezas 3x Protección',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 965,
      title: 'Saba Buenas Noches Ultra Invisible Nocturna',
      price: 24.59,
      bulkPrices: [
      { minQuantity: 4, price: 23.95, priceId: 'price_1RmHE5RjoYBH8yfCeJDHXNxz' },
    ],
      image: '/assets/Segmentos/Limpieza/Proteccion/Saba Buenas Noches CONT 10 Ultra Invisible Nocturna Toallas Extra Largas con Alas.png',
      category: 'limpieza',
      subcategory: 'pañal',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 3/10 piezas Nueva 5x Protección',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 966,
      title: 'Saba Buenas Noches Ultra Invisible Nocturna',
      price: 200.0,
      image: '/assets/Segmentos/Limpieza/Proteccion/Saba Buenas Noches CONT 30 Ultra Invisible Nocturna Toallas Extra Largas con Alas.png',
      category: 'limpieza',
      subcategory: 'pañal',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 30 piezas Nueva 5x Protección',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 0,
    },
    {
      id: 967,
      title: 'Saba Buenas Noches Noctura',
      price: 138.00,
      image: '/assets/Segmentos/Limpieza/Proteccion/Saba Buenas Noches CONT 48 Nocturna Toallas Extra Largas con Alas.png',
      category: 'limpieza',
      subcategory: 'pañal',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 48 piezas 3x Protección',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 968,
      title: 'Saba Invisible Delgada',
      price: 16.50,
      bulkPrices: [
      { minQuantity: 4, price: 16.00, priceId: 'price_1RmH6HRjoYBH8yfCOdOne2Ub' },
    ],
      image: '/assets/Segmentos/Limpieza/Proteccion/Saba Invisible 10 Delgada toallas con alas.png',
      category: 'limpieza',
      subcategory: 'pañal',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 6/10 piezas 3x Protección',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 969,
      title: 'Saba Invisible Delgada',
      price: 96.00,
      image: '/assets/Segmentos/Limpieza/Proteccion/Saba Invisible CONT 60 Delgada toallas con alas.png',
      category: 'limpieza',
      subcategory: 'pañal',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 60 piezas 3x Protección',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];