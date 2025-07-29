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

export const AZUCAR_PRODUCTS: Product[] = [
    {
      id: 551,
      title: 'Bolsa de Azúcar',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Azucar/Bolsa de Azucar 500 G.png',
      category: 'abarrotes',
      subcategory: 'azucar',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 500 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 552,
      title: 'Bolsa de Azúcar',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Azucar/Bolsa de Azucar.png',
      category: 'abarrotes',
      subcategory: 'azucar',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 2 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];