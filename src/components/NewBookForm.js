import React, { Component } from 'react';
import './NewBookForm.module.css';
import { v4 as uuidv4 } from 'uuid';
// import { useDispatch } from 'react-redux';
// import { addBook, removeBook } from '../redux/books/books';
// import propTypes from 'prop-types';

// const dispatch = useDispatch();

class NewBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.submitBookToStore(e.target);
    console.log(e.target.title.value);
    console.log(e.target.author.value);
  };

  submitBookToStore = (form) => {
    const newBook = {
      id: uuidv4(),
      title: form.title.value,
      author: form.author.value,
    };
    dispatch(addBook(newBook));
  }

  render() {
    const { title, author } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>ADD NEW BOOK</p>
        <input
          id="title-field"
          type="text"
          placeholder="Book title"
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <input
          id="author-field"
          type="text"
          placeholder="Author"
          value={author}
          name="author"
          onChange={this.onChange}
        />
        <select>
          <option defaultValue="Category">Category</option>
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    );
  }
}

export default NewBookForm;

// NewBookForm.propTypes = {
//   addBookProps: propTypes.func.isRequired,
// };
