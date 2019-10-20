const TRANS = {
  "Methionine": ["AUG"],
  "Phenylalanine": ["UUU", "UUC"],
  "Leucine": ["UUA", "UUG"],
  "Serine": ["UCU", "UCC", "UCA", "UCG"],
  "Tyrosine": ["UAU", "UAC"],
  "Cysteine": ["UGU", "UGC"],
  "Tryptophan": ["UGG"],
  "STOP": ["UAA", "UAG", "UGA"],
}

export const translate = (sequences = "") => {
  let proteins = []
  for (let i = 0; i < sequences.length; i += 3) {
    let codon = sequences.substring(i, i + 3)
    let protein = undefined
    for (let k in TRANS) {
      if (TRANS[k].includes(codon)) {
        protein = k
        break
      }
    }
    if (protein === "STOP") {
      break
    } else if (protein === undefined) {
      throw new Error("Invalid codon")
    }
    proteins.push(protein)
  }
  return proteins
}
