export type Product = {
  id: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  images: string[];
  thumbnail: string;
  availabilityStatus: string;
  meta: {
    createdAt: string;
    updatedAt: string;
  };
};

export type ProductsResponse = {
  products: Product[]
}

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
  thumbnail: string;
};

export type Cart = {
  id: string;
  total: number;
  discountTotal: number;
  products: CartItem[];
};
