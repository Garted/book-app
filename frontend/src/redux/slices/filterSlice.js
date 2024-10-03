import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    author: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            return { ...state, title: action.payload };
        },
        setAuthorFilter: (state, action) => {
            return { ...state, author: action.payload };
        },
        resetFilter: (state) => {
            return initialState;
        },
    },
});

export const { setTitleFilter, resetFilter, setAuthorFilter } =
    filterSlice.actions;
export const selectTitleFilter = (state) => state.filter;
export default filterSlice.reducer;
