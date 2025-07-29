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

export const CHOCO_PRODUCTS: Product[] = [
    {
      id: 600,
      title: 'Fórmula Pantera Choco Milk',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Choco Milk/Choco Milk CONT 20 PZ.png',
      category: 'abarrotes',
      subcategory: 'choco',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 20/360 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 601,
      title: 'Fórmula Pantera Choco Milk',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Choco Milk/Choco Milk CONT NET 350 G.png',
      category: 'abarrotes',
      subcategory: 'choco',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/350 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 602,
      title: 'Choco Palencia',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Choco Milk/Choco Palencia CONT NET 350 G.png',
      category: 'abarrotes',
      subcategory: 'choco',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/350 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 603,
      title: 'Chocolate para Mesa Ideal',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Choco Milk/Chocolate para Mesa Ideal CONT NET 540 G.png',
      category: 'abarrotes',
      subcategory: 'choco',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/540 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 604,
      title: 'El Ideal Chocolate para mesa sabor canela',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Choco Milk/El Ideal Chocolate Para Mesa Canela CONT NET 160 G.png',
      category: 'abarrotes',
      subcategory: 'choco',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/160 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 605,
      title: 'Ideal Polvo para preparar bebida sabor chocolate - canela',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Choco Milk/Ideal Chocolate Canela CONT NET 1 KG.png',
      category: 'abarrotes',
      subcategory: 'choco',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/160 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 606,
      title: 'Ideal Polvo para preparar bebida sabor chocolate - canela',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Choco Milk/Ideal Chocolate Canela CONT NET 160 G.png',
      category: 'abarrotes',
      subcategory: 'choco',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/1 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 607,
      title: 'Ideal Polvo para preparar bebida sabor chocolate - vainilla',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Choco Milk/Ideal Chocolate Vainilla CONT NET 1 KG.png',
      category: 'abarrotes',
      subcategory: 'choco',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 12/1 kg',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 608,
      title: 'Ideal Polvo para preparar bebida sabor chocolate - vainilla',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Choco Milk/Ideal Chocolate Vainilla CONT NET 160 G.png',
      category: 'abarrotes',
      subcategory: 'choco',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/160 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 609,
      title: 'Ideal Polvo para preparar bebida sabor chocolate - canela',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Choco Milk/Ideal CONT NET 500 G.png',
      category: 'abarrotes',
      subcategory: 'choco',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 500 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
    {
      id: 610,
      title: 'Nestle Chocolate Abuelita Original',
      price: 200.0,
      image: '/assets/Segmentos/Abarrotes/Choco Milk/Nestle Chocolate Abuelita CONT NET 540 G.png',
      category: 'abarrotes',
      subcategory: 'choco',
      rating: 4.8,
      reviews: 4.8,
      description: 'Contenido Neto 24/540 gramos',
      part: 'Mayoreo a partir de 4 piezas',
      isFeatured: true,
      stock: 1000,
    },
];