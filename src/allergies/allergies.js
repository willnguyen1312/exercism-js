const ALLERGENS = [
  "eggs",
  "peanuts",
  "shellfish",
  "strawberries",
  "tomatoes",
  "chocolate",
  "pollen",
  "cats",
];

export class Allergies {
  allergens = [];

  constructor(score = 0) {
    this.allergens = ALLERGENS.filter((_, i) => (score >> i) & 1);
  }

  list() {
    return this.allergens;
  }

  allergicTo(allergen) {
    return this.allergens.includes(allergen);
  }
}
