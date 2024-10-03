import { useSelector, useDispatch } from 'react-redux';
import './BookList.css';
import { deleteBook } from '../../redux/books/actionCreator';

const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books);
    console.log(books);
    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books</p>
            ) : (
                <ul>
                    {books.map((book, index) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++index}. {book.title} by{' '}
                                <strong>{book.author}</strong>
                            </div>
                            <button
                                onClick={() => {
                                    dispatch(deleteBook(book.id));
                                }}
                                className="book-actions"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;
