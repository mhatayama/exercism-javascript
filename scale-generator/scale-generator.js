export const USE_SHARPS = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'e', 'b', 'f#', 'c#', 'g#', 'd#', 'a']
export const SHARP_CHROMATIC = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
export const FLAT_CHROMATIC = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
export const INTERVAL_MAP = { 'm': 1, 'M': 2, 'A': 3 }

export class Scale {
  constructor(tonic) {
    this.chromaticScales = this.getChromatic(tonic)
  }

  chromatic() {
    return this.chromaticScales;
  }

  getChromatic(tonic) {
    const chromatic = USE_SHARPS.includes(tonic) ? SHARP_CHROMATIC : FLAT_CHROMATIC;
    const startingNote = tonic.length == 2 ? tonic[0].toUpperCase() + tonic[1] : tonic[0].toUpperCase()
    const idx = chromatic.indexOf(startingNote)
    return chromatic.slice(idx, 12).concat(chromatic.slice(0, idx))
  }

  interval(intervals) {
    let pitches = []
    for (let i = 0, chIdx = 0; i < intervals.length; i++) {
      pitches.push(this.chromaticScales[chIdx])
      chIdx += INTERVAL_MAP[intervals[i]]
    }
    return pitches
  }
}
