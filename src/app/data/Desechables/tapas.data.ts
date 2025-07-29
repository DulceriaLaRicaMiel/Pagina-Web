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

export const TAPAS_PRODUCTS: Product[] = [
    {
      id: 883,
      title: 'Tapas para Vaso',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Tapas/Tapas Blancos.png',
      category: 'desechables',
      subcategory: 'tapas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 20/100 piezas',
      part: 'Mayoreo a partir de 10 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 884,
      title: 'Tapas Convermex Plasticos Desechables Tapa No. 406',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Tapas/Tapas Convermex No 406 CONT 50 PZ.png',
      category: 'desechables',
      subcategory: 'tapas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 20/50 piezas',
      part: 'Mayoreo a partir de 10 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 885,
      title: 'Tapas Convermex Plasticos Desechables Tapa No. 408',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Tapas/Tapas Convermex No 408 CONT 50 PZ.png',
      category: 'desechables',
      subcategory: 'tapas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 20/50 piezas',
      part: 'Mayoreo a partir de 10 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 886,
      title: 'Tapas Convermex Plasticos Desechables Tapa No. 410',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Tapas/Tapas Convermex No 410 CONT 50 PZ.png',
      category: 'desechables',
      subcategory: 'tapas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 20/50 piezas',
      part: 'Mayoreo a partir de 10 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 887,
      title: 'Tapa Plástica Convermex Tapa 412',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Tapas/Tapas Convermex No 412 CONT 50 PZ.png',
      category: 'desechables',
      subcategory: 'tapas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 20/50 piezas',
      part: 'Mayoreo a partir de 10 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 888,
      title: 'Tapa Plástica Convermex Tapa 414',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Tapas/Tapas Convermex No 414 CONT 50 PZ.png',
      category: 'desechables',
      subcategory: 'tapas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 20/50 piezas',
      part: 'Mayoreo a partir de 10 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 889,
      title: 'Tapa Plástica Convermex Tapa 416',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Tapas/Tapas Convermex No 416 CONT 50 PZ.png',
      category: 'desechables',
      subcategory: 'tapas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 20/50 piezas',
      part: 'Mayoreo a partir de 10 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 890,
      title: 'Tapa Plana Transparente Tapas Lids',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Tapas/Tapas INIX TS2 CONT 100 PZ.png',
      category: 'desechables',
      subcategory: 'tapas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 10/100 piezas',
      part: 'Mayoreo a partir de 10 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 891,
      title: 'Tapa Plástica REYMA Tapa 16 oz',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Tapas/Tapas Reyma No 16 CONT 50 PZ.png',
      category: 'desechables',
      subcategory: 'tapas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 20/50 piezas',
      part: 'Mayoreo a partir de 10 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 892,
      title: 'Tapa/Lid INIX L90',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Tapas/Tapas INIX L90 Tapa Lid CONT 50 PZ.png',
      category: 'desechables',
      subcategory: 'tapas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 20/50 piezas',
      part: 'Mayoreo a partir de 10 piezas',
      isFeatured: true,
      stock: 1000,
    },
];