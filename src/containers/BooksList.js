/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { handleRemoveBook, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, handleRemoveBook, filter, changeFilter,
}) => {
  const filteredBooks = (filter !== 'All') ? books.filter(book => book.category === filter) : books;
  return (
    <div>
      <div className="headerContain">
        <header className="header">
          <h3>Bookstore CMS</h3>
          <h4>BOOKS</h4>
          <h4>CATEGORIES:</h4>
          <CategoryFilter changeFilter={changeFilter} />
        </header>
      </div>
      <div>
        {filteredBooks.map(book => (
          <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />
        ))}
      </div>
    </div>
  );
};

BooksList.defaultProps = {
  filter: 'All',
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string,
  handleRemoveBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const stateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const dispatchToProps = dispatch => ({
  handleRemoveBook: book => {
    dispatch(handleRemoveBook(book));
  },
  changeFilter: category => {
    dispatch(CHANGE_FILTER(category));
  },
});

export default connect(stateToProps, dispatchToProps)(BooksList);
