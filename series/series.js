export class Series {
  constructor(series) {
    this._digits = [...series].map(i => parseInt(i))
  }

  get digits() {
    return this._digits
  }

  slices(num) {
    if (this._digits.length < num) {
      throw new Error('Slice size is too big.')
    }
    return [...Array(this._digits.length - num + 1).keys()].map(i =>
      this._digits.slice(i, i + num))
  }
}
