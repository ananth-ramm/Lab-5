const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);
    res.json({ result: num1 + num2 });
});

router.get('/subtract', (req, res) => {
    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);
    res.json({ result: num1 - num2 });
});


router.get('/multiply', (req, res) => {
    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);
    res.json({ result: num1 * num2 });
});

router.get('/divide', (req, res) => {
    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);
    if (num2 === 0) {
        res.status(400).json({ error: "Cannot divide by zero" });
    } else {
        res.json({ result: num1 / num2 });
    }
});

module.exports = router;
