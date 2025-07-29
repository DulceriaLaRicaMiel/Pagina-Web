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

export const VELAS_PRODUCTS: Product[] = [
    {
      id: 764,
      title: 'La Central Cerrillos Clasicos de la fe',
      price: 92.00,
      image: '/assets/Segmentos/Abarrotes/Velas y Cerillos/Cerrillos Clasicos CONT 50 PZ.png',
      category: 'abarrotes',
      subcategory: 'velas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 24/50 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 765,
      title: 'La Central Flama ¡El Fósforo de la Cocina Mexicana!',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Velas y Cerillos/Flama CONT 8 PZ.png',
      category: 'abarrotes',
      subcategory: 'velas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 8/200 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 0,
    },
    {
      id: 766,
      title: 'La Central Flama ¡El Fósforo de la Cocina Mexicana!',
      price: 8.46,
      bulkPrices: [
      { minQuantity: 4, price: 8.30, priceId: 'price_1RmKkORjoYBH8yfCdr4ZWfFh' },
    ],
      image: '/assets/Segmentos/Abarrotes/Velas y Cerillos/Flama CONT 200 PZ.png',
      category: 'abarrotes',
      subcategory: 'velas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 200 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 767,
      title: 'Veladora Carmen la Buena es la Gloria 100% Refinada No. 10',
      price: 14.99,
      bulkPrices: [
      { minQuantity: 4, price: 13.87, priceId: 'price_1RmKt3RjoYBH8yfCm4jYEy0a' },
    ],
      image: '/assets/Segmentos/Abarrotes/Velas y Cerillos/Veladora Carmen La Gloria 100 Refinada.png',
      category: 'abarrotes',
      subcategory: 'velas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 1/40 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 768,
      title: 'Veladora Carmen la Buena es la Gloria 100% Refinada No. 1',
      price: 9.00,
      bulkPrices: [
      { minQuantity: 4, price: 7.99, priceId: 'price_1RmKpMRjoYBH8yfCO92ekQxs' },
    ],
      image: '/assets/Segmentos/Abarrotes/Velas y Cerillos/Veladora Carmen La Gloria.png',
      category: 'abarrotes',
      subcategory: 'velas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 1/100 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 769,
      title: 'Veladora de Calaverita',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Velas y Cerillos/Veladora de Calavera.png',
      category: 'abarrotes',
      subcategory: 'velas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 20 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 0,
    },
    {
      id: 770,
      title: 'Veladora de Dia de Muertos',
      price: 11.50,
      bulkPrices: [
      { minQuantity: 4, price: 10.99, priceId: 'price_1RmKxORjoYBH8yfC7O1ZC0CP' },
    ],
      image: '/assets/Segmentos/Abarrotes/Velas y Cerillos/Veladora de Dia Muertos.png',
      category: 'abarrotes',
      subcategory: 'velas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 20 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 771,
      title: 'Ecológica 7 Días Veladoras Inmaculada Concepción',
      price: 27.00,
      bulkPrices: [
      { minQuantity: 4, price: 26.66, priceId: 'price_1RmKfKRjoYBH8yfC25fJNZag' },
    ],
      image: '/assets/Segmentos/Abarrotes/Velas y Cerillos/Veladora Ecologica 7 Dias Azul.png',
      category: 'abarrotes',
      subcategory: 'velas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 24 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 772,
      title: 'La Soledad Mayor Duración Limonero Comercial',
      price: 10.99,
      bulkPrices: [
      { minQuantity: 4, price: 10.24, priceId: 'price_1RmJzHRjoYBH8yfC56RN9yJF' },
    ],
      image: '/assets/Segmentos/Abarrotes/Velas y Cerillos/Veladora La Soledad Mayor Duracion CONT 1 PZ.png',
      category: 'abarrotes',
      subcategory: 'velas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 20 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 773,
      title: 'La Soledad Mayor Duración Limoncito',
      price: 10.50,
      bulkPrices: [
      { minQuantity: 4, price: 10.41, priceId: 'price_1RmH3ARjoYBH8yfChgOFwL0G' },
    ],
      image: '/assets/Segmentos/Abarrotes/Velas y Cerillos/Veladora La Soledad Mayor Duracion.png',
      category: 'abarrotes',
      subcategory: 'velas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 48 piezas',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];