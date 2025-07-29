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

export const DETERGENTE_PRODUCTS: Product[] = [
    {
      id: 935,
      title: 'Axion 100% Efectivo Arrancagrasa',
      price: 20.00,
      bulkPrices: [
      { minQuantity: 4, price: 20.00, priceId: 'price_1Rm7jARjoYBH8yfCmGH8W3lz' },
    ],
      image: '/assets/Segmentos/Limpieza/Detergente/Axion 100 Efectivo Arrancagrasa CONT NET 500 G.png',
      category: 'limpieza',
      subcategory: 'detergente',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/500 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 936,
      title: 'Detergente Blanca Nieves',
      price: 35.48,
      bulkPrices: [
      { minQuantity: 4, price: 34.90, priceId: 'price_1Rm7aIRjoYBH8yfCev0w1v1b' },
    ],
      image: '/assets/Segmentos/Limpieza/Detergente/Blanca Nieves CONT NET 1 KG.png',
      category: 'limpieza',
      subcategory: 'detergente',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 10/1 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 937,
      title: 'Detergente Blanca Nieves',
      price: 9.00,
      bulkPrices: [
      { minQuantity: 4, price: 8.12, priceId: 'price_1Rm7g1RjoYBH8yfCSb2QYZwW' },
    ],
      image: '/assets/Segmentos/Limpieza/Detergente/Blanca Nieves CONT NET 250 G.png',
      category: 'limpieza',
      subcategory: 'detergente',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 40/250 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 938,
      title: 'Detergente Blanca Nieves',
      price: 19.00,
      bulkPrices: [
      { minQuantity: 4, price: 18.33, priceId: 'price_1Rm7dBRjoYBH8yfC5aIw3qDW' },
    ],
      image: '/assets/Segmentos/Limpieza/Detergente/Blanca Nieves CONT NET 500 G.png',
      category: 'limpieza',
      subcategory: 'detergente',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 20/500 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 939,
      title: 'Detergente Biológico Degradable Foca',
      price: 36.57,
      bulkPrices: [
      { minQuantity: 4, price: 35.99, priceId: 'price_1Rm7PdRjoYBH8yfCaRCyAetA' },
    ],
      image: '/assets/Segmentos/Limpieza/Detergente/Foca CONT NET 1 KG.png',
      category: 'limpieza',
      subcategory: 'detergente',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 10/1 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 940,
      title: 'Detergente Biológico Degradable Foca',
      price: 9.99,
      bulkPrices: [
      { minQuantity: 4, price: 9.37, priceId: 'price_1Rm7WcRjoYBH8yfCgbbGWgtE' },
    ],
      image: '/assets/Segmentos/Limpieza/Detergente/Foca CONT NET 250 G.png',
      category: 'limpieza',
      subcategory: 'detergente',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 40/250 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 941,
      title: 'Detergente Biológico Degradable Foca',
      price: 18.50,
      bulkPrices: [
      { minQuantity: 4, price: 18.00, priceId: 'price_1Rm7TbRjoYBH8yfCUO5Cafkp' },
    ],
      image: '/assets/Segmentos/Limpieza/Detergente/Foca CONT NET 500 G.png',
      category: 'limpieza',
      subcategory: 'detergente',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 20/500 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 942,
      title: 'Detergente Biodegradable Roma',
      price: 34.99,
      bulkPrices: [
      { minQuantity: 4, price: 34.50, priceId: 'price_1Rm796RjoYBH8yfCt7sBOJFV' },
    ],
      image: '/assets/Segmentos/Limpieza/Detergente/Roma CONT NET 1 KG.png',
      category: 'limpieza',
      subcategory: 'detergente',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 10/1 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 943,
      title: 'Detergente Biodegradable Roma',
      price: 8.99,
      bulkPrices: [
      { minQuantity: 4, price: 8.62, priceId: 'price_1Rm7HSRjoYBH8yfCr7RB9LO5' },
    ],
      image: '/assets/Segmentos/Limpieza/Detergente/Roma CONT NET 250 G.png',
      category: 'limpieza',
      subcategory: 'detergente',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 40/250 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 944,
      title: 'Detergente Biodegradable Roma',
      price: 18.00,
      bulkPrices: [
      { minQuantity: 4, price: 17.24, priceId: 'price_1Rm7CqRjoYBH8yfCTun64rgW' },
    ],
      image: '/assets/Segmentos/Limpieza/Detergente/Roma CONT NET 500 G.png',
      category: 'limpieza',
      subcategory: 'detergente',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 20/500 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];