import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import booksData from '../../data/333. books.json';
import './BookForm.css';
import {
    handleAddRandomBook,
    handleAddBook,
    handleLoadBookFromApi,
} from '../../utils/handleLoadBook';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const isLoad = useSelector((state) => state.books.isLoading);
    const dispatch = useDispatch();

    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form
                onSubmit={(e) => {
                    /**
                     * Обработчик для добавления вручную.
                     * @param {Event} e - Событие submit.
                     * @param {function} dispatch - Redux dispatch функция.
                     * @param {string} "handle" - Способ добавления (например, 'handle').
                     * @param {string} title - Заголовок книги.
                     * @param {string} author - Автор книги.
                     * @param {function} setTitle - Функция для установки заголовка.
                     * @param {function} setAuthor - Функция для установки автора.
                     */
                    handleAddBook(
                        e,
                        dispatch,
                        'handle',
                        title,
                        author,
                        setTitle,
                        setAuthor
                    );
                }}
            >
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
                    style={
                        isLoad
                            ? {
                                  backgroundColor: 'grey',
                              }
                            : null
                    }
                    onClick={() => {
                        /**
                         * Обработчик для добавления через API.
                         * @param {Event} "url" - "адрес запроса"
                         * @param {function} dispatch - Redux dispatch функция.
                         */
                        handleLoadBookFromApi(
                            dispatch,
                            'http://localhost:4000/random-book-delayed'
                        );
                    }}
                    type="button"
                    disabled={isLoad}
                >
                    {isLoad ? (
                        <>
                            <span>Loading Book</span>
                            <FaSpinner className="spinner" />
                        </>
                    ) : (
                        'API'
                    )}
                </button>
                <button
                    onClick={() => {
                        /**
                         * Обработчик для добавления книги из файла json.
                         * @param {Event} bookData - json файл с книгами
                         * @param {function} dispatch - Redux dispatch функция.
                         * @param {function} 'random' - Способ добавления.
                         */
                        handleAddRandomBook(booksData, dispatch, 'random');
                    }}
                    type="button"
                >
                    Add Random
                </button>
            </form>
        </div>
    );
};

export default BookForm;
