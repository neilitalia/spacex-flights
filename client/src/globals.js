export const API_BASE_URI = 'http://localhost:3001/api'

export const convertDateToString = (date) => {
  const D = new Date(date)
  const dateString = D.toDateString().substring(4)
  return dateString
}

export const getDuration = (firstDate, seconDate) => {
  const date1 = new Date(firstDate)
  const date2 = new Date(seconDate)
  const rawDuration =
    (date1.getTime() - date2.getTime()) / 1000 / (60 * 60 * 24 * 7 * 4)
  return `${Math.abs(Math.round(rawDuration))} months`
}
