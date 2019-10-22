export const DAYS_OF_WEEK =
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const DESCRIPTORS =
  { 'teenth': 13, '1st': 1, '2nd': 8, '3rd': 15, '4th': 22, '5th': 29 }

export const getDaysOfMonth = (year, month) =>
  [...Array(31).keys()].map(i =>
    new Date(year, month, i + 1)).filter(d => d.getMonth() === month)

export const meetupDay = (year, month, day, descriptor) => {
  const dayOfWeek = DAYS_OF_WEEK.indexOf(day)
  const daysOfMonth = getDaysOfMonth(year, month)
  if (DESCRIPTORS.hasOwnProperty(descriptor)) {
    let fromDate = DESCRIPTORS[descriptor]
    let result = daysOfMonth.find(d =>
      d.getDate() >= fromDate && d.getDate() <= fromDate + 7 && d.getDay() === dayOfWeek)
    if (!result) throw new Error("Invalid")
    return result
  } else if (descriptor === 'last') {
    return daysOfMonth.reverse().find(d => d.getDay() === dayOfWeek)
  }
}
