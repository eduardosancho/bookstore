import { v4 as uuidv4 } from 'uuid';

export const ADD_BOOK = 'bookStore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    item_id: uuidv4(),
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    completedProgress: '64',
    currentChapter: 'Chapter 17',
  },
  {
    item_id: uuidv4(),
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    completedProgress: '8',
    currentChapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    item_id: uuidv4(),
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    completedProgress: '0',
    currentChapter: 'Introduction',
  },
];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export const selectBooks = (state) => state.booksReducer;

export default reducer;
