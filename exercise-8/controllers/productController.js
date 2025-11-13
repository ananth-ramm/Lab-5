const axios = require("axios");
const Calculator = require("../libraries/Calculator");
const calc = new Calculator();

const addNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    const result = calc.add(num1, num2);
    res.json({ result });
};

const subtractNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) return res.status(400).json({ error: "Invalid numbers" });

    const result = calc.subtract(num1, num2);
    res.json({ result });
};

const multiplyNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) return res.status(400).json({ error: "Invalid numbers" });

    const result = calc.multiply(num1, num2);
    res.json({ result });
};

const divideNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) return res.status(400).json({ error: "Invalid numbers" });

    try {
        const result = calc.divide(num1, num2);
        res.json({ result });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const fetchProducts = async (req, res) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
};

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers,
    fetchProducts
};
