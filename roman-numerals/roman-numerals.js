const romanDigit = (digit, one, five, ten) => {
  if (digit === 0) return ''
  if (digit === 1) return one
  if (digit === 2) return one + one
  if (digit === 3) return one + one + one
  if (digit === 4) return one + five
  if (digit === 5) return five
  if (digit === 6) return five + one
  if (digit === 7) return five + one + one
  if (digit === 8) return five + one + one + one
  if (digit === 9) return one + ten 
}

export const toRoman = (num) =>
  [].concat(romanDigit(parseInt(num / 1000)    , 'M', '_', '_'))
    .concat(romanDigit(parseInt(num / 100) % 10, 'C', 'D', 'M'))
    .concat(romanDigit(parseInt(num / 10) % 10 , 'X', 'L', 'C'))
    .concat(romanDigit(num % 10                , 'I', 'V', 'X'))
    .join('')
