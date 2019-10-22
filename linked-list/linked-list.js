export class LinkedList {
  constructor() {
    this.container = []
  }

  push(value) {
    this.container.push(value)
  }

  pop() {
    return this.container.pop()
  }

  shift() {
    return this.container.shift()
  }

  unshift(value) {
    this.container.unshift(value)
  }

  delete(value) {
    let idx = this.container.indexOf(value)
    if (idx >= 0)
      this.container.splice(idx, 1)
  }

  count() {
    return this.container.length
  }
}
