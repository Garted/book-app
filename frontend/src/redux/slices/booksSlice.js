import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithId from '../../utils/createBookWithId';
import { setError } from './errorSlice';

const initialState = [];

export const fetchUserData = createAsyncThunk(
    'books/fetchUserData',
    async (url, thunkAPI) => {
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (e) {
            console.log(e.message);
            thunkAPI.dispatch(setError('Fail to fetch'));
            throw e;
        }
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
                //add status
                console.log('pend');
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                console.log('full');
                //remove status and add full
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
                //remove status and add reject
                console.log('err');
            });
    },

    // extraReducers: {
    //     [fetchUserData.fulfilled] : (state, action) => {
    //         console.log('full');
    //         if (action.payload?.author && action.payload?.title) {
    //             return [
    //                 ...state,
    //                 createBookWithId(action.payload, 'serverApi'),
    //             ];
    //         } else {
    //             return state;
    //         }
    //     },
    // },
});

export const { addBook, toggleFavorite, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
