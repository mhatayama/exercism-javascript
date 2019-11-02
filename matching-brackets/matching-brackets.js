export const matchingBrackets = (str) => {
  return [...str].reduce((acc, cur) => {
    if ('{[('.indexOf(cur) < 0
      && acc[acc.length - 1] === '{[('['}])'.indexOf(cur)]) acc.pop()
    else acc.push(cur)
    return acc
  }, []).length === 0
}
