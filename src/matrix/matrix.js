export class Matrix {
  rows = [];
  columns = [];

  constructor(matrix) {
    const rows = matrix
      .split("\n")
      .map((rowString) => rowString.split(" ").map(Number));

    const columns = rows[0].map((_, index) => rows.map((row) => row[index]));

    this.rows = rows;
    this.columns = columns;
  }

  get rows() {
    return this.rows;
  }

  get columns() {
    return this.columns;
  }
}
