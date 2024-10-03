import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    author: '',
    onlyFavorite: false,
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
        setCheckFilter: (state) => {
            return { ...state, onlyFavorite: !state.onlyFavorite };
        },
        resetFilter: () => {
            return initialState;
        },
    },
});

export const { setTitleFilter, setCheckFilter, setAuthorFilter, resetFilter } =
    filterSlice.actions;
export const selectTitleFilter = (state) => state.filter;
export default filterSlice.reducer;
