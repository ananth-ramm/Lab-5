const express = require('express');
const router = express.Router();

let friends = [
    { id: 1, name: "Aaron", age: 25 },
    { id: 2, name: "Daniel", age: 30 },
    { id: 3, name: "Nancy", age: 22 },
    { id: 4, name: "Eric", age: 28 }
];

router.get('/', (req, res) => {
    res.status(200).json(friends);
});

router.get('/filter', (req, res) => {
    const { letter, age } = req.query;

    if (letter) {
        const results = friends.filter(f =>
            f.name.toLowerCase().startsWith(letter.toLowerCase())
        );
        return res.status(200).json(results);
    }

    if (age) {
        const targetAge = Number(age);
        const results = friends.filter(f => f.age === targetAge);
        return res.status(200).json(results);
    }

    res.status(400).json({
        message: "Please use either ?letter=A or ?age=25 when filtering."
    });
});

router.get('/info', (req, res) => {
    const headerInfo = {
        'user-agent': req.headers['user-agent'],
        'content-type': req.headers['content-type'],
        accept: req.headers['accept']
    };
    res.status(200).json(headerInfo);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const friend = friends.find(f => f.id === id);

    if (!friend) {
        return res.status(404).json({ error: `No friend found with id ${id}` });
    }

    res.status(200).json(friend);
});

router.post('/', (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({
            error: "New friend must include BOTH name and age."
        });
    }

    const newEntry = {
        id: friends.length + 1,
        name,
        age
    };

    friends.push(newEntry);
    res.status(201).json(newEntry);
});

router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = friends.findIndex(f => f.id === id);

    if (index === -1) {
        return res.status(404).json({ error: `Friend with id ${id} not found.` });
    }

    const updated = req.body;

    if (!updated.name || !updated.age) {
        return res.status(400).json({
            error: "PUT request must include BOTH name and age."
        });
    }

    friends[index] = {
        id,
        name: updated.name,
        age: updated.age
    };

    res.status(200).json(friends[index]);
});


module.exports = router;
