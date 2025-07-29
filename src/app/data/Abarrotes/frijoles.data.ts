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

export const FRIJOLES_PRODUCTS: Product[] = [
    {
      id: 641,
      title: 'Calidad Bueno Frijol Negro',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frijoles/Calidad Bueno Frijol Negro CONT NET 900 G.png',
      category: 'abarrotes',
      subcategory: 'frijoles',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 10/900 g',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 642,
      title: 'Calidad Bueno Doña Chabe Frijol Negro',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frijoles/Doña Chabe Frijol Negro CONT NET 900 G.png',
      category: 'abarrotes',
      subcategory: 'frijoles',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 10/900 g',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 643,
      title: 'Isadora Frijoles Refritos Negros',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frijoles/Isadora Frijoles Refritos Negros CONT NET 430 G.png',
      category: 'abarrotes',
      subcategory: 'frijoles',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/430 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 644,
      title: 'La Sierra Frijoles Negros Enteros',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frijoles/La Sierra Frijoles Negros Enteros CONT NET 560 G.png',
      category: 'abarrotes',
      subcategory: 'frijoles',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/560 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 645,
      title: 'La Sierra Frijoles Negros Refritos',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frijoles/La Sierra Frijoles Negros Refritos CONT NET 400 G.png',
      category: 'abarrotes',
      subcategory: 'frijoles',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/400 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 646,
      title: 'La Sierra Frijoles Negros Refritos',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frijoles/La Sierra Frijoles Negros Refritos CONT NET 430 G.png',
      category: 'abarrotes',
      subcategory: 'frijoles',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/430 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 647,
      title: 'Schettino Frijol Negro Querétaro',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frijoles/Schettino Frijol Negro Queretaro CONT NET 900 G.png',
      category: 'abarrotes',
      subcategory: 'frijoles',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 10/900 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];