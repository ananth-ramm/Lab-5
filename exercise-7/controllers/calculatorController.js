const Calculator = require('../libraries/Calculator');
const calcInstance = new Calculator();

const addNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be numbers" });
    }
    const result = calcInstance.add(num1, num2);
    res.status(200).json({ result });
};

const subtractNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be numbers" });
    }
    const result = calcInstance.subtract(num1, num2);
    res.status(200).json({ result });
};

const multiplyNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be numbers" });
    }
    const result = calcInstance.multiply(num1, num2);
    res.status(200).json({ result });
};

const divideNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be numbers" });
    }
    try {
        const result = calcInstance.divide(num1, num2);
        res.status(200).json({ result });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
};
