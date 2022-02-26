import React from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from '../redux/books/books';
import NewBookForm from './NewBookForm';
import Library from './Library';

function BooksContainer() {
  const bookList = useSelector(selectBooks);
  return (
    <>
      <Library
        bookList={bookList}
      />
      <hr />
      <NewBookForm />
    </>
  );
}

export default BooksContainer;
