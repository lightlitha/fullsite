import { PersonNames } from './faker'
import { RandomDateBetween } from '@/core/utils/misc'

export function CustomersGroup () {
  return [
    {
      id: '1',
      code: 'Wholesale',
      name: 'Wholesale',
    },
    {
      id: '2',
      code: 'General',
      name: 'General',
    },
    {
      id: '3',
      code: 'Guest',
      name: 'Guest',
    },
  ]
}

export function CustomersBrowse () {
  const customers = []
  for (let i = 0; i < 20; i++) {
    customers.push({
      first_name: PersonNames[Math.floor(Math.random() * PersonNames.length)],
      last_name: PersonNames[Math.floor(Math.random() * PersonNames.length)],
      email: 'example@email.com',
      dob: RandomDateBetween(new Date(1979, 0, 1), new Date(2003, 0, 1)),
      phone:
        '+27 ' +
        Math.floor(Math.random() * (999999999 - 100000000 + 1) + 100000000),
      group: 'Guest',
    })
  }

  return customers
}

export function CustomersRead () {
  const customers = []
  for (let i = 0; i < 1; i++) {
    customers.push({
      first_name: PersonNames[Math.floor(Math.random() * PersonNames.length)],
      last_name: PersonNames[Math.floor(Math.random() * PersonNames.length)],
      email: 'example@email.com',
      dob: RandomDateBetween(new Date(1979, 0, 1), new Date(2003, 0, 1)),
      phone:
        '+27 ' +
        Math.floor(Math.random() * (999999999 - 100000000 + 1) + 100000000),
      group: 'Guest',
    })
  }

  return customers
}
