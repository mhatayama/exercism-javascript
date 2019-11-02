export class Triangle {
  constructor(...sides) {
    this.sides = sides.sort((a, b) => a - b)
  }

  kind() {
    if (this.sides[0] <= 0 || this.sides[0] + this.sides[1] < this.sides[2]) {
      throw new Error('illegal')
    } else if (this.sides[0] == this.sides[1] && this.sides[1] == this.sides[2]) {
      return 'equilateral'
    } else if (this.sides[0] == this.sides[1] || this.sides[1] == this.sides[2]) {
      return 'isosceles'
    }
    return 'scalene'
  }
}
