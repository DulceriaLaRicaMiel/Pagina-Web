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

export const CONFIGRATEA_PRODUCTS: Product[] = [
    {
      id: 631,
      title: 'Configratea Azul',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Configratea/Azul 178 GR.png',
      category: 'abarrotes',
      subcategory: 'configratea',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 178 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 632,
      title: 'Configratea Azul',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Configratea/Azul 250 GR.png',
      category: 'abarrotes',
      subcategory: 'configratea',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 250 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 633,
      title: 'Chocolate',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Configratea/Chocolate.png',
      category: 'abarrotes',
      subcategory: 'configratea',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 500 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 634,
      title: 'Configratea Nacarada Amarilla',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Configratea/Configratea Nacarada Amarilla 250 GR.png',
      category: 'abarrotes',
      subcategory: 'configratea',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 250 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 635,
      title: 'Configratea Nacarada Naranja',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Configratea/Gragea Nacarada Naranja 250 GRS.png',
      category: 'abarrotes',
      subcategory: 'configratea',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 250 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 636,
      title: 'Configratea Nacarada Verde',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Configratea/Gragea Nacarada Verde 250 GRS.png',
      category: 'abarrotes',
      subcategory: 'configratea',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 250 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];