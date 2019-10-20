export const encode = (orig) => 
  orig.replace(/(\D)\1+/g, (m, p1) => `${m.length}${p1}`)

export const decode = (orig) =>
  orig.replace(/(\d+)(\D)/g, (m, p1, p2) => p2.repeat(p1))
