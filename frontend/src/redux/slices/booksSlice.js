import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
    name: 'books',
    initialState,

    reducers: {
        addBook: (state, action) => {
            return [...state, action.payload];
        },
        toggleFavorite: (state, action) => {
            return state.map((item) =>
                item.id === action.payload
                    ? { ...item, isFavorite: !item.isFavorite }
                    : item
            );
        },
        deleteBook: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addBook, toggleFavorite, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
