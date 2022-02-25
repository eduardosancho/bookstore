import React from 'react';
import propTypes from 'prop-types';
import BookItem from './BookItem';

function Library(props) {
  const { bookList } = props;

  return (
    <ul className="books-container">
      {bookList.length ? (
        bookList.map((book) => (
          <BookItem
            key={book.item_id}
            book={book}
          />
        ))
      ) : (
        <h3>Add the first book!</h3>
      )}
    </ul>
  );
}

Library.propTypes = {
  bookList: propTypes.arrayOf(Object).isRequired,
};

export default Library;
