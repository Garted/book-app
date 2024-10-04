import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const errorSlice = createSlice({
    name: 'error',
    initialState,

    reducers: {
        setError: (state, action) => {
            return [...state, action.payload];
        },
        clearError: () => {
            return [];
        },
    },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
