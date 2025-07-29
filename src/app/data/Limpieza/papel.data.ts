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

export const PAPEL_PRODUCTS: Product[] = [
    {
      id: 955,
      title: 'Elite Clásico Perfumado',
      price: 21.00,
      bulkPrices: [
      { minQuantity: 4, price: 19.69, priceId: 'price_1RmHNsRjoYBH8yfCG1yGJnpG' },
    ],
      image: '/assets/Segmentos/Limpieza/Papel/Elite Clasico Perfumado CONT 4 ROLLOS.png',
      category: 'limpieza',
      subcategory: 'papel',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 10/4 piezas Doble Hoja C/U',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 956,
      title: 'Pétalo Ultra Resistente',
      price: 27.00,
      bulkPrices: [
      { minQuantity: 4, price: 25.80, priceId: 'price_1RmHQcRjoYBH8yfCaxySDzm2' },
    ],
      image: '/assets/Segmentos/Limpieza/Papel/Petalo Ultra Resistente CONT 300 HOJAS DOBLES.png',
      category: 'limpieza',
      subcategory: 'papel',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 10/4 piezas 300 Hojas Dobles C/U',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 957,
      title: 'Papel Higiénico Ecopel Premier Mega Roll',
      price: 25.00,
      bulkPrices: [
      { minQuantity: 4, price: 23.74, priceId: 'price_1RmHTPRjoYBH8yfC9b3VtYgY' },
    ],
      image: '/assets/Segmentos/Limpieza/Papel/Premier Mega Roll CONT 4 ROLLOS.png',
      category: 'limpieza',
      subcategory: 'papel',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 12/4 piezas 400 Hojas Dobles C/U',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];