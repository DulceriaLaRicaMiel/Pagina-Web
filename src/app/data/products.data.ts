import { CARAMELOS_PRODUCTS } from "./Dulces/caramelos.data";
import { CHICLES_PRODUCTS } from "./Dulces/chicles.data";
import { CHOCOLATES_PRODUCTS } from "./Dulces/chocolates.data";
import { CREMOSOS_PRODUCTS } from "./Dulces/cremosos.data";
import { DULCES_PRODUCTS } from "./Dulces/dulces.data";
import { GOMITAS_PRODUCTS } from "./Dulces/gomitas.data";
import { MALVAVISCOS_PRODUCTS } from "./Dulces/malvaviscos.data";
import { PALETAS_PRODUCTS } from "./Dulces/paletas.data";
import { CACAHUATES_PRODUCTS } from "./Botanas/cacahuates.data";
import { CHICHARRONES_PRODUCTS } from "./Botanas/chicharrones.data";
import { FRITURAS_PRODUCTS } from "./Botanas/frituras.data";
import { CHILEPOLVO_PRODUCTS } from "./Salsas/chile.data";
import { SALSAS_PRODUCTS } from "./Salsas/salsas.data";
import { AGUA_PRODUCTS } from "./Bebidas/agua.data";
import { BOLIS_PRODUCTS } from "./Bebidas/bolis.data";
import { JUGOS_PRODUCTS } from "./Bebidas/jugos.data";
import { REFRESCOS_PRODUCTS } from "./Bebidas/refrescos.data";
import { ACEITES_PRODUCTS } from "./Abarrotes/aceites.data";
import { ADEREZOS_PRODUCTS } from "./Abarrotes/aderezos.data";
import { ARROZ_PRODUCTS } from "./Abarrotes/arroz.data";
import { ATOLE_PRODUCTS } from "./Abarrotes/atole.data";
import { ATUN_PRODUCTS } from "./Abarrotes/atun.data";
import { AZUCAR_PRODUCTS } from "./Abarrotes/azucar.data";
import { BOLSA_PRODUCTS } from "./Abarrotes/bolsa.data";
import { CAFE_PRODUCTS } from "./Abarrotes/cafe.data";
import { CATSUP_PRODUCTS } from "./Abarrotes/catsup.data";
import { CEREAL_PRODUCTS } from "./Abarrotes/cereal.data";
import { CHILES_PRODUCTS } from "./Abarrotes/chiles.data";
import { CHOCO_PRODUCTS } from "./Abarrotes/choco.data";
import { CONCENTRADOS_PRODUCTS } from "./Abarrotes/concentrado.data";
import { CONFIGRATEA_PRODUCTS } from "./Abarrotes/configratea.data";
import { EXTRACTOS_PRODUCTS } from "./Abarrotes/extractos.data";
import { FRIJOLES_PRODUCTS } from "./Abarrotes/frijoles.data";
import { FRUTAS_PRODUCTS } from "./Abarrotes/frutas.data";
import { GALLETAS_PRODUCTS } from "./Abarrotes/galletas.data";
import { GELATINAS_PRODUCTS } from "./Abarrotes/gelatinas.data";
import { LACTEOS_PRODUCTS } from "./Abarrotes/lacteos.data";
import { MAYONESA_PRODUCTS } from "./Abarrotes/mayonesa.data";
import { MIEL_PRODUCTS } from "./Abarrotes/miel.data";
import { PASTAS_PRODUCTS } from "./Abarrotes/pastas.data";
import { SAL_PRODUCTS } from "./Abarrotes/sal.data";
import { VELAS_PRODUCTS } from "./Abarrotes/velas.data";
import { VINAGRE_PRODUCTS } from "./Abarrotes/vinagre.data";
import { ALIMENTO_PRODUCTS } from "./Abarrotes/alimento.data";
import { CIGARROS_PRODUCTS } from "./Cigarros/cigarros.data";
import { FIESTA_PRODUCTS } from "./Decoraciones/fiesta.data";
import { GLOBOS_PRODUCTS } from "./Decoraciones/globos.data";
import { INVITACIONES_PRODUCTS } from "./Decoraciones/invitaciones.data";
import { ALUMINIO_PRODUCTS } from "./Desechables/aluminio.data";
import { CHAROLAS_PRODUCTS } from "./Desechables/charolas.data";
import { CUBIERTOS_PRODUCTS } from "./Desechables/cubiertos.data";
import { TAPAS_PRODUCTS } from "./Desechables/tapas.data";
import { VASOS_PRODUCTS } from "./Desechables/vasos.data";
import { ENCENDEDORES_PRODUCTS } from "./Encendedores/encendedor.data";
import { CLORO_PRODUCTS } from "./Limpieza/cloro.data";
import { DETERGENTE_PRODUCTS } from "./Limpieza/detergente.data";
import { JABON_PRODUCTS } from "./Limpieza/jabon.data";
import { PAPEL_PRODUCTS } from "./Limpieza/papel.data";
import { DIENTES_PRODUCTS } from "./Limpieza/dientes.data";
import { PAÑAL_PRODUCTS } from "./Limpieza/pañal.data";
import { SERVILLETAS_PRODUCTS } from "./Limpieza/servilletas.data";
import { SHAMPOO_PRODUCTS } from "./Limpieza/shampoo.data";
import { MOSQUITOS_PRODUCTS } from "./Limpieza/mosquitos.data";
import { CELOFAN_PRODUCTS } from "./Desechables/celofan.data";

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

  export const PRODUCTS: Product[] = [
  ...CARAMELOS_PRODUCTS,
  ...CHICLES_PRODUCTS,
  ...CHOCOLATES_PRODUCTS,
  ...CREMOSOS_PRODUCTS,
  ...DULCES_PRODUCTS,
  ...GOMITAS_PRODUCTS,
  ...MALVAVISCOS_PRODUCTS,
  ...PALETAS_PRODUCTS,
  ...CACAHUATES_PRODUCTS,
  ...CHICHARRONES_PRODUCTS,
  ...FRITURAS_PRODUCTS,
  ...CHILEPOLVO_PRODUCTS,
  ...SALSAS_PRODUCTS,
  ...AGUA_PRODUCTS,
  ...BOLIS_PRODUCTS,
  ...JUGOS_PRODUCTS,
  ...REFRESCOS_PRODUCTS,
  ...ACEITES_PRODUCTS,
  ...ADEREZOS_PRODUCTS,
  ...ARROZ_PRODUCTS,
  ...ATOLE_PRODUCTS,
  ...ATUN_PRODUCTS,
  ...AZUCAR_PRODUCTS,
  ...BOLSA_PRODUCTS,
  ...CAFE_PRODUCTS,
  ...CATSUP_PRODUCTS,
  ...CEREAL_PRODUCTS,
  ...CHILES_PRODUCTS,
  ...CHOCO_PRODUCTS,
  ...CONCENTRADOS_PRODUCTS,
  ...CONFIGRATEA_PRODUCTS,
  ...EXTRACTOS_PRODUCTS,
  ...FRIJOLES_PRODUCTS,
  ...FRUTAS_PRODUCTS,
  ...GALLETAS_PRODUCTS,
  ...GELATINAS_PRODUCTS,
  ...LACTEOS_PRODUCTS,
  ...MAYONESA_PRODUCTS,
  ...MIEL_PRODUCTS,
  ...PASTAS_PRODUCTS,
  ...SAL_PRODUCTS,
  ...VELAS_PRODUCTS,
  ...VINAGRE_PRODUCTS,
  ...ALIMENTO_PRODUCTS,
  ...CIGARROS_PRODUCTS,
  ...FIESTA_PRODUCTS,
  ...GLOBOS_PRODUCTS,
  ...INVITACIONES_PRODUCTS,
  ...ALUMINIO_PRODUCTS,
  ...CHAROLAS_PRODUCTS,
  ...CUBIERTOS_PRODUCTS,
  ...TAPAS_PRODUCTS,
  ...VASOS_PRODUCTS,
  ...ENCENDEDORES_PRODUCTS,
  ...CLORO_PRODUCTS,
  ...DETERGENTE_PRODUCTS,
  ...JABON_PRODUCTS,
  ...PAPEL_PRODUCTS,
  ...DIENTES_PRODUCTS,
  ...PAÑAL_PRODUCTS,
  ...SERVILLETAS_PRODUCTS,
  ...SHAMPOO_PRODUCTS,
  ...MOSQUITOS_PRODUCTS,
  ...CELOFAN_PRODUCTS,
  ];