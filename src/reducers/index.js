import { createStore, combineReducers } from 'redux';
import bookReducer from './books';
import filterBooks from './filter';

const newreducer = combineReducers({
  books: bookReducer,
  filter: filterBooks,
});
const store = createStore(newreducer);

export default store;
