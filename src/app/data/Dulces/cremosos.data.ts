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

export const CREMOSOS_PRODUCTS: Product[] = [
    {
      id: 145,
      title: 'Cremino Bicolor',
      price: 200.0,
      image: '/assets/Segmentos/Dulces/Dulce Cremoso/Cremino Bicolor CONT 24 PZ.png',
      category: 'dulces',
      subcategory: 'cremoso',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 16/24 piezas - Contenido Neto 432 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 146,
      title: 'Cremino Blanco',
      price: 200.0,
      image: '/assets/Segmentos/Dulces/Dulce Cremoso/Cremino Blanco CONT 24 PZ.png',
      category: 'dulces',
      subcategory: 'cremoso',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 16/24 piezas - Contenido Neto 432 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 147,
      title: 'Ricolino Duvalín Avellana Fresa',
      price: 200.0,
      image: '/assets/Segmentos/Dulces/Dulce Cremoso/Duvalin Avellana Fresa CONT 18 PZ.png',
      category: 'dulces',
      subcategory: 'cremoso',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 24/18 piezas - Contenido Neto 270 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 148,
      title: 'Ricolino Duvalín Avellana Vainilla',
      price: 200.0,
      image: '/assets/Segmentos/Dulces/Dulce Cremoso/Duvalin CONT 18 PZ.png',
      category: 'dulces',
      subcategory: 'cremoso',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 24/18 piezas - Contenido Neto 270 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 149,
      title: 'Nucita Chocovainilla',
      price: 200.0,
      image: '/assets/Segmentos/Dulces/Dulce Cremoso/Nucita Chocovainilla CONT NET 224 G.png',
      category: 'dulces',
      subcategory: 'cremoso',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 24/16 piezas - Contenido Neto 224 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 150,
      title: 'Nucita Patitas',
      price: 200.0,
      image: '/assets/Segmentos/Dulces/Dulce Cremoso/Nucita Patitas.png',
      category: 'dulces',
      subcategory: 'cremoso',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 24/8 piezas - Contenido Neto 152 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 151,
      title: 'Nucita Trisabor',
      price: 200.0,
      image: '/assets/Segmentos/Dulces/Dulce Cremoso/Nucita Trisabor  CONT NET 224 G.png',
      category: 'dulces',
      subcategory: 'cremoso',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 24/16 piezas - Contenido Neto 224 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];