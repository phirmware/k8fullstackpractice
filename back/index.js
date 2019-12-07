const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to fullstack kubernetes practice'});
});

app.get('/about', (req, res) => {
    res.status(200).json({message: 'About Full Stack'});
});

app.listen(5000, () => {
    console.log('Listening @ port')
});

