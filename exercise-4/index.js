const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const friendRoutes = require('./routes/friendRoutes');
app.use('/friends', friendRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
    