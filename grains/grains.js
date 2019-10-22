import BigInt from './lib/big-integer'

export class Grains {
  square(num) {
    return BigInt(1).shiftLeft(num - 1).toString()
  }

  total() {
    return BigInt(1).shiftLeft(64).subtract(1).toString()
  }
}
