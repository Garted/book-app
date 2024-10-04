import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createBookWithId from '../../utils/createBookWithId';
import axios from 'axios';
const initialState = [];

export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async () => {
        const res = await axios.get(`http://localhost:4000/random-book`);
        return res.data;
    }
);

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
                console.log('success');
                if (action.payload?.author && action.payload?.title) {
                    return [
                        ...state,
                        createBookWithId(action.payload, 'serverApi'),
                    ];
                } else {
                    return state;
                }
            })
            .addCase(fetchUserData.rejected, (state) => {
                console.log('err');
                return state;
            });
    },
});

export const { addBook, toggleFavorite, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
