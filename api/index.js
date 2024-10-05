const express = require('express');
const cors = require('cors');
const app = express();
const bookData = require('./data/books.json');
const generateBook = require('./utils.js');

app.use(cors());

app.get('/random-book', (req, res) => {
    res.json(generateBook(bookData));
});

app.get('/random-book-delayed', (req, res) => {
    setTimeout(() => {
        res.json(generateBook(bookData));
    }, 1000);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
