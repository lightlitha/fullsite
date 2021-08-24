export function Currency () {
  return [
    {
      code: 'ZAR',
      name: 'Rand',
      symbol: 'R',
      used: true,
    },
    {
      code: 'USD',
      name: 'Dollar',
      symbol: '$',
      used: false,
    },
  ]
}

export function CurrentCurrency () {
  return {
    code: 'ZAR',
    name: 'Rand',
    symbol: 'R',
    used: true,
  }
}
