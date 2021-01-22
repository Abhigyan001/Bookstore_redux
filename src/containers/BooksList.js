/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { handleRemoveBook } from '../actions/index';

const BooksList = ({ book, handleRemoveBook }) => (
  <table className="table-main">
    <thead>
      <tr>
        <th className="row">Book ID</th>
        <th className="row">Title</th>
        <th className="row">Category</th>
      </tr>
    </thead>
    <tbody>
      {book.map(book => <Book key={Math.random() * 1000} book={book} handleRemoveBook={handleRemoveBook} />)}
    </tbody>
  </table>
);
BooksList.propTypes = {
  book: PropTypes.instanceOf(Array).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

const stateToProps = book => ({ book });

const dispatchToProps = dispatch => ({
  handleRemoveBook: book => {
    dispatch(handleRemoveBook(book));
  },
});

export default connect(stateToProps, dispatchToProps)(BooksList);