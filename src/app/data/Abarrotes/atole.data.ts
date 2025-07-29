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

export const ATOLE_PRODUCTS: Product[] = [
    {
      id: 546,
      title: 'El Sabor del Atole es Maizena Atole Sabor Chocolate',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Atole/Maizena Atole Sabor Chocolate CONT NET 47 G.png',
      category: 'abarrotes',
      subcategory: 'atole',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 47 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 547,
      title: 'El Sabor del Atole es Maizena Atole Sabor Vainilla',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Atole/Maizena Atole Sabor Vainilla CONT NET 47 G.png',
      category: 'abarrotes',
      subcategory: 'atole',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 47 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];