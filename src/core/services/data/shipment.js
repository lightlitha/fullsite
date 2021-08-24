import { getRandomInt, RandomDateBetween } from '@/core/utils/misc'
import { PersonNames } from './faker'

export function ShipmentBrowse () {
  const shipments = []
  for (let i = 0; i < 20; i++) {
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

export function ShipmentRaed () {
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
