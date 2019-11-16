export class ComplexNumber {
  constructor(real, imag) {
    this.real = real
    this.imag = imag
  }

  add(comp2) {
    return new ComplexNumber(this.real + comp2.real, this.imag + comp2.imag)
  }

  sub(comp2) {
    return new ComplexNumber(this.real - comp2.real, this.imag - comp2.imag)
  }

  div(comp2) {
    return new ComplexNumber(
      (this.real * comp2.real + this.imag * comp2.imag) / (comp2.real ** 2 + comp2.imag ** 2),
      (this.imag * comp2.real - this.real * comp2.imag) / (comp2.real ** 2 + comp2.imag ** 2))
  }

  mul(comp2) {
    return new ComplexNumber(
      this.real * comp2.real - this.imag * comp2.imag,
      this.imag * comp2.real + this.real * comp2.imag)
  }

  get abs() {
    return Math.sqrt(this.real ** 2 + this.imag ** 2)
  }

  get conj() {
    return new ComplexNumber(this.real, this.imag === 0 ? 0 : -this.imag)
  }

  get exp() {
    return new ComplexNumber(
      Math.exp(this.real) * Math.cos(this.imag),
      Math.exp(this.real) * Math.sin(this.imag))
  }
}
