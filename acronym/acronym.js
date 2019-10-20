export const parse = (sentence) =>
  sentence.split(/[\s\-\_]/).map(w => w[0]).join('').toUpperCase()
