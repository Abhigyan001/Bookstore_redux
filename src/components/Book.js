import React from 'react';
import PropTypes from 'prop-types';

export default function Books({ book, handleRemoveBook }) {
  return (
    <div className="books" key={book.id}>
      <div className="left-side">
        <h5 className="category">{book.category}</h5>
        <h2 className="title">{book.title}</h2>
        <div className="actions">
          <button type="button" disabled>Comments</button>
          <button type="button" disabled>Edit</button>
        </div>
      </div>
      <div id="middle">
        <div className="progressbar" />
        <div className="percent">
          <h1 className="percentage">64%</h1>
          <h4 className="completed">Completed </h4>
        </div>
      </div>
      <div className="right-side">
        <button type="button" className="button1" onClick={() => handleRemoveBook(book)}>
          Remove Book
        </button>
      </div>
    </div>
  );
}

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
