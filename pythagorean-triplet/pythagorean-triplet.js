export class Triplet {
  constructor(a, b, c) {
    [this.a, this.b, this.c] = [a, b, c]
  }

  sum() {
    return this.a + this.b + this.c
  }

  product() {
    return this.a * this.b * this.c
  }

  isPythagorean() {
    return this.a ** 2 + this.b ** 2 === this.c ** 2
  }

  static where(options = {}) {
    options.minFactor = options.minFactor || 1
    const triplets = []
    for (let a = options.minFactor; a <= options.maxFactor - 2; a++) {
      for (let b = a + 1; b <= options.maxFactor - 1; b++) {
        for (let c = b + 1; c <= options.maxFactor; c++) {
          if (a >= b || b >= c || a >= c) continue
          const triplet = new Triplet(a, b, c)
          if (options.sum && triplet.sum() !== options.sum) continue
          if (triplet.isPythagorean()) triplets.push(triplet)
        }
      }
    }
    return triplets
  }
}
