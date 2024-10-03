const filterByTitleAndAuthor = (arr, title, author) => {
    if (arr.length > 0) {
        return arr.filter(
            (item) =>
                item.title.toLowerCase().includes(title.toLowerCase()) &&
                item.author.toLowerCase().includes(author.toLowerCase())
        );
    } else {
        return arr;
    }
};

export default filterByTitleAndAuthor;
