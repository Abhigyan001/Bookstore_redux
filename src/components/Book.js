import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TR = styled.tr`
  background: rgba(127, 129, 133, 0.431);
  color: white;
  text-align: center;
  width: 100%;
`;

export default function Books({ book }) {
  return (
    <TR>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </TR>
  );
}

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};
