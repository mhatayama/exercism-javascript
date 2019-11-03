export class Palindromes {
  static generate({ maxFactor: maxFactor, minFactor: minFactor }) {
    if (maxFactor < minFactor) throw new Error('min must be <= max')
    let smallestValue = null, largestValue = null
    let smallestFactors = [], largestFactors = []
    for (let i = minFactor; i <= maxFactor; i++)
      for (let j = i; j <= maxFactor; j++) {
        const prod = i * j
        if (prod > smallestValue && prod < largestValue) continue
        if (!isPalindrome(prod)) continue
        if (smallestValue > prod || !smallestValue) {
          smallestValue = prod
          smallestFactors = [[i, j]]
        } else if (smallestValue === prod) {
          smallestFactors.push([i, j])
        }
        if (largestValue < prod || !largestValue) {
          largestValue = prod
          largestFactors = [[i, j]]
        } else if (largestValue === prod) {
          largestFactors.push([i, j])
        }
      }

    return {
      smallest: { value: smallestValue, factors: smallestFactors },
      largest: { value: largestValue, factors: largestFactors }
    }
  }
}

const isPalindrome = (num) =>
  num.toString() === [...num.toString()].reverse().join('')
