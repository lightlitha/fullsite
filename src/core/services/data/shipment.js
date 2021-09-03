import { CurrentCurrency } from './currency'
import { getRandomInt, RandomDateBetween } from '@/core/utils/misc'
import { PersonNames } from './faker'

const currency = CurrentCurrency()

export function ShipmentBrowse () {
  const shipments = []
  for (let i = 0; i < 20; i++) {
    shipments.push({
      shipment_no: '#00' + (i + 1),
      order_no: '#00' + (i + 1) * getRandomInt(1, 50),
      qty: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      inventory_source: 'Default',
      order_date: RandomDateBetween(new Date(2020, 0, 1), new Date()),
      carrier_title:
        PersonNames[Math.floor(Math.random() * PersonNames.length)],
      tracking_no: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
      shipment_date: RandomDateBetween(new Date(2020, 0, 1), new Date()),
      shipping_to: PersonNames[Math.floor(Math.random() * PersonNames.length)],
      shipping_price:
        currency.symbol +
        ' ' +
        Math.floor(Math.random() * (1000 - 100 + 1) + 100),
      shipping_method: 'Flat Rate - Flat Rate',
    })
  }

  return shipments
}

export function ShipmentRead () {
  const shipments = []
  for (let i = 0; i < 1; i++) {
    shipments.push({
      shipment_no: '#00' + (i + 1),
      shipment_date: RandomDateBetween(new Date(2020, 0, 1), new Date()),
      shipping_to: PersonNames[Math.floor(Math.random() * PersonNames.length)],
      order_no: '#00' + (i + 1) * getRandomInt(1, 50),
      inventory_source: 'Default',
      order_date: RandomDateBetween(new Date(2020, 0, 1), new Date()),
      carrier_title:
        PersonNames[Math.floor(Math.random() * PersonNames.length)],
      tracking_no: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
      qty: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      shipping_price:
        currency.symbol +
        ' ' +
        Math.floor(Math.random() * (1000 - 100 + 1) + 100),
      shipping_method: 'Flat Rate - Flat Rate',
    })
  }

  return shipments
}

export function ShipmentByOrder () {
  const shipments = []
  for (let i = 0; i < 1; i++) {
    shipments.push({
      shipment_no: '#00' + (i + 1),
      shipment_date: RandomDateBetween(new Date(2020, 0, 1), new Date()),
      order_no: '#00' + (i + 1) * getRandomInt(1, 50),
      carrier_title:
        PersonNames[Math.floor(Math.random() * PersonNames.length)],
      tracking_no: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
      qty: Math.floor(Math.random() * (5 - 1 + 1) + 1),
    })
  }

  return shipments
}
