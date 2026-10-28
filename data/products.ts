
export type Product = {
  id: number;
  title: string;
  image: string;
  images?: string[];
  category: number;
  price: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Loft Style Chair",
    image:
      "https://cozylant.com/cdn/shop/files/thor_oak_wood_chair_natural_wood_white_background.jpg?v=1751676247&width=416",
    category: 1,
    price: "$ 20.00",
  },
  {
    id: 2,
    title: "Wood Mini Table",
    image:
      "https://www.pastform.com/cdn/shop/files/stolik-kawowy-manumidcenturyvintageretrolata60-587165.jpg?v=1768473110&width=2048",
    category: 2,
    price: "$ 25.00",
  },
  {
    id: 3,
    title: "Luxe Yellow Armchair",
    image:
      "https://siman.vtexassets.com/arquivos/ids/6838709-800-auto?aspect=true&height=auto&v=638814600544800000&width=800",
    category: 3,
    price: "$ 45.00",
  },
  {
    id: 4,
    title: "Cozy Armchair",
    image:
      "https://media.landmarkshops.in/cdn-cgi/image/h%3D1200%2Cw%3D1200%2Cq%3D85%2Cfit%3Dcover/homecentre/1000014171576-1000014171575_01-2100.jpg",
    category: 3,
    price: "$ 80.00",
  },
  {
    id: 5,
    title: "Velvet Sofa",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85",
      "https://d1hy6t2xeg0mdl.cloudfront.net/image/386796/a25152bbaa/700-width",
      "https://hips.hearstapps.com/hmg-prod/images/wayfair-way-day-sale-2022-1650663516.png?resize=900:*",
    ],
    category: 4,
    price: "$ 120.00",
  },
];
