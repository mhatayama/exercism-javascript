export const transform = (old) =>
  Object.keys(old)
  .map(s => old[s].map(a => [a.toLowerCase(), parseInt(s)]))
  .flat()
  .reduce((acc, cur) => {
    acc[cur[0]] = cur[1]; return acc
  }, {})
