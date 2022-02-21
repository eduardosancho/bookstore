import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewBookForm from './NewBookForm';
import Library from './Library';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [
        {
          id: uuidv4(),
          category: 'Action',
          title: 'The Hunger Games',
          author: 'Suzanne Collins',
          completedProgress: '64',
          currentChapter: 'Chapter 17',
        },
        {
          id: uuidv4(),
          category: 'Science Fiction',
          title: 'Dune',
          author: 'Frank Herbert',
          completedProgress: '8',
          currentChapter: 'Chapter 3: "A Lesson Learned"',
        },
        {
          id: uuidv4(),
          category: 'Economy',
          title: 'Capital in the Twenty-First Century',
          author: 'Suzanne Collins',
          completedProgress: '0',
          currentChapter: 'Introduction',
        },
      ],
    };
  }

  render() {
    const { bookList } = this.state;
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
}

export default Books;
