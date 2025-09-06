const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the water resource management system!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});