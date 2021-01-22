import React from 'react';
import styled from 'styled-components';

const INPUT = styled.input`
  padding: 7px;
  margin: 2% 3%;
  margin-left: -15%;
`;

const SELECT = styled.select`
  padding: 5px;
  background: green;
  color:white;
  margin-right: 2%;
`;

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: categories[0],
    };
  }

  render() {
    const { title, category } = this.state;
    return (
      <form className="inputForm">
        <INPUT type="text" value={title} />
        <SELECT name="category" value={category}>
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </SELECT>
        <button type="submit"> Submit </button>
      </form>
    );
  }
}

export default BooksForm;
