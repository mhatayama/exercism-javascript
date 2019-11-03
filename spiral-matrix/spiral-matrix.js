export class SpiralMatrix {
  static ofSize(size) {
    let matrix = Array(size).fill().map(a => Array(size).fill())
    let cnt = 1
    for (let i = 0; i < Math.floor((size + 1) / 2); i++)
      cnt = drawSquare(matrix, size - i * 2, cnt, i)
    return matrix
  }
}

const drawSquare = (matrix, num, cnt, nest) => {
  for (let i = 0; i < num; i++)
    matrix[nest][i + nest] = cnt++
  if (num === 1) return
  for (let i = 0; i < num - 2; i++)
    matrix[1 + i + nest][num - 1 + nest] = cnt++
  for (let i = 0; i < num; i++)
    matrix[num - 1 + nest][num - 1 - i + nest] = cnt++
  for (let i = 0; i < num - 2; i++)
    matrix[num - 2 - i + nest][nest] = cnt++
  return cnt
}
