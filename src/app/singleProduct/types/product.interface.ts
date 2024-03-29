export interface ProductInterface {
  _id?: string;
  name: string;
  price: number;
  description: string;
  image?: string;
  category: string;
  company: string;
  colors?: string[];
  featured?: boolean;
  freeShipping?: boolean;
  inventory?: number;
  averageRating?: number;
  numOfReviews?: number;
  user: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  id?: string;
  reviews?: object[];
}
