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

export const JABON_PRODUCTS: Product[] = [
    {
      id: 945,
      title: 'Jabón Clarin ¡A las manchas pone fin!',
      price: 200.0,
      image: '/assets/Segmentos/Limpieza/Jabon/Jabon Clarin A las manchas pone fin Azul CONT NET 350 G.png',
      category: 'limpieza',
      subcategory: 'jabon',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 20/350 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 0,
    },
    {
      id: 946,
      title: 'Jabón Clarin ¡Rinde más y lava mejor!',
      price: 200.0,
      image: '/assets/Segmentos/Limpieza/Jabon/Jabon Clarin Rinde mas y lava mejor CONT NET 350 G.png',
      category: 'limpieza',
      subcategory: 'jabon',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 20/350 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 0,
    },
    {
      id: 947,
      title: 'Jabón Clarin ¡Rinde más y lava mejor!',
      price: 200.0,
      image: '/assets/Segmentos/Limpieza/Jabon/Jabon Clarin Rinde mas y lava mejor Rosado CONT NET 350 G.png',
      category: 'limpieza',
      subcategory: 'jabon',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 20/350 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 0,
    },
    {
      id: 948,
      title: 'Dove original hidratación profunda',
      price: 200.0,
      image: '/assets/Segmentos/Limpieza/Jabon/Jabon Dove Original CONT NET 135 G.png',
      category: 'limpieza',
      subcategory: 'jabon',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 48/135 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 0,
    },
    {
      id: 949,
      title: 'ZEST AQUA Aroma Revitalizante',
      price: 200.0,
      image: '/assets/Segmentos/Limpieza/Jabon/Jabon Zest Aqua CONT NET 135 G.png',
      category: 'limpieza',
      subcategory: 'jabon',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 10/135 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 0,
    },
    {
      id: 950,
      title: 'Jabón Zote Azul',
      price: 19.99,
      bulkPrices: [
      { minQuantity: 4, price: 18.99, priceId: 'price_1RmGLhRjoYBH8yfCML1XrwZd' },
    ],
      image: '/assets/Segmentos/Limpieza/Jabon/Jabon Zote Azul CONT NET 400 G.png',
      category: 'limpieza',
      subcategory: 'jabon',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 25/400 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 951,
      title: 'Jabón Zote Blanco',
      price: 11.99,
      bulkPrices: [
      { minQuantity: 4, price: 11.50, priceId: 'price_1RmGFHRjoYBH8yfC2Z2r5lvM' },
    ],
      image: '/assets/Segmentos/Limpieza/Jabon/Jabon Zote Blanco CONT NET 200 G.png',
      category: 'limpieza',
      subcategory: 'jabon',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 50/200 g',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 952,
      title: 'Jabón Zote Rosa',
      price: 11.99,
      bulkPrices: [
      { minQuantity: 4, price: 11.50, priceId: 'price_1RmGINRjoYBH8yfCPeIEnnrK' },
    ],
      image: '/assets/Segmentos/Limpieza/Jabon/Jabon Zote Rosa CONT NET 200 G.png',
      category: 'limpieza',
      subcategory: 'jabon',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 50/200 g',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 953,
      title: 'Palmolive Naturals Cereza y Coco',
      price: 13.93,
      bulkPrices: [
      { minQuantity: 4, price: 13.68, priceId: 'price_1RmGQyRjoYBH8yfCBchZwgk2' },
    ],
      image: '/assets/Segmentos/Limpieza/Jabon/Palmolive Naturals CONT NET 120 G.png',
      category: 'limpieza',
      subcategory: 'jabon',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 8/120 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 954,
      title: 'Palmolive Naturals Lavanda y Crema',
      price: 15.21,
      bulkPrices: [
      { minQuantity: 4, price: 14.94, priceId: 'price_1RmGURRjoYBH8yfCYs80rj50' },
    ],
      image: '/assets/Segmentos/Limpieza/Jabon/Palmolive Naturals Humectante CONT NET 120 G.png',
      category: 'limpieza',
      subcategory: 'jabon',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 8/120 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];