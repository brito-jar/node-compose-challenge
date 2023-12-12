const express = require('express');

const userRoutes = require('./userRoutes');

const app = express();

const port = 3000;

app.use(userRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});