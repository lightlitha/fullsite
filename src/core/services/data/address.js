import { randomCharacters, getRandomInt } from '@/core/utils/misc'

export function BillingAddressBrowse () {
  const address = []
  for (let i = 0; i < 4; i++) {
    address.push({
      line1: randomCharacters(15),
      line2: randomCharacters(15),
      suburb: randomCharacters(10),
      city: randomCharacters(8),
      zipcode: getRandomInt(1000, 9999),
      country: randomCharacters(15),
      phone:
        '+27 ' +
        Math.floor(Math.random() * (999999999 - 100000000 + 1) + 100000000),
    })
  }

  return address
}

export function BillingAddressRead () {
  const address = []
  for (let i = 0; i < 1; i++) {
    address.push({
      line1: randomCharacters(15),
      line2: randomCharacters(15),
      suburb: randomCharacters(10),
      city: randomCharacters(8),
      zipcode: getRandomInt(1000, 9999),
      country: randomCharacters(15),
      phone:
        '+27 ' +
        Math.floor(Math.random() * (999999999 - 100000000 + 1) + 100000000),
    })
  }

  return address
}

export function ShippingAddressBrowse () {
  const address = []
  for (let i = 0; i < 4; i++) {
    address.push({
      line1: randomCharacters(15),
      line2: randomCharacters(15),
      suburb: randomCharacters(10),
      city: randomCharacters(8),
      zipcode: getRandomInt(1000, 9999),
      country: randomCharacters(15),
      phone:
        '+27 ' +
        Math.floor(Math.random() * (999999999 - 100000000 + 1) + 100000000),
    })
  }

  return address
}

export function ShippingAddressRead () {
  const address = []
  for (let i = 0; i < 1; i++) {
    address.push({
      line1: randomCharacters(15),
      line2: randomCharacters(15),
      suburb: randomCharacters(10),
      city: randomCharacters(8),
      zipcode: getRandomInt(1000, 9999),
      country: randomCharacters(15),
      phone:
        '+27 ' +
        Math.floor(Math.random() * (999999999 - 100000000 + 1) + 100000000),
    })
  }

  return address
}
