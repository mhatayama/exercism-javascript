export class PhoneNumber {
  constructor(orig) {
    this.digits = [...orig.replace(/\D/g, '')]
  }

  number() {
    if (this.digits.length === 11 && this.digits[0] === '1')
      this.digits.shift()
    if (this.digits.length !== 10
      || '01'.includes(this.digits[0]) || '01'.includes(this.digits[3]))
      return null
    return this.digits.join('')
  }
}
