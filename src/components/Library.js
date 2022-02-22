import React from 'react';
import propTypes from 'prop-types';
import BookItem from './BookItem';

function Library(props) {
  const { bookList } = props;

  return (
    <ul>
      {bookList.map((book) => (
        <BookItem
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
}

Library.propTypes = {
  bookList: propTypes.arrayOf(Object).isRequired,
};

export default Library;
