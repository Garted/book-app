import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithId from '../../utils/createBookWithId';

import { setError } from './errorSlice';

const initialState = [];
export const fetchUserData = createAsyncThunk(
    'books/fetchUserData',
    async (_, { dispatch }) => {
        try {
            const res = await axios.get(`http://localhost:4000/ranom-book`);
            return res.data;
        } catch (e) {
            dispatch(setError(e.message));
            console.log(e.message);

            // dispatchEvent();
        }
    }
);
const some = createAsyncThunk('book/some', () => {
    return 1;
});
const booksSlice = createSlice({
    name: 'books',
    initialState,

    reducers: {
        addBook: (state, action) => {
            return [...state, action.payload];
        },
        toggleFavorite: (state, action) => {
            return state.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, isFavorite: !item.isFavorite };
                }
                return item;
            });
        },
        deleteBook: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, () => {
                console.log('loading');
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                if (action.payload?.author && action.payload?.title) {
                    console.log('success');
                    return [
                        ...state,
                        createBookWithId(action.payload, 'serverApi'),
                    ];
                } else {
                    console.log('er');
                    return state;
                }
            })
            .addCase(fetchUserData.rejected, (state) => {
                console.log('err');

                return state;
            });

        builder.addCase(some.rejected, (state, action) => {
            console.log('err');
        });
    },
});

export const { addBook, toggleFavorite, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
