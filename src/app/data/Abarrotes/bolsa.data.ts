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

export const BOLSA_PRODUCTS: Product[] = [
    {
      id: 553,
      title: 'Bolsa de Almendras',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Bolsa de Productos/Bolsa 250 GRS.png',
      category: 'abarrotes',
      subcategory: 'bolsa',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 250 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 554,
      title: 'Bolsa de Avena',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Bolsa de Productos/Bolsa de 1 KG.png',
      category: 'abarrotes',
      subcategory: 'bolsa',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 554,
      title: 'Bolsa de Avena',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Bolsa de Productos/Bolsa de 500 GR.png',
      category: 'abarrotes',
      subcategory: 'bolsa',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 500 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 555,
      title: 'Bolsa de Jaimaca',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Bolsa de Productos/Bolsa de Jamaica.png',
      category: 'abarrotes',
      subcategory: 'bolsa',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 500 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 556,
      title: 'Bolsa de Alpiste',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Bolsa de Productos/Bolsa de Semillas 1 KG.png',
      category: 'abarrotes',
      subcategory: 'bolsa',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 557,
      title: 'Bolsa de Alpiste',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Bolsa de Productos/Bolsa de Semillas 642 GR.png',
      category: 'abarrotes',
      subcategory: 'bolsa',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 642 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];