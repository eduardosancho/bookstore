import React from 'react';
import propTypes from 'prop-types';
import styles from './BookItem.module.css';

export default function BookItem(props) {
  const { book } = props;
  return (
    <li className={styles.item}>
      <div className={styles.description}>
        <h4 className={styles.category}>{book.category}</h4>
        <h2 className={styles.title}>{book.title}</h2>
        <h3 className={styles.author}>{book.author}</h3>
        <ul className={styles.actions}>
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>
      <div className={styles.progress}>
        <div className={styles.pie} />
        <div className={styles.percentage}>
          <h5>
            {book.completedProgress}
            %
          </h5>
          <p>Completed</p>
        </div>
      </div>
      <div className={styles.update}>
        <p className={styles.label}>CURRENT CHAPTER</p>
        <p className={styles.currentChapter}>{book.currentChapter}</p>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
    </li>
  );
}

BookItem.propTypes = {
  book: propTypes.objectOf(String).isRequired,
};
