export const abilityModifier = (value) => {
  if (value < 3) {
    throw new Error("Ability scores must be at least 3");
  } else if (value > 18) {
    throw new Error("Ability scores can be at most 18");
  }
  return Math.floor((value - 10) / 2);
};

export class Character {
  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
    this._hitpoints = 10 + abilityModifier(this._constitution);
  }

  static rollAbility() {
    let rolls = [];
    for (let num = 0; num < 4; num++) {
      rolls.push(Math.ceil(Math.random() * 6));
    }
    rolls.pop(Math.min(...rolls));
    var sum = rolls.reduce(function (a, b) {
      return a + b;
    }, 0);
    return sum;
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return this._hitpoints;
  }
}
