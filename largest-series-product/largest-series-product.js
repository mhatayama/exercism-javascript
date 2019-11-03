export const largestProduct = (digits, num) => {
  if (num < 0 || digits.match(/\D/)) throw new Error('Invalid input.')
  if (digits.length < num) throw new Error('Slice size is too big.')
  if (num === 0) return 1
  return Math.max(...Array(digits.length - num + 1).fill().map((_, i) =>
    [...digits.slice(i, i + num)].reduce((acc, cur) => acc * parseInt(cur), 1)))
}
