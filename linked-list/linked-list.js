export class Node {
  constructor(value, prev, next) {
    this.value = value
    this.prev = prev
    this.next = next
  }
}

export class LinkedList {
  constructor() {
    this.first = null
    this.last = null
  }

  push(value) {
    const pushNode = new Node(value, this.last, null)
    if (this.last) this.last.next = pushNode
    if (!this.first) this.first = pushNode
    this.last = pushNode
  }

  pop() {
    const popNode = this.last
    this.last = this.last.prev
    if (popNode == this.first) this.first = null
    return popNode.value
  }

  shift() {
    const shiftNode = this.first
    this.first = this.first.next
    if (shiftNode == this.last) this.last = null
    return shiftNode.value
  }

  unshift(value) {
    const unshiftNode = new Node(value, null, this.first)
    if (this.first) this.first.prev = unshiftNode
    if (!this.last) this.last = unshiftNode
    this.first = unshiftNode
  }

  delete(value) {
    let currentNode = this.first
    do {
      if (currentNode.value === value) {
        if (currentNode.prev) currentNode.prev.next = currentNode.next
        if (currentNode.next) currentNode.next.prev = currentNode.prev
        if (this.first == currentNode) this.first = this.first.next
        if (this.last == currentNode) this.last = this.last.prev
        return
      }
    } while (currentNode = currentNode.next)
  }

  count() {
    let cnt = 0
    let currentNode = this.first
    while (currentNode) {
      cnt += 1
      currentNode = currentNode.next
    }
    return cnt
  }
}
