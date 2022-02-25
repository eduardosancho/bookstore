import { basicURL, appID } from './createApp';
import { addBook } from './addBook';

const getBooks = () => function (dispatch) {
  const getURL = `${basicURL}${appID}/books/`;
  fetch(getURL)
    .then((res) => res.json())
    .then((data) => {
      const bookEntries = Object.entries(data);
      bookEntries.forEach((entry) => {
        const newBook = {};
        let attributes = [];
        [newBook.item_id, [attributes]] = [...entry];
        const tempTitle = attributes.title;
        const splitArray = tempTitle.split('&&&');
        [newBook.title, newBook.author] = splitArray;
        newBook.category = attributes.category;
        dispatch(addBook(newBook));
      });
    });
};

export default getBooks;
