import { basicURL, appID } from './createApp';
import { ADD_BOOK } from '../books/books';

import { logOut } from './removeBook';

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const postBookToAPI = (newBook) => function (dispatch) {
  const postURL = `${basicURL}${appID}/books/`;

  fetch(postURL, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.text())
    .then((successMessage) => {
      dispatch(logOut(successMessage));
    });
  dispatch(addBook(newBook));
};

export default postBookToAPI;