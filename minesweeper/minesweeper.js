export const annotate = (input) => {
  const grid = input.map(r => [...r])
  return grid.map((r, y) =>
    r.map((_, x) => calc(y, x, grid)).join('')
  )
}

const calc = (y, x, grid) => {
  if (grid[y][x] === '*') return '*'
  let cnt = 0
  for (let i = y - 1; i <= y + 1; i++) {
    for (let j = x - 1; j <= x + 1; j++) {
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) continue
      if (grid[i][j] === '*') cnt = cnt + 1
    }
  }
  return cnt === 0 ? ' ' : cnt.toString()
}