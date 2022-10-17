class Calc {
    add(a, b) {
        this.validate(a, b);
        return a + b;
    }

    multiply(a, b) {
        this.validate(a, b);
        return a * b;
    }

    validate(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('You have not passed number parameters');
        }
    }
}

module.exports = Calc;