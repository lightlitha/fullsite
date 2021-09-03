import { getRandomInt, RandomDateBetween, StatusTwo } from '@/core/utils/misc'
import { CurrentCurrency } from './currency'
import { PersonNames } from './faker'

export function RefundBrowse () {
  const refunds = []
  const currency = CurrentCurrency()
  for (let i = 0; i < 20; i++) {
    refunds.push({
      refund_no: '#00' + (i + 1),
      refund_date: RandomDateBetween(new Date(2020, 0, 1), new Date()),
      order_no: '#00' + (i + 1) * getRandomInt(1, 50),
      customer:
        PersonNames[Math.floor(Math.random() * PersonNames.length)] +
        ' ' +
        PersonNames[Math.floor(Math.random() * PersonNames.length)],
      status: StatusTwo(),
      refunded:
        currency.symbol +
        ' ' +
        Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    })
  }

  return refunds
}

export function RefundRead () {
  const refunds = []
  const currency = CurrentCurrency()
  for (let i = 0; i < 1; i++) {
    refunds.push({
      refund_no: '#00' + (i + 1),
      refund_date: RandomDateBetween(new Date(2020, 0, 1), new Date()),
      order_no: '#00' + (i + 1) * getRandomInt(1, 50),
      customer:
        PersonNames[Math.floor(Math.random() * PersonNames.length)] +
        ' ' +
        PersonNames[Math.floor(Math.random() * PersonNames.length)],
      status: StatusTwo(),
      refunded:
        currency.symbol +
        ' ' +
        Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    })
  }

  return refunds
}

export function RefundByOrder () {
  const refunds = []
  const currency = CurrentCurrency()
  for (let i = 0; i < 1; i++) {
    refunds.push({
      refund_no: '#00' + (i + 1),
      refund_date: RandomDateBetween(new Date(2020, 0, 1), new Date()),
      order_no: '#00' + (i + 1) * getRandomInt(1, 50),
      customer:
        PersonNames[Math.floor(Math.random() * PersonNames.length)] +
        ' ' +
        PersonNames[Math.floor(Math.random() * PersonNames.length)],
      status: StatusTwo(),
      refunded:
        currency.symbol +
        ' ' +
        Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    })
  }

  return refunds
}
