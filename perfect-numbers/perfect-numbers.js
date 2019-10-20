export const classify = (num) => {
  if (num < 1) {
    throw new Error('Classification is only possible for natural numbers.')
  }

  let factors = [...Array(parseInt(num / 2)).keys()]
    .map(i => i + 1).filter(i => num % i === 0)
  let aliquotSum = factors.reduce((sum, i) => sum + i, 0)
  if (aliquotSum === num) {
    return 'perfect'
  }
  return aliquotSum > num ? 'abundant' : 'deficient'
}