import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import MediaQuery from 'react-responsive';
import deleteBookFromAPI from '../redux/actions/removeBook';
import styles from './BookItem.module.css';
import Pie from './progressCircle';

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default function BookItem(props) {
  const { book } = props;
  const randomChapter = getRandom(1, 11);

  const {
    author = 'No author registered',
    currentChapter = `Chapter ${randomChapter}`,
    completedProgress = randomChapter * 10,
  } = book;

  const dispatch = useDispatch();
  return (
    <li className={styles.item}>
      <div className={styles.description}>
        <h4 className={styles.category}>{book.category}</h4>
        <h2 className={styles.title}>{book.title}</h2>
        <h3 className={styles.author}>{author}</h3>
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
        <Pie
          percentage={parseInt(completedProgress, 10)}
          colour="purple"
        />
        <MediaQuery minWidth={860}>
          <div className={styles.percentage}>
            <h5>
              {completedProgress}
              %
            </h5>
            <p>Completed</p>
          </div>
        </MediaQuery>
      </div>
      <MediaQuery minWidth={650}>
        <div className={styles.update}>
          <p className={styles.label}>CURRENT CHAPTER</p>
          <p className={styles.currentChapter}>{currentChapter}</p>
          <button type="submit">UPDATE PROGRESS</button>
        </div>
      </MediaQuery>
    </li>
  );
}

BookItem.propTypes = {
  book: propTypes.objectOf(String).isRequired,
};
