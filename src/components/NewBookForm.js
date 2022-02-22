import React, { Component } from 'react';
import './NewBookForm.module.css';
// import propTypes from 'prop-types';

class NewBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Insert form validation
  };

  render() {
    const { title } = this.state;
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
