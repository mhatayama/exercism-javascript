export class NucleotideCounts {
  static parse(string) {
    if (string.match(/[^ACGT]/)) throw new Error('Invalid nucleotide in strand')
    return [..."ACGT"].map(
      d => string.replace(RegExp(`\[\^${d}\]`, 'g'), '').length).join(' ')
  }
}
