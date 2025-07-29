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

export const BOLIS_PRODUCTS: Product[] = [
    {
      id: 470,
      title: 'Bolis Cimarrón Variedad en sabores de frutas artificiales',
      price: 200.0,
      image: '/assets/Segmentos/Bebidas/Bolis/Bolis Cimarrón CONT 8 PZ.png',
      category: 'bebidas',
      subcategory: 'bolis',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 15/8 piezas - Contenido Neto 568 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 471,
      title: 'Donjo Congelados Charly Grande',
      price: 200.0,
      image: '/assets/Segmentos/Bebidas/Bolis/Congelados Charly CONT 10 PZ.png',
      category: 'bebidas',
      subcategory: 'bolis',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 10 piezas - Contenido Neto 1 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 472,
      title: 'Donjo Congelados Charly Mediano',
      price: 200.0,
      image: '/assets/Segmentos/Bebidas/Bolis/Congelados Charly CONT NET 10 PZ.png',
      category: 'bebidas',
      subcategory: 'bolis',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 10 piezas - Contenido Neto 500 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 473,
      title: 'Donjo Gelatinas Charly',
      price: 200.0,
      image: '/assets/Segmentos/Bebidas/Bolis/Gelatinas Charly CONT 20 PZ.png',
      category: 'bebidas',
      subcategory: 'bolis',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 20 piezas - Contenido Neto 892 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 474,
      title: 'Donjo Percherón Charly',
      price: 200.0,
      image: '/assets/Segmentos/Bebidas/Bolis/Percherón Charly CONT 12 PZ.png',
      category: 'bebidas',
      subcategory: 'bolis',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 12 piezas - Contenido Neto 1 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 475,
      title: 'Winis Congeladas',
      price: 200.0,
      image: '/assets/Segmentos/Bebidas/Bolis/Winis Congeladas CONT 10 PZ.png',
      category: 'bebidas',
      subcategory: 'bolis',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 12/10 piezas - Contenido Neto 700 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];