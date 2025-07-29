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

export const MAYONESA_PRODUCTS: Product[] = [
    {
      id: 740,
      title: 'McCormick Mayonesa con jugo de limones',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Mayonesa/McCormick CONT NET 1.4 KG.png',
      category: 'abarrotes',
      subcategory: 'mayonesa',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1,4 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 741,
      title: 'McCormick Mayonesa con jugo de limones',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Mayonesa/McCormick CONT NET 1.73 KG.png',
      category: 'abarrotes',
      subcategory: 'mayonesa',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 6/1,73 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 742,
      title: 'McCormick Mayonesa con jugo de limones',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Mayonesa/McCormick CONT NET 3.4 KG.png',
      category: 'abarrotes',
      subcategory: 'mayonesa',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 4/3,4 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 743,
      title: 'McCormick Mayonesa con jugo de limones',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Mayonesa/McCormick CONT NET 105 G.png',
      category: 'abarrotes',
      subcategory: 'mayonesa',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/105 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 744,
      title: 'McCormick Mayonesa con jugo de limones',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Mayonesa/McCormick CONT NET 190 G.png',
      category: 'abarrotes',
      subcategory: 'mayonesa',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 190 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 745,
      title: 'McCormick Mayonesa con jugo de limones',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Mayonesa/McCormick CONT NET 390 G.png',
      category: 'abarrotes',
      subcategory: 'mayonesa',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/390 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];