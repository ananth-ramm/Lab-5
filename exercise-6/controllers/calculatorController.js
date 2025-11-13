const addNumbers = (req, res) => {
    const number1 = parseFloat(req.query.num1);
    const number2 = parseFloat(req.query.num2);

    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be numbers" });
    }

    res.status(200).json({ result: number1 + number2 });
};

const subtractNumbers = (req, res) => {
    const number1 = parseFloat(req.query.num1);
    const number2 = parseFloat(req.query.num2);

    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be numbers" });
    }

    res.status(200).json({ result: number1 - number2 });
};

const multiplyNumbers = (req, res) => {
    const number1 = parseFloat(req.query.num1);
    const number2 = parseFloat(req.query.num2);

    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be numbers" });
    }

    res.status(200).json({ result: number1 * number2 });
};

const divideNumbers = (req, res) => {
    const number1 = parseFloat(req.query.num1);
    const number2 = parseFloat(req.query.num2);

    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be numbers" });
    }

    if (number2 === 0) {
        return res.status(400).json({ error: "Division by zero is not allowed" });
    }

    res.status(200).json({ result: number1 / number2 });
};

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
};
