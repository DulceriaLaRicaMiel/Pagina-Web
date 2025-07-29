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

export const MIEL_PRODUCTS: Product[] = [
    {
      id: 746,
      title: 'Apiarios Bautista Miel de abeja 100% Natural Multiflor',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Miel/Apiarios Bautista Miel de Abeja CONT NET 350 G.png',
      category: 'abarrotes',
      subcategory: 'miel',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 350 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 747,
      title: 'Apiarios Bautista Miel de abeja 100% Natural Multiflor',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Miel/Apiarios Bautista Miel de Abeja CONT NET 1300 G.png',
      category: 'abarrotes',
      subcategory: 'miel',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1300 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];