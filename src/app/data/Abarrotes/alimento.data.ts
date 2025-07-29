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

export const ALIMENTO_PRODUCTS: Product[] = [
    {
      id: 778,
      title: 'Alimento para el Gato',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Alimento para Mascotas/Alimento para el gato CONT NET 1 KG.png',
      category: 'abarrotes',
      subcategory: 'alimento',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1 kg',
      part: 'Mayoreo a partir de medio bulto',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 779,
      title: 'Beriscan Adulto',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Alimento para Mascotas/Beriscan Adulto CONT NET 1 KG.png',
      category: 'abarrotes',
      subcategory: 'alimento',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1 kg',
      part: 'Mayoreo a partir de medio bulto',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 780,
      title: 'Gatina',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Alimento para Mascotas/Gatina CONT NET 1 KG.png',
      category: 'abarrotes',
      subcategory: 'alimento',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1 kg',
      part: 'Mayoreo a partir de medio bulto',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 781,
      title: 'Purina Felix ¡Tan delicios como se ve!',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Alimento para Mascotas/Purina Felix CONT NET 12 PZ.png',
      category: 'abarrotes',
      subcategory: 'alimento',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/1,02 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];