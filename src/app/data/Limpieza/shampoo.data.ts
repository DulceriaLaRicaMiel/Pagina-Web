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

export const SHAMPOO_PRODUCTS: Product[] = [
    {
      id: 973,
      title: 'Dove Acondicionador nutrición anti - frizz',
      price: 105.87,
      bulkPrices: [
      { minQuantity: 4, price: 103.11, priceId: 'price_1Rm6a5RjoYBH8yfC9otOfTMi' },
    ],
      image: '/assets/Segmentos/Limpieza/Shampoo/Dove Acondicionador Nutricion Anti - Frizz CONT NET 1 L.png',
      category: 'limpieza',
      subcategory: 'shampoo',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1 L',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 974,
      title: 'Dove nutrición anti - frizz',
      price: 105.87,
      bulkPrices: [
      { minQuantity: 4, price: 103.11, priceId: 'price_1Rm6fLRjoYBH8yfCyloJFinv' },
    ],
      image: '/assets/Segmentos/Limpieza/Shampoo/Dove Nutricion anti-frizz CONT NET 1 L.png',
      category: 'limpieza',
      subcategory: 'shampoo',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1 L',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 975,
      title: 'Dove reconstrucción completa',
      price: 200.0,
      image: '/assets/Segmentos/Limpieza/Shampoo/Dove Reconstruccion Completa CONT NET 1 L.png',
      category: 'limpieza',
      subcategory: 'shampoo',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1 L',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 0,
    },
    {
      id: 976,
      title: 'Ego Black Gel For Men 24 hrs',
      price: 25.00,
      bulkPrices: [
      { minQuantity: 4, price: 25.00, priceId: 'price_1Rm6oERjoYBH8yfCiW9Opdhd' },
    ],
      image: '/assets/Segmentos/Limpieza/Shampoo/Ego Black CONT NET 220 ML.png',
      category: 'limpieza',
      subcategory: 'shampoo',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/220 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 977,
      title: 'Palmolive Optims Shampoo 2 en 1',
      price: 200.0,
      image: '/assets/Segmentos/Limpieza/Shampoo/Palmolive Optims CONT NET 10 ML.png',
      category: 'limpieza',
      subcategory: 'shampoo',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido 2 piezas Contenido Neto 10 ml C/U',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 0,
    },
    {
      id: 978,
      title: 'Palmolive Optims Aceite de semilla de girasol',
      price: 92.70,
       bulkPrices: [
      { minQuantity: 4, price: 91.04, priceId: 'price_1Rm4meRjoYBH8yfCVFk1apuI' },
    ],
      image: '/assets/Segmentos/Limpieza/Shampoo/Palmolive Optims Semilla de Girasol CONT NET 1 L.png',
      category: 'limpieza',
      subcategory: 'shampoo',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1 L',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 979,
      title: 'Palmolive Optims Vital Keratina',
      price: 92.70,
       bulkPrices: [
      { minQuantity: 4, price: 91.04, priceId: 'price_1Rm4qDRjoYBH8yfCl7qDEsBn' },
    ],
      image: '/assets/Segmentos/Limpieza/Shampoo/Palmolive Optims Vital Keratina CONT NET 1 L.png',
      category: 'limpieza',
      subcategory: 'shampoo',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 1 L',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 980,
      title: 'Sedal Crema para peinar',
      price: 48.26,
      bulkPrices: [
      { minQuantity: 4, price: 47.39, priceId: 'price_1Rm6jxRjoYBH8yfCD3GE27vH' },
    ],
      image: '/assets/Segmentos/Limpieza/Shampoo/Sedal CONT NET 380 ML.png',
      category: 'limpieza',
      subcategory: 'shampoo',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 380 ml',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];