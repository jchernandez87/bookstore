const GET_BOOK = 'GET_CURRENT_USER';
const GET_BOOK_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
const GET_BOOK_FAILURE = 'GET_CURRENT_USER_FAILURE';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const ApiId = 'zYq1hQ9zTaANzENDNGnR';

const fetchBooks = () => async (dispatch) => {
  dispatch({ type: GET_BOOK });
  const response = await fetch(`${URL}${ApiId}/books/`);
  const data = await response.json();
  return dispatch({ type: GET_BOOK_SUCCESS, data });
};

export {
  fetchBooks as default, URL, ApiId, GET_BOOK, GET_BOOK_SUCCESS, GET_BOOK_FAILURE,
};
