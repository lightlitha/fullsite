import { CurrentCurrency } from './currency'

export function PurchaseOrdered () {
  const currency = CurrentCurrency()
  return {
    subtotal:
      currency.symbol +
      ' ' +
      Math.floor(Math.random() * (5000 - 1000 + 1) + 100),
    shipping:
      currency.symbol +
      ' ' +
      Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    discount:
      currency.symbol +
      ' ' +
      Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    tax:
      currency.symbol +
      ' ' +
      Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    total:
      currency.symbol +
      ' ' +
      Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    paid:
      currency.symbol +
      ' ' +
      Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    refunded:
      currency.symbol +
      ' ' +
      Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    due:
      currency.symbol +
      ' ' +
      Math.floor(Math.random() * (1000 - 100 + 1) + 100),
  }
}
