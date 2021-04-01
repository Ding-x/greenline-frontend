import { Product } from '../models/product'

export function ccyFormat(num: number) {
  return `${num.toFixed(2)}`
}

export function priceRow(qty: number, unit: number) {
  return qty * unit
}

export function discountRow(product: Product, qty: number, unit: number) {
  const q = qty > 0 ? qty : 0

  switch (product) {
    case Product.Grape:
      return {
        discountDesc: 'Buy One Get One Free',
        discount: unit * Math.ceil(q / 2),
      }
    case Product.Apple:
      return {
        discountDesc: '20% Off Over Two',
        discount: q > 1 ? q * unit * 0.8 : q * unit,
      }
    default:
      return {
        discountDesc: 'N/A',
        discount: q * unit,
      }
  }
}

export function total(items: { discount: number }[]) {
  return items
    .map(({ discount }) => discount)
    .reduce((sum: number, i: number) => sum + i, 0)
}

export function createProductRow(product: Product, qty: number, unit: number) {
  const price = priceRow(qty, unit)
  const { discountDesc, discount } = discountRow(product, qty, unit)
  return { product, qty, unit, price, discountDesc, discount }
}

export function initialProcuts() {
  const products = [
    {
      product: Product.Grape,
      qty: 1,
      unit: 5,
    },
    {
      product: Product.Apple,
      qty: 1,
      unit: 3,
    },
    {
      product: Product.Peach,
      qty: 1,
      unit: 7,
    },
  ]
  return products.map((item) =>
    createProductRow(item.product, item.qty, item.unit)
  )
}
