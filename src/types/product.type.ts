export type Products = {
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
  products: Products[]
}

export type CartItems = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
  thumbnail: string;
};

export type Carts = {
  id: string;
  total: number;
  discountTotal: number;
  products: CartItems[];
};
