const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/', express.static('public'));

const calculatorRoutes = require('./routes/calculatorRoutes');
app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
