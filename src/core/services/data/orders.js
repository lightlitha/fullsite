import { RandomDateBetween, StatusOne } from '@/core/utils/misc'
import { CurrentCurrency } from './currency'

export function OrdersBrowse () {
  const orders = []
  const currency = CurrentCurrency()
  for (let i = 0; i < 20; i++) {
    orders.push({
      order_no: '#00' + (i + 1),
      grand_total:
        currency.symbol +
        ' ' +
        Math.floor(Math.random() * (1000 - 100 + 1) + 100),
      order_date: RandomDateBetween(new Date(2020, 0, 1), new Date()),
      order_channel: 'Default',
      status: StatusOne(),
    })
  }

  return orders
}

export function OrdersRead (id = '') {
  const orders = []
  const currency = CurrentCurrency()
  for (let i = 0; i < 1; i++) {
    orders.push({
      order: '#00' + (i + 1),
      total:
        currency.symbol +
        ' ' +
        Math.floor(Math.random() * (1000 - 100 + 1) + 100),
      date: RandomDateBetween(new Date(2020, 0, 1), new Date()),
      channel: 'Default',
      status: StatusOne(),
    })
  }

  return orders
}
