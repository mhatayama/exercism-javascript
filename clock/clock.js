export class Clock {
  constructor(hour, minute=0) {
    let mod = (hour * 60 + minute) % 1440
    this.minutes = mod < 0 ? mod + 1440 : mod
  }

  toString() {
    let hourStr = Math.floor(this.minutes / 60).toString().padStart(2, '0')
    let minuteStr = (this.minutes % 60).toString().padStart(2, '0')
    return `${hourStr}:${minuteStr}`
  }

  plus(minute) {
    return new Clock(0, this.minutes + minute)
  }

  minus(minute) {
    return new Clock(0, this.minutes - minute)
  }

  equals(clock) {
    return this.toString() === clock.toString()
  }
}
