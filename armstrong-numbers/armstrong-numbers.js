export const validate = (num) => {
  return num === [...num.toString()].reduce((acc, cur, idx, ary) =>
    acc + Math.pow(cur, ary.length), 0)
}
