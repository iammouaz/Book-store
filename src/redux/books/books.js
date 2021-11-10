const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const API_KEY = ' sW1YVSOfHmlQfwXHUQlx';
const API = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`;

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state.filter((book) => book.id !== action.payload.id),
        action.payload,
      ];

    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.id !== action.payload),
      ];

    default:
      return state;
  }
};
