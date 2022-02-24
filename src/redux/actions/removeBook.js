import { basicURL, appID } from './createApp';
import { REMOVE_BOOK } from '../books/books';

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const deleteBookFromAPI = (bookID) => function (dispatch) {
  const deleteURL = `${basicURL}${appID}/books/${bookID}`;

  fetch(deleteURL, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: bookID }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.text())
    .then((successfulDelete) => {
      logOut(successfulDelete);
    });
  dispatch(removeBook(bookID));

};

export const logOut = (text) => {
  console.log(text);
};

export default deleteBookFromAPI;
