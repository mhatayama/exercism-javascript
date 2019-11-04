export class Matrix {
  constructor(text) {
    this.rows = text.split('\n').map(x => x.trim().split(' ').map(Number))
    this.columns = this.rows[0].map((_, i) => this.rows.map(x => x[i]))
  }

  get saddlePoints() {
    return this.rows.reduce((acc, row, i) => {
      this.columns.forEach((column, j) => {
        if (row[j] === Math.max(...row) && row[j] === Math.min(...column))
          acc.push([i, j])
      })
      return acc
    }, [])
  }
}
