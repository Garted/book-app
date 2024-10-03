import { useSelector, useDispatch } from 'react-redux';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import { deleteBook, toggleFavoite } from '../../redux/books/actionCreator';
import { selectTitleFilter } from '../../redux/slices/filterSlice';
import './BookList.css';

const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books);
    const filter = useSelector(selectTitleFilter);

    const filteredBooks = books.filter((book) => {
        return book.title.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books</p>
            ) : (
                <ul>
                    {filteredBooks.map((book, index) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++index}. {book.title} by{' '}
                                <strong>{book.author}</strong>
                            </div>
                            <span
                                onClick={() => {
                                    dispatch(toggleFavoite(book.id));
                                }}
                            >
                                {book.isFavorite ? (
                                    <BsBookmarkStarFill className="star-icon" />
                                ) : (
                                    <BsBookmarkStar className="star-icon" />
                                )}
                            </span>

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
