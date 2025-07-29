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

export const CELOFAN_PRODUCTS: Product[] = [
    {
      id: 983,
      title: 'Celofán',
      price: 20.00,
      bulkPrices: [
      { minQuantity: 4, price: 17.84, priceId: 'price_1RmGn9RjoYBH8yfCMQxqa7ve' },
    ],
      image: '/assets/Segmentos/Desechables/Celofan/Celofan 1-Photoroom.png',
      category: 'desechables',
      subcategory: 'celofan',
      rating: 4.8,
      reviews: 4.8,
      description: 'Celofán 4x20, Celofán 5x11, Celofán 5x20, Celofán 6x13, Celofán 8x20, Celofán 10x20, Celofán 12x25, Celofán 18x25, Celofán 30x40.',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 984,
      title: 'Celofán Pegamento',
      price: 20.00,
      bulkPrices: [
      { minQuantity: 4, price: 17.84, priceId: 'price_1RmGn9RjoYBH8yfCMQxqa7ve' },
    ],
      image: '/assets/Segmentos/Desechables/Celofan/Celofan 4-Photoroom.png',
      category: 'desechables',
      subcategory: 'celofan',
      rating: 4.8,
      reviews: 4.8,
      description: 'Celofán 3x20+3 Pegamento, Celofán 4x20+3 Pegamento, Celofán 5x20+3 Pegamento, Celofán 7x20+3 Pegamento, Celofán 8x20+3 Pegamento.',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 985,
      title: 'Celofán Pegamento y Horadada',
      price: 20.00,
      bulkPrices: [
      { minQuantity: 4, price: 17.84, priceId: 'price_1RmGn9RjoYBH8yfCMQxqa7ve' },
    ],
      image: '/assets/Segmentos/Desechables/Celofan/Celofan 2-Photoroom.png',
      category: 'desechables',
      subcategory: 'celofan',
      rating: 4.8,
      reviews: 4.8,
      description: 'Celofán 4x20+3+3 Pegamento y Horadada, Celofán 5x20+3+3 Pegamento y Horadada, Celofán 6x15+3+3 Pegamento y Horadada, Celofán 7x12+3+3 Pegamento y Horadada, Celofán 8x15+3+3 Pegamento y Horadada, Celofán 10x20+3+3 Pegamento y Horadada.',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 986,
      title: 'Celofán Cono',
      price: 20.00,
      bulkPrices: [
      { minQuantity: 4, price: 17.84, priceId: 'price_1RmGn9RjoYBH8yfCMQxqa7ve' },
    ],
      image: '/assets/Segmentos/Desechables/Celofan/Celofan 12x30-Photoroom.png',
      category: 'desechables',
      subcategory: 'celofan',
      rating: 4.8,
      reviews: 4.8,
      description: 'Celofán Cono Mediano Liso, Celofán Cono Grande Decorado.',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 987,
      title: 'Celofán',
      price: 20.00,
      bulkPrices: [
      { minQuantity: 4, price: 17.84, priceId: 'price_1RmGn9RjoYBH8yfCMQxqa7ve' },
    ],
      image: '/assets/Segmentos/Desechables/Celofan/Celofan 14x25-Photoroom.png',
      category: 'desechables',
      subcategory: 'celofan',
      rating: 4.8,
      reviews: 4.8,
      description: 'Celofán 100 g, Celofán 150 g, Celofán 250 g, Celofán 500 g, Celofán 1 kg, Celofán 1,5 kg, Celofán 2 kg, Celofán 2,5 kg.',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];