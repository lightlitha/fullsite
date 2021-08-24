import { CurrentCurrency } from './currency'
import { randomCharacters, getRandomInt } from '@/core/utils/misc'

export function ProductsOrdered () {
  const products = []
  const currency = CurrentCurrency()
  for (let i = 0; i < 4; i++) {
    products.push({
      sku: randomCharacters(5),
      name: randomCharacters(10),
      price:
        currency.symbol +
        ' ' +
        Math.floor(Math.random() * (1000 - 100 + 1) + 100),
      status: 'invoiced(1) ordered(1)',
      subtotal:
        currency.symbol +
        ' ' +
        Math.floor(Math.random() * (1000 - 100 + 1) + 100),
      tax_percent: getRandomInt(1, 15) + ' %',
      tax_amount:
        currency.symbol +
        ' ' +
        Math.floor(Math.random() * (1000 - 100 + 1) + 100),
      discount:
        currency.symbol +
        ' ' +
        Math.floor(Math.random() * (1000 - 100 + 1) + 100),
      total:
        currency.symbol +
        ' ' +
        Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    })
  }

  return products
}
