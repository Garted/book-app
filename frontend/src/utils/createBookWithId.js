import { v4 as uuidv4 } from 'uuid';

const createBookWithId = (book, sourse) => {
    const { year, ...newBook } = book;
    return { ...newBook, isFavorite: false, sourse, id: uuidv4() };
};

export default createBookWithId;
