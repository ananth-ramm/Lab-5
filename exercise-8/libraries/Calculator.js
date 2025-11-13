class Calculator {
    constructor() {
        this.id = Math.floor(Math.random() * 1_000_000);
    }

    #log(value) {
        console.log(`[Calculator:${this.id}]: ${value}`);
    }

    add(num1, num2) {
        const result = num1 + num2;
        this.#log(result);
        return result;
    }

    subtract(num1, num2) {
        const result = num1 - num2;
        this.#log(result);
        return result;
    }

    multiply(num1, num2) {
        const result = num1 * num2;
        this.#log(result);
        return result;
    }

    divide(num1, num2) {
        if (num2 === 0) throw new Error("Cannot divide by zero");
        const result = num1 / num2;
        this.#log(result);
        return result;
    }
}

module.exports = Calculator;
