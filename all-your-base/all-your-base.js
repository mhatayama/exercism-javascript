export const convert = (digits, inputBase, outputBase) => {
  if (inputBase < 2 || inputBase !== Math.floor(inputBase))
    throw new Error('Wrong input base')
  if (outputBase < 2 || outputBase !== Math.floor(outputBase))
    throw new Error('Wrong output base')
  if (digits.length === 0 || (digits.length > 1 && digits[0] === 0)
    || digits.some(n => n < 0 || n >= inputBase)) {
    throw new Error('Input has wrong format')
  }

  let base10 = digits.reduce((sum, d) => sum * inputBase + d)
  let result = []
  do {
    result.push(base10 % outputBase)
    base10 = Math.floor(base10 / outputBase);
  } while (base10 > 0)
  return result.reverse()
}
