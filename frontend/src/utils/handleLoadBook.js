import { addBook } from '../redux/slices/booksSlice';
import { setError } from '../redux/slices/errorSlice';
import { fetchUserData } from '../redux/slices/booksSlice';
import createBookWithId from './createBookWithId';

export const handleAddBook = (e, dis, how, title, author, setTi, setAu) => {
    e.preventDefault();
    if (title && author) {
        dis(addBook(createBookWithId({ title, author }, how)));
        setTi('');
        setAu('');
    } else {
        dis(setError('Fill field'));
    }
};

export const handleAddRandomBook = (book, dis, how) => {
    const randomIndex = Math.floor(Math.random() * book.length);
    const { year, ...otherData } = book[randomIndex];
    dis(addBook(createBookWithId(otherData, how)));
};

export const handleLoadBookFromApi = (dis, url) => {
    dis(fetchUserData(url));
};
