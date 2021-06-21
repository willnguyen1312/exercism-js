//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  sides;
  constructor(...sides) {
    this.sides = sides;
  }

  checkValid() {
    const [a, b, c] = this.sides;
    if (a + b < c || b + c < a || a + c < b) {
      return false;
    }
    return true;
  }

  get isEquilateral() {
    if (!this.checkValid()) {
      return false;
    }
    const [a, b, c] = this.sides;
    if (a === 0 || b === 0 || c === 0) {
      return false;
    }
    return a === b && b === c;
  }

  get isIsosceles() {
    if (!this.checkValid()) {
      return false;
    }
    const [a, b, c] = this.sides;
    return (
      (a === b && a + b > c) || (b === c && b + c > a) || (a === c && a + c > b)
    );
  }

  get isScalene() {
    if (!this.checkValid()) {
      return false;
    }
    const [a, b, c] = this.sides;
    return a !== b && a !== c && b !== c;
  }
}
