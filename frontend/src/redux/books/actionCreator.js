import { ADD_BOOK, DELETE_BOOK, TOGGLE_FAVORITE } from './actionTypes';

export const addBook = (newBook) => {
    return { type: ADD_BOOK, payload: newBook };
};

export const deleteBook = () => {
    return { type: DELETE_BOOK, payload: {} };
};

export const toggleFavoite = () => {
    return { type: TOGGLE_FAVORITE, payload: {} };
};
