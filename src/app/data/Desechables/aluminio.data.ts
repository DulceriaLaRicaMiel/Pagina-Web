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

export const ALUMINIO_PRODUCTS: Product[] = [
    {
      id: 845,
      title: 'Metal Edge Included Aluminio 50 INIX',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Aluminio 50.png',
      category: 'desechables',
      subcategory: 'aluminio',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 1 rollo de 50 mts',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 846,
      title: 'Metal Edge Included Aluminio 400 INIX',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Aluminio 400.png',
      category: 'desechables',
      subcategory: 'aluminio',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 1 rollo de 400 mts',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 847,
      title: 'AluRey Papel Aluminio Profesional 50',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/AluRey Papel Aluminio Profesional 50.png',
      category: 'desechables',
      subcategory: 'aluminio',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 1 rollo de 50 mts',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 848,
      title: 'INIX FILM Película Autoadherible de Alta Calidad',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/InixFilm Reforzado HQR 30.png',
      category: 'desechables',
      subcategory: 'aluminio',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 1 rollo de 30 mts',
      part: 'Mayoreo a partir de 4 kg',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 849,
      title: 'Brochetas de Madera',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Brochetas de Madera.png',
      category: 'desechables',
      subcategory: 'brochetas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 500 gramos',
      part: 'Mayoreo a partir de 4 kg',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 850,
      title: 'Palo Elotero',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Palitos de Madera con punta.png',
      category: 'desechables',
      subcategory: 'brochetas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1/2 kg',
      part: 'Mayoreo a partir de 4 kg',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 851,
      title: 'Palo Cuadrado Agranel',
      price: 200.0,
      image: '/assets/Segmentos/Desechables/Palitos de Madera cuadrados.png',
      category: 'desechables',
      subcategory: 'brochetas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1 kg',
      part: 'Mayoreo a partir de 4 kg',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 852,
      title: 'Tarasquitos Palillos Dentales',
      price: 61.00,
      bulkPrices: [
      { minQuantity: 4, price: 59.50, priceId: 'price_1RmJtsRjoYBH8yfCFtNicmEy' },
    ],
      image: '/assets/Segmentos/Desechables/Tarasquitos Palillos Dentales CONT 250 PZ.png',
      category: 'desechables',
      subcategory: 'brochetas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 10/250 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];