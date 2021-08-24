import { getRandomInt, RandomDateBetween, StatusTwo } from '@/core/utils/misc'
import { CurrentCurrency } from './currency'
import { PersonNames } from './faker'

export function InvoiceBrowse () {
  const invoices = []
  const currency = CurrentCurrency()
  for (let i = 0; i < 20; i++) {
    invoices.push({
      invoice_no: '#00' + (i + 1),
      invoice_date: RandomDateBetween(new Date(2020, 0, 1), new Date()),
      order_no: '#00' + (i + 1) * getRandomInt(1, 50),
      customer:
        PersonNames[Math.floor(Math.random() * PersonNames.length)] +
        ' ' +
        PersonNames[Math.floor(Math.random() * PersonNames.length)],
      status: StatusTwo(),
      amount:
        currency.symbol +
        ' ' +
        Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    })
  }

  return invoices
}

export function InvoiceRaed () {
  const invoices = []
  const currency = CurrentCurrency()
  for (let i = 0; i < 1; i++) {
    invoices.push({
      invoice_no: '#00' + (i + 1),
      invoice_date: RandomDateBetween(new Date(2020, 0, 1), new Date()),
      order_no: '#00' + (i + 1) * getRandomInt(1, 50),
      customer:
        PersonNames[Math.floor(Math.random() * PersonNames.length)] +
        ' ' +
        PersonNames[Math.floor(Math.random() * PersonNames.length)],
      status: StatusTwo(),
      amount:
        currency.symbol +
        ' ' +
        Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    })
  }

  return invoices
}

export function InvoiceByOrder () {
  const invoices = []
  const currency = CurrentCurrency()
  for (let i = 0; i < 1; i++) {
    invoices.push({
      invoice_no: '#00' + (i + 1),
      invoice_date: RandomDateBetween(new Date(2020, 0, 1), new Date()),
      order_no: '#00' + (i + 1) * getRandomInt(1, 50),
      customer:
        PersonNames[Math.floor(Math.random() * PersonNames.length)] +
        ' ' +
        PersonNames[Math.floor(Math.random() * PersonNames.length)],
      status: StatusTwo(),
      amount:
        currency.symbol +
        ' ' +
        Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    })
  }

  return invoices
}
