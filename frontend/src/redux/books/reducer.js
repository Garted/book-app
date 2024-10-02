import { ADD_BOOK, DELETE_BOOK, TOGGLE_FAVORITE } from './actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return [...state, action.payload];
        case DELETE_BOOK:
            return state;
        case TOGGLE_FAVORITE:
            return state;
        default:
            return state;
    }
};

export default reducer;
