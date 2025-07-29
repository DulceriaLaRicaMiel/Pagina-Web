export interface Category {
  value: string;
  name: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  value: string;
  name: string;
}

export const CATEGORIES: Category[] = [
    {
      value: 'abarrotes',
      name: 'Abarrotes',
      subcategories: [
        { value: 'aceites', name: 'Aceites' },
        { value: 'aderezos', name: 'Aderezos' },
        { value: 'arroz', name: 'Arroz' },
        { value: 'atole', name: 'Atole' },
        { value: 'atun', name: 'Atún' },
        { value: 'azucar', name: 'Azúcar' },
        { value: 'bolsa', name: 'Bolsa de Frutos Secos' },
        { value: 'cafe', name: 'Café' },
        { value: 'catsup', name: 'Catsup' },
        { value: 'cereal', name: 'Cereales' },
        { value: 'chiles', name: 'Chiles' },
        { value: 'choco', name: 'Chocolate para Mesa' },
        { value: 'concentrado', name: 'Concentrados' },
        { value: 'configratea', name: 'Configratea' },
        { value: 'elotes', name: 'Elotes'},
        { value: 'extractos', name: 'Extractos' },
        { value: 'frijoles', name: 'Frijoles' },
        { value: 'frutas', name: 'Frutas' },
        { value: 'galletas', name: 'Galletas' },
        { value: 'gelatinas', name: 'Gelatinas' },
        { value: 'lacteos', name: 'Lácteos' },
        { value: 'mayonesa', name: 'Mayonesa' },
        { value: 'miel', name: 'Miel' },
        { value: 'pastas', name: 'Pastas' },
        { value: 'sal', name: 'Sal' },
        { value: 'velas', name: 'Velas y Cerrillos' },
        { value: 'vinagre', name: 'Vinagre' },
        { value: 'alimento', name: 'Alimento para Mascotas' },
      ],
    },
    {
      value: 'bebidas',
      name: 'Bebidas',
      subcategories: [
        { value: 'agua', name: 'Agua' },
        { value: 'bolis', name: 'Bolis' },
        { value: 'jugos', name: 'Jugos' },
        { value: 'refrescos', name: 'Refrescos' },
      ],
    },
    {
      value: 'botanas',
      name: 'Botanas',
      subcategories: [
        { value: 'cacahuates', name: 'Cacahuates y Churros' },
        { value: 'chicharrones', name: 'Chicharrones' },
        { value: 'frituras', name: 'Frituras' },
      ],
    },
    {
      value: 'cigarros',
      name: 'Cigarros',
      subcategories: [
        { value: 'cigarros', name: 'Cigarros' },
      ],
    },
    {
      value: 'decoraciones',
      name: 'Decoraciones',
      subcategories: [
        { value: 'fiesta', name: 'Fiesta' },
        { value: 'globos', name: 'Globos' },
        { value: 'invitaciones', name: 'Invitaciones' },
      ],
    },
    {
      value: 'desechables',
      name: 'Desechables',
      subcategories: [
        { value: 'aluminio', name: 'Aluminio' },
        { value: 'brochetas', name: 'Brochetas y Palillos' },
        { value: 'charolas', name: 'Charolas' },
        { value: 'cubiertos', name: 'Cubiertos' },
        { value: 'tapas', name: 'Tapas' },
        { value: 'vasos', name: 'Vasos' },
        { value: 'celofan', name: 'Celofán' },
      ],
    },
    {
      value: 'dulces',
      name: 'Dulces',
      subcategories: [
        { value: 'caramelos', name: 'Caramelos' },
        { value: 'chicles', name: 'Chicles' },
        { value: 'chocolates', name: 'Chocolates' },
        { value: 'cremoso', name: 'Dulces Cremoso' },
        { value: 'dulces', name: 'Dulces' },
        { value: 'gomitas', name: 'Gomitas' },
        { value: 'malvaviscos', name: 'Malvaviscos' },
        { value: 'paletas', name: 'Paletas' },
      ],
    },
    {
      value: 'encendedores',
      name: 'Encendedores',
      subcategories: [
        { value: 'encendedor', name: 'Encendedor' },
      ],
    },
    {
      value: 'limpieza',
      name: 'Limpieza',
      subcategories: [
        { value: 'cloro', name: 'Cloro' },
        { value: 'detergente', name: 'Detergente' },
        { value: 'jabon', name: 'Jabón' },
        { value: 'papel', name: 'Papel Higiénico' },
        { value: 'dientes', name: 'Pasta de Dientes' },
        { value: 'pañal', name: 'Pañal y Protección' },
        { value: 'servilletas', name: 'Servilletas' },
        { value: 'shampoo', name: 'Shampoo' },
        { value: 'mosquitos', name: 'Protección contra Mosquitos' },
      ],
    },
    {
      value: 'salsas',
      name: 'Salsas',
      subcategories: [
        { value: 'chile', name: 'Chile en Polvo' },
        { value: 'salsas', name: 'Salsas' },
      ],
    },
  ];