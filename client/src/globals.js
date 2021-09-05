export const API_BASE_URI =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'

export const convertDateToString = (date) => {
  const D = new Date(date)
  const dateString = D.toDateString().substring(4)
  return dateString
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getDuration = (firstDate, secondDate) => {
  const date1 = new Date(firstDate)
  const date2 = new Date(secondDate)
  const rawDuration =
    (date1.getTime() - date2.getTime()) / 1000 / (60 * 60 * 24 * 7 * 4)
  return Math.abs(Math.round(rawDuration))
}

export const calculatePrice = (duration, flightClass) => {
  let price = 2000000
  if (flightClass === 'first') {
    price = duration * 500000
  } else if (flightClass === 'business') {
    price = duration * 400000
  } else if (flightClass === 'economy') {
    price = duration * 300000
  }
  return price
}

export const formatPrice = (duration, flightClass) => {
  const price = calculatePrice(duration, flightClass) / 1000000
  return `$ ${price}M`
}
