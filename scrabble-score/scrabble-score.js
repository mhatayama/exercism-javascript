const VALUES = {
  'AEIOULNRST': 1, 'DG': 2, 'BCMP': 3,
  'FHVWY': 4, 'K': 5, 'JX': 8, 'QZ': 10
}

export const score = (word) =>
  [...word.toUpperCase()].map(x =>
    Object.keys(VALUES).map(k => k.includes(x) ? VALUES[k] : 0
    )).flat().reduce((sum, val) => sum + val, 0)
