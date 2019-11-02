export class Rectangles {
  static count(lines) {
    let count = 0
    const diagram = lines.map(r => [...r])
    if (diagram.length === 0) return count

    const allCorners = getAllCorners(diagram)
    allCorners.forEach(from => {
      allCorners.forEach(to => {
        if (from.x >= to.x || from.y >= to.y) return
        if (diagram[from.y][to.x] !== '+' || diagram[to.y][from.x] !== '+') return
        if (isInvalidHorizontalLine(diagram, from, { x: to.x, y: from.y })) return
        if (isInvalidVerticalLine(diagram, from, { x: from.x, y: to.y })) return
        if (isInvalidHorizontalLine(diagram, { x: from.x, y: to.y }, to)) return
        if (isInvalidVerticalLine(diagram, { x: to.x, y: from.y }, to)) return
        count++
      })
    })
    return count
  }
}

const getAllCorners = (diagram) => {
  const corners = []
  for (let _x = 0; _x < diagram[0].length; _x++)
    for (let _y = 0; _y < diagram.length; _y++)
      if (diagram[_y][_x] === '+') corners.push({ x: _x, y: _y })
  return corners
}

const isInvalidHorizontalLine = (diagram, from, to) => {
  if (from.y !== to.y) return false
  for (let i = from.x; i <= to.x; i++)
    if ([' ', '|'].includes(diagram[from.y][i])) return true
  return false
}

const isInvalidVerticalLine = (diagram, from, to) => {
  if (from.x !== to.x) return false
  for (let i = from.y; i <= to.y; i++)
    if ([' ', '-'].includes(diagram[i][from.x])) return true
  return false
}