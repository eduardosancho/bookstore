import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import deleteBookFromAPI from '../redux/actions/removeBook';
import styles from './BookItem.module.css';

export default function BookItem(props) {
  const { book } = props;

  const dispatch = useDispatch();
  return (
    <li className={styles.item}>
      <div className={styles.description}>
        <h4 className={styles.category}>{book.category}</h4>
        <h2 className={styles.title}>{book.title}</h2>
        <h3 className={styles.author}>{book.author}</h3>
        <ul className={styles.actions}>
          <li>
            <button
              type="button"
            >
              Comments
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteBookFromAPI(book.item_id));
              }}
            >
              Remove
            </button>
          </li>
          <li>
            <button
              type="button"
            >
              Edit
            </button>
          </li>
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
