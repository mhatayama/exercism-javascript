export const steps = (num) => {
  if (num <= 0) {
    throw new Error('Only positive numbers are allowed')
  }

  for (var cnt = 0; num != 1; cnt++) {
    num = num % 2 == 0 ? num / 2 : num * 3 + 1
  }

  return cnt
}
