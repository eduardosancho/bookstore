import React, { useState } from 'react';
import './NewBookForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function NewBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Action');
  const dispatch = useDispatch();

  const submitBookToStore = (form) => {
    const newBook = {
      id: uuidv4(),
      title: form.title.value,
      author: form.author.value,
      category: form.category.value,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('Category');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitBookToStore(e.target);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>ADD NEW BOOK</p>
      <input
        id="title-field"
        type="text"
        placeholder="Book title"
        onChange={({ target }) => setTitle(target.value)}
        value={title}
        name="title"
      />
      <input
        id="author-field"
        type="text"
        placeholder="Author"
        onChange={({ target }) => setAuthor(target.value)}
        value={author}
        name="author"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        name="category"
      >
        <option defaultValue="Category">Category</option>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
}
