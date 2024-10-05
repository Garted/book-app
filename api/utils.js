const generateBook = (bookData) => {
    const randomIndex = Math.floor(Math.random() * bookData.length);
    const randomBook = bookData[randomIndex];
    return randomBook;
};

module.exports = generateBook;
