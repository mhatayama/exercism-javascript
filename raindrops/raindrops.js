const FACTORS = {3: 'Pling', 5: 'Plang', 7:'Plong'}

export const convert = (num) => {
  return Object.keys(FACTORS).filter(n => num % n === 0)
    .reduce((acc, cur) => acc.concat(FACTORS[cur])
    , []).join('') || num.toString()
}