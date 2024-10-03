import { useSelector } from 'react-redux';
import './BookList.css';

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
                        <li key={book.id}>
                            <div className="book-info">
                                {++index}. {book.title} by{' '}
                                <strong>{book.author}</strong>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;
