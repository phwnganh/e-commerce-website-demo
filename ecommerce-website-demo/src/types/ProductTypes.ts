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
  availabilityStatus: string
  meta: {
    createdAt: string;
    updatedAt: string;
  };
};
