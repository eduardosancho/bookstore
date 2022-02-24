import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBooks } from '../redux/books/books';
import createApp from '../redux/actions/createApp';
import NewBookForm from './NewBookForm';
import Library from './Library';

function BooksContainer() {
  const bookList = useSelector(selectBooks);
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(createApp());
        }}
      >
        log books
      </button>
      <Library
        bookList={bookList}
      />
      <hr />
      <NewBookForm />
    </>
  );
}

export default BooksContainer;
