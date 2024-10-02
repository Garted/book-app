import { useState } from 'react';
import './BookForm.css';

import { addBook } from '../../redux/books/actionCreator';
import { useDispatch } from 'react-redux';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleSumbit = (e) => {
        e.preventDefault();
        if (title && author) {
            dispatch(addBook({ title, author }));
            setTitle('');
            setAuthor('');
        }
    };
    console.log('rendeb');
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
                <button type="submit">API</button>
                <button type="submit">Random</button>
            </form>
        </div>
    );
};

export default BookForm;
