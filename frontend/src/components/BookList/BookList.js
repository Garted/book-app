import { useSelector, useDispatch } from 'react-redux';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import { deleteBook, toggleFavorite } from '../../redux/slices/booksSlice';
import { selectTitleFilter } from '../../redux/slices/filterSlice';
import filterByTitleAndAuthor from '../../utils/filterByTitleAndAuthor';
import highLightMatch from '../../utils/highlightMatch';
import './BookList.css';

const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books);
    const { title, author, onlyFavorite } = useSelector(selectTitleFilter);

    //Filter in component
    // const filteredBooks = books.filter((book) => {
    //     return (
    //         book.title.toLowerCase().includes(title.toLowerCase()) &&
    //         book.author.toLowerCase().includes(author.toLowerCase())
    //     );
    // });

    //import util function for filter books
    const filteredBooks = filterByTitleAndAuthor(
        books,
        title,
        author,
        onlyFavorite
    );

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
                                {++index}.{' '}
                                <span>{highLightMatch(book.title, title)}</span>{' '}
                                by{' '}
                                <strong>
                                    <span>
                                        {highLightMatch(book.author, author)}
                                    </span>
                                </strong>{' '}
                                <span>({book.sourse})</span>
                            </div>
                            <span
                                onClick={() => {
                                    dispatch(toggleFavorite(book.id));
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
