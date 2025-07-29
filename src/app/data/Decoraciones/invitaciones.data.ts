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

export const INVITACIONES_PRODUCTS: Product[] = [
    {
      id: 841,
      title: 'Ticket Fiesta Cars 3',
      price: 200.0,
      image: '/assets/Segmentos/Decoraciones/Invitaciones/Ticketfiesta Cars.png',
      category: 'decoraciones',
      subcategory: 'invitaciones',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 24/1 pieza',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 842,
      title: 'Ticket Fiesta Super Mario Bros',
      price: 200.0,
      image: '/assets/Segmentos/Decoraciones/Invitaciones/Ticketfiesta Mario.png',
      category: 'decoraciones',
      subcategory: 'invitaciones',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 24/1 pieza',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 843,
      title: 'Ticket Fiesta Spiderman',
      price: 200.0,
      image: '/assets/Segmentos/Decoraciones/Invitaciones/Ticketfiesta Spiderman.png',
      category: 'decoraciones',
      subcategory: 'invitaciones',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 24/1 pieza',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 844,
      title: 'Ticket Fiesta Toy Story',
      price: 200.0,
      image: '/assets/Segmentos/Decoraciones/Invitaciones/Ticketfiesta Toy Story.png',
      category: 'decoraciones',
      subcategory: 'invitaciones',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 24/1 pieza',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];