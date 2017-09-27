class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min
      this.max = max
    }

    guess() {
      return (this.min + Math.ceil((this.max - this.min)/2))
      }

    lower() {
      this.max = this.min + Math.ceil((this.max - this.min)/2)
    }

    greater() {
      this.min = this.min + Math.ceil((this.max - this.min)/2)
    }
}

module.exports = GuessingGame;
