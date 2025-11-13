const express = require('express');

const app1 = express();
const port1 = 3000;
app1.get('/', (req, res) => res.send('Hello from Server 1'));
app1.listen(port1, () => console.log(`Server 1 running on http://localhost:${port1}`));

const app2 = express();
const port2 = 80;
app2.get('/', (req, res) => res.send('Hello from Server 2'));
app2.listen(port2, () => console.log(`Server 2 running on http://localhost:${port2}`));
