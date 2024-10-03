const filterByTitleAndAuthor = (arr, title, author, onlyFavorite) => {
    if (arr.length > 0) {
        return arr.filter((item) => {
            const titleFilter = item.title
                .toLowerCase()
                .includes(title.toLowerCase());
            const authorFilter = item.author
                .toLowerCase()
                .includes(author.toLowerCase());
            const matchesFavorive = onlyFavorite ? item.isFavorite : true;
            return titleFilter && authorFilter && matchesFavorive;
        });
    } else {
        return arr;
    }
};

export default filterByTitleAndAuthor;
