export const compute = (left, right) => {
  if (!left && right) {
    throw new Error('left strand must not be empty')
  } else if (left && !right) {
    throw new Error('right strand must not be empty')
  } else if (left.length !== right.length) {
    throw new Error('left and right strands must be of equal length')
  }

  return [...left].reduce((acc, cur, idx) => 
    cur === right[idx] ? acc : acc + 1
  , 0)
}
