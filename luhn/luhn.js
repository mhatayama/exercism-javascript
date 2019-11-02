export class Luhn {
  constructor(input) {
    this.input = input
  }

  get valid() {
    const stripped = this.input.replace(/ /g, '')
    if (stripped.match(/\D/) || stripped.length < 2) return false
    const sum = [...stripped].reverse().reduce((acc, cur, idx) => {
      cur = parseInt(cur)
      if (idx % 2 === 1) {
        cur = cur >= 5 ? cur * 2 - 9 : cur * 2
      }
      return acc + cur
    }, 0)
    return sum % 10 === 0
  }
}
