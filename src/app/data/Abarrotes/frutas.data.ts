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

export const FRUTAS_PRODUCTS: Product[] = [
    {
      id: 648,
      title: 'Clemente Jacques Coctel de Frutas en almibar',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frutas/Clemente Jacques Coctel de Frutas CONT NET 850 G.png',
      category: 'abarrotes',
      subcategory: 'frutas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/850 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 649,
      title: 'Clemente Jacques Mermelada de Chabacano',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frutas/Clemente Jacques Mermelada de Chabacano CONT NET 270 G.png',
      category: 'abarrotes',
      subcategory: 'frutas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/270 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 650,
      title: 'Clemente Jacques Mermelada de Fresa',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frutas/Clemente Jacques Mermelada de Fresa CONT NET 270 G.png',
      category: 'abarrotes',
      subcategory: 'frutas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/270 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 651,
      title: 'Clemente Jacques Mermelada de Fresa',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frutas/Clemente Jacques Mermelada de Fresa CONT NET 300 G.png',
      category: 'abarrotes',
      subcategory: 'frutas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 300 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 652,
      title: 'Clemente Jacques Mermelada de Zarzamora',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frutas/Clemente Jacques Mermelada de Zarzamora CONT NET 270 G.png',
      category: 'abarrotes',
      subcategory: 'frutas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/270 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 653,
      title: 'Clemente Jacques Trozos de Piña en almibar',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frutas/Clemente Jacques Trozos de Piña CONT NET 800 G.png',
      category: 'abarrotes',
      subcategory: 'frutas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/800 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 654,
      title: 'Don Agustín Mitades de duraznos en almibar',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frutas/Don Agustin Mitades de Durazno en Almibar CONT NET 820 G.png',
      category: 'abarrotes',
      subcategory: 'frutas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/820 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 655,
      title: 'McCormick Mermelada de Fresa',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frutas/McCormick Mermelada de Fresa CONT NET 270 G.png',
      category: 'abarrotes',
      subcategory: 'frutas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/270 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 656,
      title: 'Villafrut Duraznos en mitades en almibar',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Frutas/Villafrut Duraznos en Mitades en Almibar CONT NET 820 G.png',
      category: 'abarrotes',
      subcategory: 'frutas',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/820 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];