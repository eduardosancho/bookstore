import { basicURL, appID } from './createApp';
import { ADD_BOOK } from '../books/books';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const postBookToAPI = (newBook) => function dispatch(dispatch) {
  const postURL = `${basicURL}${appID}/books/`;
  const bookCopy = { ...newBook };
  bookCopy.title = `${bookCopy.title}&&&${bookCopy.author}`;

  fetch(postURL, {
    method: 'POST',
    body: JSON.stringify(bookCopy),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(addBook(newBook));
};

export default postBookToAPI;
