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

export const CUBIERTOS_PRODUCTS: Product[] = [
    {
      id: 875,
      title: 'Cubiertos',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Cubiertos/Cubiertos.png',
      category: 'desechables',
      subcategory: 'cubiertos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 25 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 876,
      title: 'Coyoplastic Cuchara Nevera',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Cubiertos/Cuchara Nevera COYOPLASTIC CONT 500 PZ.png',
      category: 'desechables',
      subcategory: 'cubiertos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 6/500 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 877,
      title: 'Coyoplastic Cuchara Pastelera',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Cubiertos/Cuchara Pastelera COYOPLASTIC CONT 50 PZ.png',
      category: 'desechables',
      subcategory: 'cubiertos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 60/50 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 878,
      title: 'Coyoplastic Cuchara sopera Jumbo',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Cubiertos/Cuchara Sopera Jumbo COYOPLASTIC CONT 25 PZ.png',
      category: 'desechables',
      subcategory: 'cubiertos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 40/25 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 879,
      title: 'PlastiJoy Cuchara Sopera',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Cubiertos/Cuchara Sopera PLASTIJOY CONT 25 PZ.png',
      category: 'desechables',
      subcategory: 'cubiertos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 40/25 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 880,
      title: 'Popote Reyma',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Cubiertos/Popotes.png',
      category: 'desechables',
      subcategory: 'cubiertos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 100 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 881,
      title: 'Coyoplastic Tenedor Grande',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Cubiertos/Tenedor Grande COYOPLASTIC CONT 25 PZ.png',
      category: 'desechables',
      subcategory: 'cubiertos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 60/25 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 882,
      title: 'Coyoplastic Tenedor Pastelero',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Cubiertos/Tenedor Pastelero COYOPLASTIC CONT 50 PZ.png',
      category: 'desechables',
      subcategory: 'cubiertos',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 40/50 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];