import { useState } from 'react';
import { useDispatch } from 'react-redux';
import createBookWithId from '../../utils/createBookWithId';
import { addBook } from '../../redux/slices/booksSlice';
import booksData from '../../data/333. books.json';
import './BookForm.css';
import { fetchUserData } from '../../redux/slices/booksSlice';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleSumbit = (e) => {
        e.preventDefault();
        if (title && author) {
            dispatch(addBook(createBookWithId({ title, author }, 'handle')));
            setTitle('');
            setAuthor('');
        }
    };

    const handleAddRandomBook = () => {
        //Easy to reading
        const randomIndex = Math.floor(Math.random() * booksData.length);
        const { year, ...otherData } = booksData[randomIndex];
        dispatch(addBook(createBookWithId(otherData, 'random')));

        //Hard to reading
        // dispatch(
        //     addBook({
        //         ...booksData[Math.floor(Math.random() * booksData.length)],
        //         id: uuidv4(),
        //     })
        // );
    };

    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSumbit}>
                <label htmlFor="title">Title:</label>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    id="title"
                    value={title}
                />
                <label htmlFor="author">Author:</label>
                <input
                    onChange={(e) => setAuthor(e.target.value)}
                    type="text"
                    id="author"
                    value={author}
                />

                <button type="submit">Add Book</button>
                <button
                    onClick={() => {
                        dispatch(fetchUserData());
                    }}
                    type="button"
                >
                    API
                </button>
                <button onClick={handleAddRandomBook} type="button">
                    Add Random
                </button>
            </form>
        </div>
    );
};

export default BookForm;
