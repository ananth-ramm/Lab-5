const addNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Both num1 and num2 must be numbers' });
    }

    const sum = num1 + num2;
    res.status(200).json({ result: sum });
};

const subtractNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Both num1 and num2 must be numbers' });
    }

    const difference = num1 - num2;
    res.status(200).json({ result: difference });
};

const multiplyNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Both num1 and num2 must be numbers' });
    }

    const product = num1 * num2;
    res.status(200).json({ result: product });
};

const divideNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Both num1 and num2 must be numbers' });
    }

    if (num2 === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed' });
    }

    const quotient = num1 / num2;
    res.status(200).json({ result: quotient });
};

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
};
