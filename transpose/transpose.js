export const transpose = (input) => {
  if (input.length === 0) return []
  let maxlen = Math.max(...input.map(col => col.length))
  let result = [...Array(maxlen)]
    .map((_, i) => input.map(row => row[i] || ' ').join(''))
  return [...result.slice(0, -1), result[maxlen - 1].trimRight()]
}
