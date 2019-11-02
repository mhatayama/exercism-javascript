export const solve = (x, y) => {
  let radius = Math.sqrt(x ** 2 + y ** 2)
  if (radius > 10) return 0
  if (radius > 5) return 1
  if (radius > 1) return 5
  return 10
}
