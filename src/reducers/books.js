import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialBooks = [
  { id: Math.floor(Math.random() * 100), title: 'The Hound Of Baskerville', category: 'Fiction' },
  { id: Math.floor(Math.random() * 100), title: 'The Poems of Narnia', category: 'Kids' },
  { id: Math.floor(Math.random() * 100), title: 'The Reign of Mughals', category: 'History' },
];

const bookReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== parseInt(action.id, 2));
    default:
      return state;
  }
};

export default bookReducer;
