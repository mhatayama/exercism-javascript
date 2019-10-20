export class Anagram {
  constructor(word) {
    this.original = word.toLowerCase()
    this.normalized = this.normalize(word)
  }

  normalize(word) {
    return [...word.toLowerCase()].sort().join('')
  }

  matches(candidates) {
    return candidates.filter(wd => this.original !== wd.toLowerCase())
      .filter(wd => this.normalized === this.normalize(wd))
  }
}
