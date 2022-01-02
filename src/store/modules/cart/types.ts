export interface Product {
  id: number;
  title: string;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[]
}