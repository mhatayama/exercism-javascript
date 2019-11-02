export class Words {
  count(words) {
    return words.toLowerCase().trim().split(/\s+/).reduce((cnt, word) => {
      cnt[word] = (cnt[word] || 0) + 1; return cnt
    }, Object.create(null))
  }
}
