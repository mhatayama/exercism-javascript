export class List {
  constructor(values = []) {
    this.values = [...values]
  }

  append(list2) {
    let appended = [...this.values]
    for (let i = 0; i < list2.length(); i++)
      appended[this.length() + i] = list2.values[i]
    return new List(appended)
  }

  concat(listOfLists) {
    let concatenated = new List(this.values)
    for (let i = 0; i < listOfLists.length(); i++)
      concatenated = concatenated.append(listOfLists.values[i])
    return concatenated
  }

  filter(func) {
    let filtered = []
    for (let i = 0, cnt = 0; i < this.length(); i++) {
      if (func(this.values[i])) {
        filtered[cnt] = this.values[i]
        cnt += 1
      }
    }
    return new List(filtered)
  }

  map(func) {
    let mapped = []
    for (let i = 0; i < this.length(); i++)
      mapped[i] = func(this.values[i])
    return new List(mapped)
  }

  length() {
    let cnt = 0
    while (this.values[cnt]) cnt += 1
    return cnt
  }

  foldl(func, acc) {
    for (let i = 0; i < this.length(); i++) {
      acc = func(acc, this.values[i])
    }
    return acc
  }

  foldr(func, acc) {
    return this.reverse().foldl(func, acc)
  }

  reverse() {
    let reversed = []
    for (let i = 0; i < this.length(); i++) {
      reversed[i] = this.values[this.length() - i - 1]
    }
    return new List(reversed)
  }
}
