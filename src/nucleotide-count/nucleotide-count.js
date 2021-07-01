export class NucleotideCounts {
  static parse(str) {
    let [A, C, G, T] = [0, 0, 0, 0];

    str.split("").forEach((letter) => {
      if (letter === "A") {
        A += 1;
      } else if (letter === "C") {
        C += 1;
      } else if (letter === "G") {
        G += 1;
      } else if (letter === "T") {
        T += 1;
      } else {
        throw new Error("Invalid nucleotide in strand");
      }
    });

    return `${A} ${C} ${G} ${T}`;
  }
}
