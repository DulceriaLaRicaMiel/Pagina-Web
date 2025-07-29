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

export const SAL_PRODUCTS: Product[] = [
    {
      id: 762,
      title: 'Sal Yodada Fluorurada La Fina Sal Natural',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Sal/La Fina Sal Natural CONT NET 1 KG.png',
      category: 'abarrotes',
      subcategory: 'sal',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 18/1 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 763,
      title: 'Sal Sol La Sal del Mar Grano Fino Sal Yodada Fluorurada',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Sal/Sal Sol La Sal deL Mar Grano fino CONT NET 1 KG.png',
      category: 'abarrotes',
      subcategory: 'sal',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 10/1 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];