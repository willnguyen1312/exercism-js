export class Clock {
  static HOURS_IN_DAY = 24;
  static MINUTES_IN_HOUR = 60;
  static MINUTES_IN_DAY = Clock.MINUTES_IN_HOUR * Clock.HOURS_IN_DAY;

  static timeInMinutes(minutes) {
    return (
      ((minutes % Clock.MINUTES_IN_DAY) + Clock.MINUTES_IN_DAY) %
      Clock.MINUTES_IN_DAY
    );
  }

  #time = 0;

  constructor(hours = 0, minutes = 0) {
    this.plus(hours * Clock.MINUTES_IN_HOUR + minutes);
  }

  get time() {
    return this.#time;
  }

  toString() {
    return [
      (this.time / Clock.MINUTES_IN_HOUR) | 0, // Calculates hour
      this.time % Clock.MINUTES_IN_HOUR, // Calculates minute
    ]
      .map((num) => `${num}`.padStart(2, 0))
      .join(":");
  }

  plus(minutes = 0) {
    this.#time = Clock.timeInMinutes(this.time + minutes);
    return this;
  }

  minus(minutes = 0) {
    return this.plus(-minutes);
  }

  equals(clock) {
    return this.time === clock.time;
  }
}
