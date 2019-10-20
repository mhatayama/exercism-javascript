export class Squares {
  constructor(num) {
    this.nums = [...Array(num).keys()].map(i => i+1)
  }

  get sumOfSquares() {
    let squares = this.nums.map(i => Math.pow(i, 2))
    return squares.reduce((sum, i) => sum + i, 0)
  }

  get squareOfSum() {
    let sum = this.nums.reduce((sum, i) => sum + i, 0)
    return Math.pow(sum, 2)
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}
