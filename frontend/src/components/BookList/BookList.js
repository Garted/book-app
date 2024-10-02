import './BookList.css';
import { useSelector } from 'react-redux';

const BookList = () => {
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
                        <li key={index}>
                            <div className="book-info">
                                {book.title} by <strong>{book.author}</strong>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;
