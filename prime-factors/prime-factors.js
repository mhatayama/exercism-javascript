export const primeFactors = (num) => {
  let factors = []
  let divider = 2
  for (let dividend = num; dividend !== 1;) {
    if (dividend % divider === 0) {
      factors.push(divider)
      dividend /= divider
    } else {
      divider += 1
    }
  }
  return factors
}