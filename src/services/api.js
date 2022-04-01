import axios from 'axios';

const request = async url => {
  try {
    const res = await axios.get(url);
    return res;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getProducts = async () => {
  const URL = 'http://localhost:3000/products';
  return request(URL);
};
export const getCategories = async () => {
  const URL = 'http://localhost:3000/categories';
  return request(URL);
};

// const data = {
//   'Sugestão do Vendedor': [
//     {
//       sku: '10001310000310',
//       barcode: '7897348205258',
//       name: 'Ração Golden Fórmula Mini Bits Para Cães Adultos Pequeno Porte Sabor Carne e Arroz',
//       url: 'www.petz.com.br/produto/racao-golden-formula-mini-bits-para-caes-adultos-pequeno-porte-sabor-carne-e-arroz-95492',
//       token:
//         'produto/racao-golden-formula-mini-bits-para-caes-adultos-pequeno-porte-sabor-carne-e-arroz-95492',
//       thumbnail: 'https://static.petz.com.br/fotos/1562334482325_mini.jpg',
//       originalPrice: 25.9,
//       price: 20.9,
//       priceForSubs: 18.81,
//       pencentualDiscountForSubs: 10,
//       ratingAmount: 1,
//       rating: 4.666666507720947,
//       has_variations: true,
//       currency: 'R$',
//       brand: 'Premier Pet | Golden',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10001320000030',
//       barcode: '7897348204503',
//       name: 'Ração Premier Raças Específicas Shih Tzu para Cães Filhotes',
//       url: 'www.petz.com.br/produto/racao-premier-racas-especificas-shih-tzu-para-caes-filhotes-71305',
//       token: 'produto/racao-premier-racas-especificas-shih-tzu-para-caes-filhotes-71305',
//       thumbnail: 'https://static.petz.com.br/fotos/1570632700773_mini.jpg',
//       price: 95.9,
//       priceForSubs: 86.31,
//       pencentualDiscountForSubs: 10,
//       ratingAmount: 1,
//       rating: 4.75,
//       has_variations: false,
//       currency: 'R$',
//       brand: 'Premier Pet | Premier Raças Específicas',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10002310000032',
//       barcode: '7897348202431',
//       name: 'Ração Golden Special Sabor Frango e Carne para Cães Adultos',
//       url: 'www.petz.com.br/produto/racao-golden-special-sabor-frango-e-carne-para-caes-adultos-71343',
//       token: 'produto/racao-golden-special-sabor-frango-e-carne-para-caes-adultos-71343',
//       thumbnail: 'https://static.petz.com.br/fotos/1614090145261_mini.jpg',
//       price: 142.99,
//       priceForSubs: 128.691,
//       pencentualDiscountForSubs: 10,
//       ratingAmount: 4,
//       rating: 4.61904764175415,
//       has_variations: true,
//       currency: 'R$',
//       brand: 'Premier Pet | Golden',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10003260000095',
//       barcode: '7897348205708',
//       name: 'Biscoito Premier Cookie para Cães Adultos de Raças Pequenas 250g',
//       url: 'www.petz.com.br/produto/biscoito-premier-cookie-para-caes-adultos-de-racas-pequenas-250g-100109',
//       token:
//         'produto/biscoito-premier-cookie-para-caes-adultos-de-racas-pequenas-250g-100109',
//       thumbnail: 'https://static.petz.com.br/fotos/1569849971101_mini.jpg',
//       originalPrice: 22.9,
//       price: 16.99,
//       priceForSubs: 15.290999999999999,
//       pencentualDiscountForSubs: 10,
//       ratingAmount: 2,
//       rating: 5,
//       has_variations: true,
//       currency: 'R$',
//       brand: 'Premier Pet | Premier Cookie',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10003260000096',
//       barcode: '7897348205715',
//       name: 'Biscoito Premier Cookie para Cães Filhotes 250g',
//       url: 'www.petz.com.br/produto/biscoito-premier-cookie-para-caes-filhotes-250g-100110',
//       token: 'produto/biscoito-premier-cookie-para-caes-filhotes-250g-100110',
//       thumbnail: 'https://static.petz.com.br/fotos/1527255645020_mini.jpg',
//       price: 16.4,
//       priceForSubs: 14.76,
//       pencentualDiscountForSubs: 10,
//       rating: 5,
//       has_variations: true,
//       currency: 'R$',
//       brand: 'Premier Pet | Premier Cookie',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10003280000034',
//       barcode: '7891000623008',
//       name: 'Petisco Doguitos Rodízio para Cães Adultos e Filhotes Sabor Carne - 65g',
//       url: 'www.petz.com.br/produto/petisco-doguitos-rodizio-para-caes-adultos-e-filhotes-sabor-carne-65g-72478',
//       token:
//         'produto/petisco-doguitos-rodizio-para-caes-adultos-e-filhotes-sabor-carne-65g-72478',
//       thumbnail: 'https://static.petz.com.br/fotos/1627311554190_mini.jpg',
//       price: 7.55,
//       priceForSubs: 6.795,
//       pencentualDiscountForSubs: 10,
//       rating: 5,
//       has_variations: true,
//       currency: 'R$',
//       brand: 'Nestlé Purina | Nestlé Purina Doguitos',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10003280000288',
//       barcode: '7897260143980',
//       name: 'Bolo Pet Dog Muffin para Cães Sabor Chocolate',
//       url: 'www.petz.com.br/produto/bolo-pet-dog-muffin-para-caes-sabor-chocolate-97470',
//       token: 'produto/bolo-pet-dog-muffin-para-caes-sabor-chocolate-97470',
//       thumbnail: 'https://static.petz.com.br/fotos/1481724570302_mini.jpg',
//       price: 2.99,
//       promotional_price: 2.5,
//       pencentualDiscount: 16,
//       priceForSubs: 2.25,
//       pencentualDiscountForSubs: 10,
//       ratingAmount: 1,
//       rating: 5,
//       has_variations: false,
//       currency: 'R$',
//       brand: 'Pet Dog',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10003300000024',
//       barcode: '7896029022245',
//       name: 'Ração Úmida Pedigree Sachê Carne ao Molho para Cães Adultos de Raças Pequenas 100 g',
//       url: 'www.petz.com.br/produto/racao-umida-pedigree-sache-vital-pro-para-caes-adultos-de-racas-pequenas-sabor-carne-ao-molho-100g-72537',
//       token:
//         'produto/racao-umida-pedigree-sache-vital-pro-para-caes-adultos-de-racas-pequenas-sabor-carne-ao-molho-100g-72537',
//       thumbnail: 'https://static.petz.com.br/fotos/1624544425002_mini.jpg',
//       price: 2.89,
//       priceForSubs: 2.601,
//       pencentualDiscountForSubs: 10,
//       rating: 5,
//       has_variations: true,
//       currency: 'R$',
//       brand: 'Pedigree',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10003300000026',
//       barcode: '7896029022276',
//       name: 'Ração Úmida Pedigree Sachê Cordeiro ao Molho para Cães Adultos de Raças Pequenas 100 g',
//       url: 'www.petz.com.br/produto/racao-umida-pedigree-sache-vital-pro-para-caes-adultos-de-racas-pequenas-sabor-cordeiro-ao-molho-100g-72539',
//       token:
//         'produto/racao-umida-pedigree-sache-vital-pro-para-caes-adultos-de-racas-pequenas-sabor-cordeiro-ao-molho-100g-72539',
//       thumbnail: 'https://static.petz.com.br/fotos/1624544867920_mini.jpg',
//       price: 2.89,
//       priceForSubs: 2.601,
//       pencentualDiscountForSubs: 10,
//       rating: 5,
//       has_variations: true,
//       currency: 'R$',
//       brand: 'Pedigree',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10007240000055',
//       barcode: '7898053580760',
//       name: 'Probiótico Vetnil Cães e Gatos',
//       url: 'www.petz.com.br/produto/probiotico-vetnil-caes-e-gatos-77014',
//       token: 'produto/probiotico-vetnil-caes-e-gatos-77014',
//       thumbnail: 'https://static.petz.com.br/fotos/1499112727526_mini.jpg',
//       price: 41.99,
//       priceForSubs: 37.791000000000004,
//       pencentualDiscountForSubs: 10,
//       ratingAmount: 1,
//       rating: 5,
//       has_variations: false,
//       currency: 'R$',
//       brand: 'Vetnil',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10007240000198',
//       barcode: '7898549750615',
//       name: 'Probiótico Pet Avert 14g',
//       url: 'www.petz.com.br/produto/probiotico-pet-avert-14g-89631',
//       token: 'produto/probiotico-pet-avert-14g-89631',
//       thumbnail: 'https://static.petz.com.br/fotos/1499451619368_mini.jpg',
//       originalPrice: 45.5,
//       price: 37.99,
//       promotional_price: 30.84,
//       pencentualDiscount: 18,
//       priceForSubs: 27.756,
//       pencentualDiscountForSubs: 10,
//       rating: 5,
//       has_variations: false,
//       currency: 'R$',
//       brand: 'Avert Saúde Animal',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10007420000181',
//       barcode: '8713184136992',
//       name: 'Antipulgas e Carrapatos Bravecto MSD para Cães de 4,5 a 10 kg',
//       url: 'www.petz.com.br/produto/antipulgas-e-carrapatos-bravecto-msd-para-caes-de-4,5-a-10-kg-88400',
//       token:
//         'produto/antipulgas-e-carrapatos-bravecto-msd-para-caes-de-4,5-a-10-kg-88400',
//       thumbnail: 'https://static.petz.com.br/fotos/1575296646776_mini.jpg',
//       price: 213.66,
//       priceForSubs: 192.294,
//       pencentualDiscountForSubs: 10,
//       rating: 5,
//       has_variations: true,
//       currency: 'R$',
//       brand: 'Bravecto',
//       availability: 'in_stock',
//       installment: {
//         count: 2,
//         price: 106.83,
//       },
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10007420000182',
//       barcode: '8713184137012',
//       name: 'Antipulgas e Carrapatos Bravecto MSD para Cães de 10 a 20 kg',
//       url: 'www.petz.com.br/produto/antipulgas-e-carrapatos-bravecto-msd-para-caes-de-10-a-20-kg-88119',
//       token: 'produto/antipulgas-e-carrapatos-bravecto-msd-para-caes-de-10-a-20-kg-88119',
//       thumbnail: 'https://static.petz.com.br/fotos/1575296728505_mini.jpg',
//       price: 251.66,
//       priceForSubs: 226.494,
//       pencentualDiscountForSubs: 10,
//       ratingAmount: 1,
//       rating: 4.199999809265137,
//       has_variations: true,
//       currency: 'R$',
//       brand: 'Bravecto',
//       availability: 'in_stock',
//       installment: {
//         count: 3,
//         price: 83.88666666666667,
//       },
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10007430000004',
//       barcode: '7897515654360',
//       name: 'Endogard 10Kg Virbac',
//       url: 'www.petz.com.br/produto/endogard-10kg-virbac-73946',
//       token: 'produto/endogard-10kg-virbac-73946',
//       thumbnail: 'https://static.petz.com.br/fotos/1636056001476_mini.jpg',
//       price: 151.99,
//       promotional_price: 119.92,
//       pencentualDiscount: 21,
//       priceForSubs: 107.928,
//       pencentualDiscountForSubs: 10,
//       rating: 4.333333492279053,
//       has_variations: false,
//       currency: 'R$',
//       brand: 'Virbac | Endogard',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//   ],
//   Brinquedos: [
//     {
//       sku: '10007430000013',
//       barcode: '7891106005708',
//       name: 'Drontal Plus para Cães de 10 kg Sabor Carne',
//       url: 'www.petz.com.br/produto/drontal-plus-para-caes-de-10-kg-sabor-carne-74871',
//       token: 'produto/drontal-plus-para-caes-de-10-kg-sabor-carne-74871',
//       thumbnail: 'https://static.petz.com.br/fotos/1527688356718_mini.jpg',
//       originalPrice: 70.0,
//       price: 53.5,
//       priceForSubs: 48.15,
//       pencentualDiscountForSubs: 10,
//       ratingAmount: 1,
//       rating: 4,
//       has_variations: false,
//       currency: 'R$',
//       brand: 'Elanco | Drontal',
//       availability: 'in_stock',
//       totalStock: 31,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10031181000037',
//       barcode: '7898481300077',
//       name: 'Super Secão Tapete Higiênico para Cachorro',
//       url: 'www.petz.com.br/produto/super-secao-tapete-higienico-para-cachorro-71630',
//       token: 'produto/super-secao-tapete-higienico-para-cachorro-71630',
//       thumbnail: 'https://static.petz.com.br/fotos/1611150244527_mini.jpg',
//       price: 26.9,
//       priceForSubs: 24.21,
//       pencentualDiscountForSubs: 10,
//       rating: 3.4210526943206787,
//       has_variations: true,
//       currency: 'R$',
//       brand: 'Supersecão',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10031181000162',
//       barcode: '7899548500034',
//       name: 'Tapete Higiênico Expet Blue Premium Para Cães',
//       url: 'www.petz.com.br/produto/tapete-higienico-expet-blue-premium-para-caes-96817',
//       token: 'produto/tapete-higienico-expet-blue-premium-para-caes-96817',
//       thumbnail: 'https://static.petz.com.br/fotos/1600875911501_mini.jpg',
//       price: 78.9,
//       priceForSubs: 71.01,
//       pencentualDiscountForSubs: 10,
//       rating: 3.545454502105713,
//       has_variations: false,
//       currency: 'R$',
//       brand: 'Expet',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10031200000045',
//       barcode: '7898019865948',
//       name: 'Herbalvet Desinfetante Ourofino T.A',
//       url: 'www.petz.com.br/produto/herbalvet-desinfetante-ourofino-ta-77190',
//       token: 'produto/herbalvet-desinfetante-ourofino-ta-77190',
//       thumbnail: 'https://static.petz.com.br/fotos/1619814047610_mini.jpg',
//       price: 100.99,
//       priceForSubs: 90.89099999999999,
//       pencentualDiscountForSubs: 10,
//       rating: 5,
//       has_variations: true,
//       currency: 'R$',
//       brand: 'Ourofino',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10031200000079',
//       barcode: '7898904628795',
//       name: 'Refil Sacolinha Chalesco para Cães - Cores Sortidas',
//       url: 'www.petz.com.br/produto/refil-sacolinha-chalesco-para-caes-cores-sortidas-72564',
//       token: 'produto/refil-sacolinha-chalesco-para-caes-cores-sortidas-72564',
//       thumbnail: 'https://static.petz.com.br/fotos/1569599149343_mini.jpg',
//       price: 25.99,
//       priceForSubs: 23.391,
//       pencentualDiscountForSubs: 10,
//       ratingAmount: 1,
//       rating: 5,
//       has_variations: false,
//       currency: 'R$',
//       brand: 'Chalesco',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//     {
//       sku: '10031200000267',
//       barcode: '7898936111845',
//       name: 'Toalhas Umedecidas Petz para Cães e Gatos',
//       url: 'www.petz.com.br/produto/toalhas-umedecidas-petz-para-caes-e-gatos-50un-147686',
//       token: 'produto/toalhas-umedecidas-petz-para-caes-e-gatos-50un-147686',
//       thumbnail: 'https://static.petz.com.br/fotos/1621452683528_mini.jpg',
//       price: 18.99,
//       priceForSubs: 17.090999999999998,
//       pencentualDiscountForSubs: 10,
//       rating: 5,
//       has_variations: true,
//       currency: 'R$',
//       brand: 'Petz',
//       availability: 'in_stock',
//       totalStock: 100,
//       hideSubscriberDiscountPrice: false,
//     },
//   ],
// };

// export const categoryList = [
//   'Sugestão do Vendedor',
//   'Brinquedos',
//   'Camas e Casinhas',
//   'Coleiras',
//   'Ossos e Petiscos',
//   'Saúde',
// ];

// // export default data;

// console.log(JSON.stringify(data));
