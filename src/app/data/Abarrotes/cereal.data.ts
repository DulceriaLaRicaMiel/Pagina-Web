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

export const CEREAL_PRODUCTS: Product[] = [
    {
      id: 579,
      title: 'Kellogg’s Choco Krispis Mega',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Cereal/Kelloggs Choco krispis CONT NET 34 G.png',
      category: 'abarrotes',
      subcategory: 'cereal',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 32/34 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 580,
      title: 'Kellogg’s Choco Krispis',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Cereal/Kelloggs Choco krispis CONT NET 290 G.png',
      category: 'abarrotes',
      subcategory: 'cereal',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 28/290 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 581,
      title: 'Kellogg’s Froot Loops',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Cereal/Kelloggs Froot Loops CONT NET 180 G.png',
      category: 'abarrotes',
      subcategory: 'cereal',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 28/180 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 582,
      title: 'Kellogg’s Zucaritas',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Cereal/Kelloggs Zucaritas CONT NET 260 G.png',
      category: 'abarrotes',
      subcategory: 'cereal',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 28/260 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];