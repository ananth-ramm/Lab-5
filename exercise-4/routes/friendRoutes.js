const express = require('express');
const router = express.Router();

let friends = [
    { id: 1, name: 'Aaron', age: 25 },
    { id: 2, name: 'Daniel', age: 30 },
    { id: 3, name: 'Nancy', age: 22 },
    { id: 4, name: 'Eric', age: 28 },
];

router.get('/filter', (req, res) => {
    const letter = req.query.letter;
    if (!letter) {
        return res.status(400).json({ error: 'Query parameter "letter" is required' });
    }
    const filtered = friends.filter(friend => friend.name.toLowerCase().startsWith(letter.toLowerCase()));
    res.json(filtered);
});

router.get('/info', (req, res) => {
    const { 'user-agent': userAgent, 'content-type': contentType, accept } = req.headers;
    res.json({ 'user-agent': userAgent, 'content-type': contentType, accept });
});

router.get('/:id', (req, res) => {
    const friendId = parseInt(req.params.id);
    const friend = friends.find(f => f.id === friendId);
    if (!friend) {
        return res.status(404).json({ error: `Friend with id ${friendId} not found` });
    }
    res.json(friend);
});

router.put('/:id', (req, res) => {
  const friendId = parseInt(req.params.id);
  const updatedData = req.body || {}; 

  const friend = friends.find(f => f.id === friendId);
  if (!friend) {
    return res.status(404).json({ error: `Friend with id ${friendId} not found.` });
  }

  if (!updatedData.name && !updatedData.age) {
    return res.status(400).json({ error: 'Please provide a name or age to update.' });
  }

  if (updatedData.name) friend.name = updatedData.name;
  if (updatedData.age) friend.age = updatedData.age;

  res.status(200).json(friend);
});

module.exports = router;