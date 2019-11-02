export const abilityModifier = (num) => {
  if (num < 3) throw new Error('Ability scores must be at least 3')
  if (num > 18) throw new Error('Ability scores can be at most 18')
  return Math.floor((num - 10) / 2)
}

export class Character {
  constructor() {
    this._strength = Character.rollAbility()
    this._dexterity = Character.rollAbility()
    this._constitution = Character.rollAbility()
    this._intelligence = Character.rollAbility()
    this._wisdom = Character.rollAbility()
    this._charisma = Character.rollAbility()
    this._hitpoints = 10 + abilityModifier(this.constitution)
  }

  static rollAbility() {
    return [...Array(4)].map(_ => Math.floor(Math.random() * 6 + 1))
      .sort().slice(-3).reduce((sum, i) => sum + i, 0)
  }

  get strength() {
    return this._strength
  }

  get dexterity() {
    return this._dexterity
  }

  get constitution() {
    return this._constitution
  }

  get intelligence() {
    return this._intelligence
  }

  get wisdom() {
    return this._wisdom
  }

  get charisma() {
    return this._charisma
  }

  get hitpoints() {
    return this._hitpoints
  }
}
