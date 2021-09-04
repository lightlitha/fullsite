import { CurrentCurrency } from './currency'
import { randomCharacters, getRandomInt } from '@/core/utils/misc'
import { Products } from './faker'

export function ProductBrowse () {
  const products = []
  const currency = CurrentCurrency()
  for (let i = 0; i < Products.length; i++) {
    products.push({
      product_no: '#00' + Products[i].id,
      sku: randomCharacters(5),
      name: Products[i].name,
      attribute_family: 'Default',
      type: ProductType()[getRandomInt(1, 4)].name,
      status: 'Active',
      qty: getRandomInt(0, 100),
      price: currency.symbol + ' ' + Products[i].price,
    })
  }
  return products
}

export function ProductType () {
  return [
    {
      name: 'Simple',
    },
    {
      name: 'Booking',
    },
    {
      name: 'Virtual',
    },
    {
      name: 'Download',
    },
    {
      name: 'Rental',
    },
  ]
}

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
      qty: Math.floor(Math.random() * (5 - 1 + 1) + 1),
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
