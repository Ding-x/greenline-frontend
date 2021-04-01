export interface ProductRow {
  product: Product
  qty: number
  unit: number
  price: number
  discountDesc: string
  discount: number
}

export enum Product {
  Grape = 'Grapes (Bag)',
  Apple = 'Apple (Each)',
  Peach = 'Peach (Each)',
}
