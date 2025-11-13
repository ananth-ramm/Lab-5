const Logger = require('./Logger');

class Calculator {
    constructor() {
        this.id = Math.floor(Math.random() * 1_000_000);
        this.logger = new Logger(this.id);
    }

    #log(value) {
        this.logger.log(`Result: ${value}`);
    }

    add(num1, num2) {
        const value = num1 + num2;
        this.#log(value);
        return value;
    }

    subtract(num1, num2) {
        const value = num1 - num2;
        this.#log(value);
        return value;
    }

    multiply(num1, num2) {
        const value = num1 * num2;
        this.#log(value);
        return value;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            this.#log("Division by zero error");
            throw new Error("Division by zero is not allowed");
        }
        const value = num1 / num2;
        this.#log(value);
        return value;
    }
}

module.exports = Calculator;
