import { ADD_BOOK, DELETE_BOOK, TOGGLE_FAVORITE } from './actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return [...state, action.payload];
        case DELETE_BOOK:
            return state.filter((item) => item.id !== action.payload);
        case TOGGLE_FAVORITE:
            return state.map((item) =>
                item.id === action.payload
                    ? { ...item, isFavorite: !item.isFavorite }
                    : item
            );
        default:
            return state;
    }
};

export default reducer;
