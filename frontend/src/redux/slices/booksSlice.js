import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithId from '../../utils/createBookWithId';
import { setError } from './errorSlice';

const initialState = {
    books: [],
    isLoading: false,
};

export const fetchUserData = createAsyncThunk(
    'books/fetchUserData',
    async (url, thunkAPI) => {
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (e) {
            console.log(e.message);
            thunkAPI.dispatch(setError('Fail to fetch'));
            //Option 1
            return thunkAPI.rejectWithValue(e);
            //Option 2
            // throw e;
        }
    }
);

const booksSlice = createSlice({
    name: 'books',
    initialState,

    reducers: {
        addBook: (state, action) => {
            return { ...state, books: [...state.books, action.payload] };
        },

        toggleFavorite: (state, action) => {
            state.books.forEach((item) => {
                if (item.id === action.payload) {
                    item.isFavorite = !item.isFavorite;
                } else {
                    return state;
                }
            });
        },
        deleteBook: (state, action) => {
            return {
                ...state,
                books: state.books.filter((item) => item.id !== action.payload),
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                return { ...state, isLoading: true };
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                if (action?.payload?.author && action?.payload?.title) {
                    return {
                        ...state,
                        isLoading: false,
                        books: [
                            ...state.books,
                            createBookWithId(action.payload, 'serverApi'),
                        ],
                    };
                } else {
                    return { ...state, isLoading: false };
                }
            })
            .addCase(fetchUserData.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const { addBook, toggleFavorite, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
