import React from 'react';
import PropTypes from 'prop-types';

export default function Books({ book, handleRemoveBook }) {
  return (
    <tr className="allRow" key={book.id}>
      <td className="row">{book.id}</td>
      <td className="row">{book.title}</td>
      <td className="row">{book.category}</td>
      <td className="row">
        <button className="button3" type="submit" onClick={() => handleRemoveBook(book)}>
          Remove Book
        </button>
      </td>
    </tr>
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
