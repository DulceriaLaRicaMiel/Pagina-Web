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

export const EXTRACTOS_PRODUCTS: Product[] = [
    {
      id: 637,
      title: 'Extracto puro de vainilla Selecta de Papantla',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Extracto/Extracto Puro de Vainilla Selecta de Papantla CONT NET 1500 ML.png',
      category: 'abarrotes',
      subcategory: 'extractos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1500 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 638,
      title: 'Extracto puro de vainilla Selecta de Papantla',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Extracto/Selecta CONT NET 3.78 L.png',
      category: 'abarrotes',
      subcategory: 'extractos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 4/1 galon',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 639,
      title: 'Extracto puro de vainilla Selecta de Papantla',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Extracto/Selecta CONT NET 250 ML.png',
      category: 'abarrotes',
      subcategory: 'extractos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 50/250 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 640,
      title: 'Extracto puro de vainilla Selecta de Papantla',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Extracto/Selecta CONT NET 500 ML.png',
      category: 'abarrotes',
      subcategory: 'extractos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 50/500 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];