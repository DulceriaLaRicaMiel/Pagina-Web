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

export const ARROZ_PRODUCTS: Product[] = [
    {
      id: 540,
      title: 'Bolsa de Arroz Chop',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Arroz/Bolsa de Arroz 1 KG.png',
      category: 'abarrotes',
      subcategory: 'arroz',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 541,
      title: 'Bolsa de Arroz Chop',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Arroz/Bolsa de Arroz 892 GR.png',
      category: 'abarrotes',
      subcategory: 'arroz',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 892 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 542,
      title: 'Bolsa de Arroz Chop',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Arroz/Bolsa de Arroz JB.png',
      category: 'abarrotes',
      subcategory: 'arroz',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 25 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 543,
      title: 'Calidad Bueno Premium Arroz Súper Extra',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Arroz/Calidad Bueno Premium Arroz Super Extra CONT NET 900 G.png',
      category: 'abarrotes',
      subcategory: 'arroz',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 10/900 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 544,
      title: 'Calidad Bueno Doña Chabe Arroz Súper Extra',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Arroz/Doña Chabe Arroz Super Extra CONT NET 900 G.png',
      category: 'abarrotes',
      subcategory: 'arroz',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 10/900 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 545,
      title: 'KA El Águila Arroz Comercial',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Arroz/El Aguila Arroz Comercial CONT NET 500 G.png',
      category: 'abarrotes',
      subcategory: 'arroz',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 10/500 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];