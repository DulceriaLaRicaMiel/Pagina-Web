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

export const ACEITES_PRODUCTS: Product[] = [
    {
      id: 526,
      title: 'Member’s Mark Aceite Comestible puro de Soya',
      price: 28.38,
      bulkPrices: [
      { minQuantity: 4, price: 22.87, priceId: 'price_1RmJjwRjoYBH8yfCAmhAaHsI' },
    ],
      image: '/assets/Segmentos/Abarrotes/Aceites/Aceite Comestible Soya CONT NET 800 ML.png',
      category: 'abarrotes',
      subcategory: 'aceites',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 4/800 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 527,
      title: 'Aceite Vegetal Comestible El Faro',
      price: 33.00,
      bulkPrices: [
      { minQuantity: 4, price: 32.00, priceId: 'price_1RmJSCRjoYBH8yfCrMBYPwiU' },
    ],
      image: '/assets/Segmentos/Abarrotes/Aceites/El Faro Aceite CONT NET 900 ML.png',
      category: 'abarrotes',
      subcategory: 'aceites',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/900 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 528,
      title: 'Aceite Comestible puro de Soya hysa',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Aceites/Hysa Aceite CONT NET 450 ML.png',
      category: 'abarrotes',
      subcategory: 'aceites',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/450 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 529,
      title: 'Aceite Comestible puro de Soya hysa',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Aceites/Hysa Aceite CONT NET 800 ML.png',
      category: 'abarrotes',
      subcategory: 'aceites',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/800 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 530,
      title: 'KMD Imperial Aceite Comestible puro de Soya',
      price: 186.45,
      bulkPrices: [
      { minQuantity: 4, price: 183.10, priceId: 'price_1RmJnDRjoYBH8yfCPEvKDSSR' },
    ],
      image: '/assets/Segmentos/Abarrotes/Aceites/Imperial CONT NET 5 L.png',
      category: 'abarrotes',
      subcategory: 'aceites',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 5 L',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 531,
      title: 'Aceite Vegetal Comestible Negrita sin colesterol',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Aceites/Negrita CONT NET 800 ML.png',
      category: 'abarrotes',
      subcategory: 'aceites',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 800 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 532,
      title: 'KMD Patrona Aceite Vegetal Comestible',
      price: 35.50,
      bulkPrices: [
      { minQuantity: 4, price: 34.16, priceId: 'price_1RmJafRjoYBH8yfCcR5dM7Lm' },
    ],
      image: '/assets/Segmentos/Abarrotes/Aceites/Patrona Aceite CONT NET 1 L.png',
      category: 'abarrotes',
      subcategory: 'aceites',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/1 L',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 533,
      title: 'KMD Patrona Aceite Vegetal Comestible',
      price: 185.00,
      bulkPrices: [
      { minQuantity: 4, price: 181.50, priceId: 'price_1RmJWIRjoYBH8yfCSHjEMtW8' },
    ],
      image: '/assets/Segmentos/Abarrotes/Aceites/Patrona Aceite CONT NET 5 L.png',
      category: 'abarrotes',
      subcategory: 'aceites',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 5 L',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 534,
      title: 'KMD Patrona Aceite Vegetal Comestible',
      price: 19.55,
      bulkPrices: [
      { minQuantity: 4, price: 18.68, priceId: 'price_1RmJfWRjoYBH8yfCAI2NbmEA' },
    ],
      image: '/assets/Segmentos/Abarrotes/Aceites/Patrona Aceite CONT NET 500 ML.png',
      category: 'abarrotes',
      subcategory: 'aceites',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/500 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 535,
      title: 'Member’s Mark Aceite Comestible puro de Soya',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Aceites/Soya CONT NET 10 L.png',
      category: 'abarrotes',
      subcategory: 'aceites',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 10 L',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];