import React from 'react';
import PropTypes from 'prop-types';

const categories = [
  'All',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const CategoryFilter = ({
  changeFilter,
}) => {
  const selectCategory = React.useRef(null);
  return (
    <div className="category">
      <h2>Select Category</h2>
      <select ref={selectCategory} name="category" onChange={() => changeFilter(selectCategory.current.value)}>
        {categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
