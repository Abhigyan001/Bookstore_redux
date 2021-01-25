import { createStore, combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const newreducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});
const store = createStore(newreducer);

export default store;
