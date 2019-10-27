const ITEMS = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes',
  'chocolate', 'pollen', 'cats']

export class Allergies {
  constructor(score) {
    this.score = score
  }

  list() {
    return ITEMS.filter(item => this.allergicTo(item))
  }

  allergicTo(item) {
    return this.score / 2 ** ITEMS.indexOf(item) % 2 >= 1
  }
}
