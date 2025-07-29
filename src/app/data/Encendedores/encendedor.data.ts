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

export const ENCENDEDORES_PRODUCTS: Product[] = [
    {
      id: 914,
      title: 'Clipper Reusable',
      price: 200.0,
      image: '/assets/Segmentos/Cigarros/Clipper CONT 12 PZ.png',
      category: 'encendedores',
      subcategory: 'encendedor',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 12 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 915,
      title: 'Clipper Reusable',
      price: 200.0,
      image: '/assets/Segmentos/Cigarros/Clipper Reusable CONT 5 PZ.png',
      category: 'encendedores',
      subcategory: 'encendedor',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 5 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 916,
      title: 'Clipper Reusable',
      price: 200.0,
      image: '/assets/Segmentos/Cigarros/Clipper Reusable CONT 12 PZ.png',
      category: 'encendedores',
      subcategory: 'encendedor',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 12 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 917,
      title: 'Clipper Reusable',
      price: 200.0,
      image: '/assets/Segmentos/Cigarros/Clipper Reusable CONT 24 PZ.png',
      category: 'encendedores',
      subcategory: 'encendedor',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 24 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 918,
      title: 'Exis Encendedor de Piedra',
      price: 200.0,
      image: '/assets/Segmentos/Cigarros/Exis Encendedor de Piedra CONT 20 PZ.png',
      category: 'encendedores',
      subcategory: 'encendedor',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 20 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];