import {
  URL, ApiId, GET_BOOK, GET_BOOK_SUCCESS, GET_BOOK_FAILURE,
} from './slice';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {
  data: [],
  loading: false,
  erro: null,
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_BOOK:
      return { ...state, loading: true };
    case GET_BOOK_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case GET_BOOK_FAILURE:
      return { ...state, loading: false, error: action.error };
    case ADD_BOOK: {
      fetch(`${URL}${ApiId}/books`, {
        method: 'POST',
        body: JSON.stringify({
          item_id: action.book.id,
          title: action.book.title,
          category: action.book.category,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return state;
    }
    case REMOVE_BOOK: {
      fetch(`${URL}${ApiId}/books/${action.id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const entries = Object.fromEntries(
        Object.entries(state.data).filter(([id]) => id !== action.id),
      );
      return { ...state, pending: false, data: entries };
    }
    default:
      return state;
  }
};

export default reducer;
