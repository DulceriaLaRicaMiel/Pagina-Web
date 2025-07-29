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

export const CATSUP_PRODUCTS: Product[] = [
    {
      id: 572,
      title: 'Clemente Jacques Salsa Catsup',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Catsup/Clemente Jacques Salsa Catsup CONT NET 3 KG.png',
      category: 'abarrotes',
      subcategory: 'catsup',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 6/3 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 573,
      title: 'Clemente Jacques Salsa Catsup',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Catsup/Clemente Jacques Salsa Catsup CONT NET 220 G.png',
      category: 'abarrotes',
      subcategory: 'catsup',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/220 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 574,
      title: 'Clemente Jacques Salsa Catsup',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Catsup/Clemente Jacques Salsa Catsup CONT NET 340 G.png',
      category: 'abarrotes',
      subcategory: 'catsup',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/340 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 575,
      title: 'Clemente Jacques Salsa Catsup',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Catsup/Clemente Jacques Salsa Catsup CONT NET 970 G.png',
      category: 'abarrotes',
      subcategory: 'catsup',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/970 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 576,
      title: 'Mi Catsup Salsa de Tomate para Aderezar',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Catsup/Mi Catsup CONT NET 1 KG.png',
      category: 'abarrotes',
      subcategory: 'catsup',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/1 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 577,
      title: 'Mi Catsup Salsa Catsup',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Catsup/Mi Catsup CONT NET 4 KG.png',
      category: 'abarrotes',
      subcategory: 'catsup',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 4/4 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 578,
      title: 'Party Pack! Clamato El Original',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Catsup/Party Pack Clamato El Original CONT NET 254 L.png',
      category: 'abarrotes',
      subcategory: 'catsup',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 2/2,54 L',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];