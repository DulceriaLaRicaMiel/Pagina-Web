require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Configuración
app.use(cors({
  origin: true, // Acepta cualquier origen
  credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mapeo de productos a price IDs
const PRODUCT_PRICES = {

  // Abarrotes/Aceites
  526: 'price_1RmJiVRjoYBH8yfCfLbgS5ej',
  527: 'price_1RmJRLRjoYBH8yfCchBUqhDd',
  530: 'price_1RmJlrRjoYBH8yfCP9BWsgy7',
  532: 'price_1RmJZcRjoYBH8yfCadcDOvEE',
  533: 'price_1RmJVARjoYBH8yfCQ83iEsq3',
  534: 'price_1RmJeaRjoYBH8yfCb2qhrbiJ',

  // Abarrotes/Chiles
  586: 'price_1RmJKsRjoYBH8yfCdEaHOTTf',

  // Abarrotes/Concentrados
  611: 'price_1RmILLRjoYBH8yfCDFdfsEYM',
  612: 'price_1RmIOSRjoYBH8yfC9AtTXLwQ',
  614: 'price_1RmISTRjoYBH8yfCQlklEcHN',
  615: 'price_1RmIVoRjoYBH8yfCNay44q9w',
  617: 'price_1RmIZWRjoYBH8yfCmumw5kge',
  619: 'price_1RmIEdRjoYBH8yfCx9Ozirc9',
  620: 'price_1RmIBFRjoYBH8yfCBumSf1YU',
  621: 'price_1RmI8FRjoYBH8yfCgW1DdkFi',
  622: 'price_1RmI5CRjoYBH8yfCfriPYaX4',
  623: 'price_1RmI0tRjoYBH8yfCxyw0eD0P',
  624: 'price_1RmHlJRjoYBH8yfCy11AMo1G',
  625: 'price_1RmHcqRjoYBH8yfCAGHZKia5',
  626: 'price_1RmHhDRjoYBH8yfCWCIuJw0v',
  628: 'price_1RmHtKRjoYBH8yfCi84xb2D1',
  629: 'price_1RmHp0RjoYBH8yfCtfIwnYx3',
  630: 'price_1RmHwaRjoYBH8yfCorHk6CI9',

  // Abarrotes/Gelatinas
  692: 'price_1RmIftRjoYBH8yfCE1FqpM1g',
  693: 'price_1RmIhFRjoYBH8yfCzuTsBvZT',
  694: 'price_1RmIirRjoYBH8yfCvyxlLVP2',
  695: 'price_1RmIkVRjoYBH8yfCm0DKMedT',
  696: 'price_1RmImmRjoYBH8yfCaHDWKkPj',
  697: 'price_1RmIo4RjoYBH8yfC1glZwFq6',
  698: 'price_1RmIpMRjoYBH8yfCFKKtih8K',
  699: 'price_1RmIqnRjoYBH8yfCgb0GrZvH',
  701: 'price_1RmIt5RjoYBH8yfCRPgrOF7v',
  702: 'price_1RmIvRRjoYBH8yfCEXPf7dGV',
  703: 'price_1RmIxwRjoYBH8yfCnviJgQFr',
  705: 'price_1RmIzORjoYBH8yfCRpDffHmE',
  706: 'price_1RmJ0dRjoYBH8yfCfubljGwz',
  707: 'price_1RmJ1mRjoYBH8yfCiIqD36wn',
  708: 'price_1RmJ2uRjoYBH8yfCJlKk85p7',
  709: 'price_1RmJ4IRjoYBH8yfCNpUUz9Vc',
  710: 'price_1RmJ5SRjoYBH8yfCYK9wXvq5',
  711: 'price_1RmJ6aRjoYBH8yfCZpB0ZxYJ',
  712: 'price_1RmJ7rRjoYBH8yfC7fKCu9VQ',
  713: 'price_1RmJ90RjoYBH8yfCEXxRcky3',
  714: 'price_1RmJA5RjoYBH8yfCIz9ysfs6',
  715: 'price_1RmJBERjoYBH8yfCWcIvzAuQ',
  716: 'price_1RmJCORjoYBH8yfCLjD3LMp9',
  717: 'price_1RmJDRRjoYBH8yfCjGKRqMda',
  718: 'price_1RmJEdRjoYBH8yfCI0mXoB21',
  719: 'price_1RmJG7RjoYBH8yfC3AzWrbCG',
  720: 'price_1RmJH8RjoYBH8yfClVD3EBDg',

  // Abarrotes/Lacteos
  734: 'price_1RmLJMRjoYBH8yfCauA74txz',
  735: 'price_1RmLGNRjoYBH8yfC0SagT7CW',
  736: 'price_1RmLDERjoYBH8yfCuMgazeuG',
  737: 'price_1RmL3GRjoYBH8yfCSjHPMCzu',
  738: 'price_1RmL8eRjoYBH8yfCbNcABd9v',

  // Abarrotes/Velas
  764: 'price_1RmKmJRjoYBH8yfCaIW5ohTT',
  767: 'price_1RmKrWRjoYBH8yfCGQBRFK0g',
  768: 'price_1RmKoPRjoYBH8yfCZh84atq6',
  776: 'price_1RmKj1RjoYBH8yfC8hDTrWlA',
  770: 'price_1RmKwIRjoYBH8yfCzOM1wg6B',
  771: 'price_1RmKe4RjoYBH8yfCT2ounBwi',
  772: 'price_1RmJxgRjoYBH8yfCjKipGJpR',
  773: 'price_1RmKz9RjoYBH8yfCuWaKB8N7',

  // Botanas/ Frituras
  413: 'price_1RmLPdRjoYBH8yfCqNm7iXae',

  // Desechables/Brochetas
  852: 'price_1RmJstRjoYBH8yfCCZBlRQ86',

  // Dulces/Caramelos
  1: 'price_1RfoowRjoYBH8yfC6zObuNZd',
  2: 'price_1RgUPsRjoYBH8yfC2dYQTt3h',  
  3: 'price_1RgUUnRjoYBH8yfCGsxlFOSw',
  4: 'price_1RgUVqRjoYBH8yfCnySzURPm',
  5: 'price_1RiAmdRjoYBH8yfCFnGk0CkL',
  6: 'price_1RgUY6RjoYBH8yfCVg9UACUF',
  7: 'price_1RgUZTRjoYBH8yfC6VO60jlU',
  8: 'price_1RgUayRjoYBH8yfC6ELxr70I',
  9: 'price_1RgUbZRjoYBH8yfCduQHhZee',
  10: 'price_1RgUcIRjoYBH8yfCkNEx0UNu',
  11: 'price_1RgUcqRjoYBH8yfChiA8VRlT',
  12: 'price_1RgUcqRjoYBH8yfChiA8VRlT',
  13: 'price_1RiArLRjoYBH8yfCMNeovyb4',
  14: 'price_1RiAt2RjoYBH8yfC1tqM4kEO',
  15: 'price_1RiAvnRjoYBH8yfCPS7Lj4TT',
  19: 'price_1RiB2DRjoYBH8yfCKki3yCZz',
  20: 'price_1RiB5RRjoYBH8yfCnc0RfC8o',
  21: 'price_1RiB8ORjoYBH8yfCNYBG9MG8',
  22: 'price_1RiBBxRjoYBH8yfCILjeyLAM',
  23: 'price_1RiBEHRjoYBH8yfCmHgFiU8m',
  24: 'price_1RiFTDRjoYBH8yfCzO4FeJSn',
  25: 'price_1RiFWpRjoYBH8yfCKm74o3lq',
  26: 'price_1RiFb7RjoYBH8yfCb1lQXUEn',
  29: 'price_1RiFg0RjoYBH8yfCw8CzZYIJ',
  30: 'price_1RiFiuRjoYBH8yfCXurPybyr',
  31: 'price_1RiFlMRjoYBH8yfCjWzLXhPv',
  32: 'price_1RiFoWRjoYBH8yfCSx4ICIlQ',
  33: 'price_1RiFsDRjoYBH8yfCK5hStNvr',
  34: 'price_1RiFuvRjoYBH8yfC8BPtN7S4',
  35: 'price_1RiFxZRjoYBH8yfCKyG5bShz',
  36: 'price_1RiG6kRjoYBH8yfC1s1kcRK8',
  38: 'price_1RiGPTRjoYBH8yfCqlOFN7ME',
  39: 'price_1RiGR9RjoYBH8yfC9GVHuyKw',
  41: 'price_1RiGWVRjoYBH8yfCTz87G54u',

  // Dulces/Dulces
  162: 'price_1RmLdkRjoYBH8yfCfRMQxtWO',
  174: 'price_1RmLU1RjoYBH8yfCOPRrXjg8',

  // Dulces/Paletas
  283: 'price_1RmM2ERjoYBH8yfC4zIrgcZF',
  284: 'price_1RmMATRjoYBH8yfCOkAWsCPj',
  285: 'price_1RmMDtRjoYBH8yfCgsxdd7Ug',
  291: 'price_1RmMHKRjoYBH8yfCT2AnGJz3',
  292: 'price_1RmMLCRjoYBH8yfC4yXdpJ1J',
  303: 'price_1RmLljRjoYBH8yfCc6UAslsH',
  304: 'price_1RmLpqRjoYBH8yfCjKGLYHgf',
  305: 'price_1RmLtTRjoYBH8yfCkuPQqntx',

  // Limpieza/Cloro
  919: 'price_1RmFV5RjoYBH8yfCxiPSpjIp',
  920: 'price_1RmFQfRjoYBH8yfCzyTp5kdw',
  921: 'price_1RmFLhRjoYBH8yfCPEJSEPs4',
  922: 'price_1RmG1aRjoYBH8yfCw7BvL0W7',
  923: 'price_1RmFwqRjoYBH8yfCucNj5bvs',
  925: 'price_1RmFH3RjoYBH8yfCiTC8ekl4',
  927: 'price_1RmFBXRjoYBH8yfCmCM9ekcY',
  930: 'price_1RmFeVRjoYBH8yfC4CFTAxya',
  931: 'price_1RmFjRRjoYBH8yfCJdJHxHSk',
  932: 'price_1RmFYmRjoYBH8yfCgw2AhNeE',
  933: 'price_1RmFqzRjoYBH8yfCTJRNKKWp',
  934: 'price_1RmFniRjoYBH8yfC65BIu8qG',

  // Limpieza/Detergente
  935: 'price_1Rm7huRjoYBH8yfC81ggWYew',
  936: 'price_1Rm7ZORjoYBH8yfCYWr2o2Ig',
  937: 'price_1Rm7fARjoYBH8yfC3B90HJ0N',
  938: 'price_1Rm7cERjoYBH8yfCpfSuPoMk',
  939: 'price_1Rm7NiRjoYBH8yfC3I17ytQb',
  940: 'price_1Rm7VYRjoYBH8yfCT7Udce37',
  941: 'price_1Rm7S6RjoYBH8yfCHmKz8FI8',
  942: 'price_1Rm77CRjoYBH8yfCbCLvgzGG',
  943: 'price_1Rm7EuRjoYBH8yfCipKTJGNS',
  944: 'price_1Rm7C6RjoYBH8yfCwNp04FcS',

  // Limpieza/Dientes
  958: 'price_1RmGdkRjoYBH8yfCPThBCY5t',
  959: 'price_1RmGa9RjoYBH8yfC6Gw2QJYR',

  // Limpieza/Jabon
  950: 'price_1RmGKcRjoYBH8yfCuposgJMv',
  951: 'price_1RmGE3RjoYBH8yfClaDyoueh',
  952: 'price_1RmGHRRjoYBH8yfCwjcPinXN',
  953: 'price_1RmGPPRjoYBH8yfCFoGS0H5t',
  954: 'price_1RmGTDRjoYBH8yfCnQih05T3',

  // Limpieza/Mosquitos
  981: 'price_1RmGhcRjoYBH8yfCvL24dbh5',
  982: 'price_1RmGm2RjoYBH8yfCBL5wTgYq',

  // Limpieza/Pañal
  961: 'price_1RmH1KRjoYBH8yfC8jIXvsP8',
  963: 'price_1RmH8gRjoYBH8yfCGFmXRPIz',
  964: 'price_1RmHHJRjoYBH8yfC4028xK6L',
  965: 'price_1RmHDJRjoYBH8yfCoV9VIL64',
  967: 'price_1RmGx6RjoYBH8yfCVJqFhMwW',
  968: 'price_1RmH5MRjoYBH8yfCyql6WdUd',
  969: 'price_1RmGynRjoYBH8yfCc2lIwGcl',

  // Limpieza/Papel
  955: 'price_1RmHMmRjoYBH8yfC2uTqkjcV',
  956: 'price_1RmHPJRjoYBH8yfChhWZIJui',
  957: 'price_1RmHSORjoYBH8yfCRQQvGuFu',

  // Limpieza/Servilleta
  972: 'price_1RmHW4RjoYBH8yfCMXDDjjAD',

  // Limpieza/Shampoo
  973: 'price_1Rm6Z0RjoYBH8yfCUF5xVhXW',
  974: 'price_1Rm6e8RjoYBH8yfCkwHNy5GD',
  976: 'price_1Rm6nBRjoYBH8yfCQvmRy6Uo',
  978: 'price_1Rm4gcRjoYBH8yfC6TKkDGao',
  979: 'price_1Rm4oRRjoYBH8yfCGsBahczg',
  980: 'price_1Rm6ixRjoYBH8yfCFuQJQiA0',
};

// Precios por mayoreo (formato: 'productId_minQuantity': 'priceId')
const BULK_PRICES = {

  // Abarrotes/Aceites
  '526_4': 'price_1RmJjwRjoYBH8yfCAmhAaHsI',
  '527_4': 'price_1RmJSCRjoYBH8yfCrMBYPwiU',
  '530_4': 'price_1RmJnDRjoYBH8yfCPEvKDSSR',
  '532_4': 'price_1RmJafRjoYBH8yfCcR5dM7Lm',
  '533_4': 'price_1RmJWIRjoYBH8yfCSHjEMtW8',
  '534_4': 'price_1RmJfWRjoYBH8yfCAI2NbmEA',

  // Abarrotes/Chiles
  '586_4': 'price_1RmJMHRjoYBH8yfCjy4Kh50f',

  // Abarrotes/Concentrados
  '611_4': 'price_1RmIMKRjoYBH8yfCcGOojCgg',
  '612_4': 'price_1RmIPJRjoYBH8yfCwurOMouy',
  '614_4': 'price_1RmITQRjoYBH8yfCfMnxNCLu',
  '615_4': 'price_1RmIWiRjoYBH8yfC62he6o0r',
  '617_4': 'price_1RmIaaRjoYBH8yfCQ3VWgOOJ',
  '619_4': 'price_1RmIGORjoYBH8yfCQRNPv9LX',
  '620_4': 'price_1RmICFRjoYBH8yfCcIzJzILF',
  '621_4': 'price_1RmI9FRjoYBH8yfCwP6ZQQO8',
  '622_4': 'price_1RmI67RjoYBH8yfCdQVyjLJz',
  '623_4': 'price_1RmI23RjoYBH8yfCVkQhjcKM',
  '624_4': 'price_1RmHmBRjoYBH8yfCpB7mNWHG',
  '625_4': 'price_1RmHeCRjoYBH8yfCvzffymG2',
  '626_4': 'price_1RmHiXRjoYBH8yfCdYOVN47E',
  '628_4': 'price_1RmHuERjoYBH8yfCsuTWNUDM',
  '629_4': 'price_1RmHqfRjoYBH8yfC4YBDhqHg',
  '630_4': 'price_1RmHxfRjoYBH8yfCzTAfaHx8',

  //Abarrotes/Lacteos
  '734_4': 'price_1RmLKqRjoYBH8yfCUx4gNgSu',
  '735_4': 'price_1RmLHhRjoYBH8yfCAJEiY2Ti',
  '736_4': 'price_1RmLEJRjoYBH8yfC1tfQPazx',
  '737_4': 'price_1RmL5KRjoYBH8yfCNXStluMw',
  '738_4': 'price_1RmL9xRjoYBH8yfCuzynqipr',

  // Abarrotes/Velas
  '766_4': 'price_1RmKkORjoYBH8yfCdr4ZWfFh',
  '767_4': 'price_1RmKt3RjoYBH8yfCm4jYEy0a',
  '768_4': 'price_1RmKpMRjoYBH8yfCO92ekQxs',
  '770_4': 'price_1RmKxORjoYBH8yfC7O1ZC0CP',
  '771_4': 'price_1RmKfKRjoYBH8yfC25fJNZag',
  '772_4': 'price_1RmJzHRjoYBH8yfC56RN9yJF',
  '773_4': 'price_1RmL0bRjoYBH8yfCaePc4G1i',

  // Desechables/Brochetas
  '852_4': 'price_1RmJtsRjoYBH8yfCFtNicmEy',

  // Dulces/Caramelos
  '13_4': 'price_1RhBmwRjoYBH8yfCfOVBV7OU', 
  '14_4': 'price_1RhBmwRjoYBH8yfCfOVBV7OU', 
  '15_4': 'price_1RiAwrRjoYBH8yfC8AAfaCIV',
  '19_4': 'price_1RiB36RjoYBH8yfCZHp603ZP',
  '20_4': 'price_1RiB6JRjoYBH8yfCqB6m42Qq',
  '21_4': 'price_1RiBA4RjoYBH8yfCGPV55WXk',
  '22_4': 'price_1RiBCqRjoYBH8yfCVNev4fle',
  '23_4': 'price_1RiBF8RjoYBH8yfCVPEx2bf6',
  '24_4': 'price_1RiFTDRjoYBH8yfCzO4FeJSn',
  '25_4': 'price_1RiFYORjoYBH8yfCyCLiUuf8',
  '26_4': 'price_1RiFc4RjoYBH8yfCKsf26FXI',
  '29_4': 'price_1RiFgtRjoYBH8yfCnVNreGw3',
  '30_4': 'price_1RiFjpRjoYBH8yfCzxyY1C8w',
  '31_4': 'price_1RiFmARjoYBH8yfCMGqK3TVg',
  '32_4': 'price_1RiFpKRjoYBH8yfCuHeDLDDc',
  '33_4': 'price_1RiFsxRjoYBH8yfCw18qejR1',
  '34_4': 'price_1RiFvsRjoYBH8yfCiUhGLNQ7',
  '35_4': 'price_1RiFyHRjoYBH8yfCWD7i7y6F',
  '39_4': 'price_1RiGRzRjoYBH8yfCoF58G5M9',
  '41_10': 'price_1RiGY0RjoYBH8yfCdYmskfnO',

  // Dulces/Dulces
  '162_4': 'price_1RmLf3RjoYBH8yfCeeWrTkmE',
  '174_4': 'price_1RmLVmRjoYBH8yfCthqQuPYX',

  // Dulces/Paletas
  '283_4': 'price_1RmM75RjoYBH8yfCQuufe43E',
  '284_4': 'price_1RmMCPRjoYBH8yfCcyOhwwsh',
  '285_4': 'price_1RmMEyRjoYBH8yfCE5g7ZAda',
  '291_4': 'price_1RmMIYRjoYBH8yfC9yIi6BOF',
  '292_4': 'price_1RmMMRRjoYBH8yfCLqbtVVSp',
  '303_4': 'price_1RmLnQRjoYBH8yfCxPRGfBxi',
  '304_4': 'price_1RmLrzRjoYBH8yfCfsyGCc5p',
  '305_4': 'price_1RmLvGRjoYBH8yfCmT08G54U',

  // Limpieza/Cloro
  '919_4': 'price_1RmFWCRjoYBH8yfCrFllSof9',
  '920_4': 'price_1RmFS9RjoYBH8yfCyTJfwBLw',
  '921_4': 'price_1RmFNaRjoYBH8yfC6i5Tn3NI',
  '922_4': 'price_1RmG2wRjoYBH8yfCrC9M8gV6',
  '923_4': 'price_1RmFyiRjoYBH8yfCrwxOxHBS',
  '925_4': 'price_1RmFIlRjoYBH8yfCTWroZHUa',
  '927_4': 'price_1RmFDRRjoYBH8yfCyaLQuWPR',
  '930_4': 'price_1RmFfbRjoYBH8yfCPg7Xs0QT',
  '931_4': 'price_1RmFkXRjoYBH8yfCimXtnL24',
  '932_4': 'price_1RmFaaRjoYBH8yfCBlWTcX2K',
  '933_4': 'price_1RmFs1RjoYBH8yfCcJgxvfYQ',
  '934_4': 'price_1RmFojRjoYBH8yfCZHyroMT8',

  // Limpieza/Detergente
  '935_4': 'price_1Rm7jARjoYBH8yfCmGH8W3lz',
  '936_4': 'price_1Rm7aIRjoYBH8yfCev0w1v1b',
  '937_4': 'price_1Rm7g1RjoYBH8yfCSb2QYZwW',
  '938_4': 'price_1Rm7dBRjoYBH8yfC5aIw3qDW',
  '939_4': 'price_1Rm7PdRjoYBH8yfCaRCyAetA',
  '940_4': 'price_1Rm7WcRjoYBH8yfCgbbGWgtE',
  '941_4': 'price_1Rm7TbRjoYBH8yfCUO5Cafkp',
  '942_4': 'price_1Rm796RjoYBH8yfCt7sBOJFV',
  '943_4': 'price_1Rm7HSRjoYBH8yfCr7RB9LO5',
  '944_4': 'price_1Rm7CqRjoYBH8yfCTun64rgW',

  // Limpieza/Dientes
  '958_4': 'price_1RmGejRjoYBH8yfCuBuclRs6',
  '959_4': 'price_1RmGbpRjoYBH8yfCTgwqzTkB',

  // Limpieza/Jabon
  '950_4': 'price_1RmGLhRjoYBH8yfCML1XrwZd',
  '951_4': 'price_1RmGFHRjoYBH8yfC2Z2r5lvM',
  '952_4': 'price_1RmGINRjoYBH8yfCPeIEnnrK',
  '953_4': 'price_1RmGQyRjoYBH8yfCBchZwgk2',
  '954_4': 'price_1RmGURRjoYBH8yfCYs80rj50',

  // Limpieza/Mosquitos
  '981_4': 'price_1RmGj3RjoYBH8yfChszvS7rA',
  '982_4': 'price_1RmGn9RjoYBH8yfCMQxqa7ve',

  // Limpieza/Pañal
  '961_4': 'price_1RmH3ARjoYBH8yfChgOFwL0G',
  '963_4': 'price_1RmH9NRjoYBH8yfCXsEMXCvY',
  '964_4': 'price_1RmHIIRjoYBH8yfC3xdXQt7B',
  '965_4': 'price_1RmHE5RjoYBH8yfCeJDHXNxz',
  '968_4': 'price_1RmH6HRjoYBH8yfCOdOne2Ub',

  // Limpieza/Papel
  '955_4': 'price_1RmHNsRjoYBH8yfCG1yGJnpG',
  '956_4': 'price_1RmHQcRjoYBH8yfCaxySDzm2',
  '957_4': 'price_1RmHTPRjoYBH8yfC9b3VtYgY',

  // Limpieza/Servilletas
  '972_4': 'price_1RmHXpRjoYBH8yfCpxL7DgTq',

  // Limpieza/Shampoo
  '973_4': 'price_1Rm6a5RjoYBH8yfC9otOfTMi',
  '974_4': 'price_1Rm6fLRjoYBH8yfCyloJFinv',
  '976_4': 'price_1Rm6oERjoYBH8yfCiW9Opdhd',
  '978_4': 'price_1Rm4meRjoYBH8yfCVFk1apuI',
  '979_4': 'price_1Rm4qDRjoYBH8yfCl7qDEsBn',
  '980_4': 'price_1Rm6jxRjoYBH8yfCD3GE27vH',
};

// Función para determinar el precio adecuado (normal o mayoreo)
function getPriceId(productId, quantity) {
  // Primero verificamos si hay precio por mayoreo para este producto y cantidad
  const bulkPriceKey = `${productId}_${quantity}`;
  
  // Buscamos en BULK_PRICES si existe un precio para esta cantidad exacta
  if (BULK_PRICES[bulkPriceKey]) {
    return BULK_PRICES[bulkPriceKey];
  }
  
  // Alternativamente, podríamos buscar el precio por mayoreo más alto que cumpla con la cantidad mínima
  // Esto sería útil si tienes varios niveles de descuento (ej: 5+, 10+, 20+)
  const bulkEntries = Object.entries(BULK_PRICES)
    .filter(([key]) => key.startsWith(`${productId}_`))
    .map(([key, priceId]) => {
      const minQty = parseInt(key.split('_')[1]);
      return { minQty, priceId };
    })
    .sort((a, b) => b.minQty - a.minQty); // Ordenamos de mayor a menor cantidad mínima
  
  for (const entry of bulkEntries) {
    if (quantity >= entry.minQty) {
      return entry.priceId;
    }
  }
  
  // Si no hay precio por mayoreo, devolvemos el precio normal
  return PRODUCT_PRICES[productId];
}

// Endpoint para crear sesión de checkout
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { items } = req.body;
    
    const line_items = items.map(item => ({
      price: getPriceId(item.id, item.quantity),
      quantity: item.quantity
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    res.json({ id: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint para verificar estado de sesión
app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  res.json({
    status: session.status,
    customer_email: session.customer_details?.email
  });
});

app.listen(4242, () => console.log('Running on port 4242'));