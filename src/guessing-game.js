class GuessingGame {
    constructor() {
        this.left = 0;
        this.right = 0;
        this.mid = 0;
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        return this.mid = Math.round((this.left + this.right) / 2);
    }

    lower() {
        this.right = this.mid;
    }

    greater() {
        this.left = this.mid;
    }
}

module.exports = GuessingGame;
