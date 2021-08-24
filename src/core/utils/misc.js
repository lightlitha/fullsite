export function StatusOne () {
  let status = ''
  const check = getRandomInt(0, 3)
  switch (check) {
    case 0:
      status = 'Pending'
      break
    case 1:
      status = 'Processing'
      break
    case 2:
      status = 'Success'
      break
    case 3:
      status = 'Failed'
      break
  }
  return status
}

export function StatusTwo () {
  let status = ''
  const check = getRandomInt(0, 2)
  switch (check) {
    case 0:
      status = 'Paid'
      break
    case 1:
      status = 'Processing'
      break
    case 2:
      status = 'Not Paid'
      break
  }
  return status
}

export function RandomDateBetween (start, end, startHour = 0, endHour = 23) {
  var date = new Date(+start + Math.random() * (end - start))
  var hour = (startHour + Math.random() * (endHour - startHour)) | 0
  date.setHours(hour)

  return date.toLocaleString()
}

export function randomCharacters (length) {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
