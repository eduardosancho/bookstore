import { basicURL, appID } from './createApp';
import { REMOVE_BOOK } from '../books/books';

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const deleteBookFromAPI = (bookID) => function dispatch(dispatch) {
  const deleteURL = `${basicURL}${appID}/books/${bookID}`;

  fetch(deleteURL, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: bookID }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(removeBook(bookID));
};

export default deleteBookFromAPI;
