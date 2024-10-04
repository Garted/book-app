import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async () => {
        const response = await fetch(`http://localhost:4000/random-book`);
        const json = response.json();
        return json;
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
            .addCase(fetchUserData.pending, (state) => {
                console.log('loading');
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                console.log('success');
                return [...state, action.payload];
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                console.log('err');
            });
    },
});

export const { addBook, toggleFavorite, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
