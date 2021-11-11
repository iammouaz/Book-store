import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const { id, title, category } = book;
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-div">
      <div className="right">
        <div className="title">
          <span className="booktitle">{title}</span>
          <span className="author">{category}</span>
        </div>
        <div className="buttons">
          <button className="li-buttons" type="button">Comments</button>
          <button className="li-buttons" onClick={handleRemoveBook} type="button">Remove</button>
          <button className="li-buttons" type="button">Edit</button>
        </div>
      </div>
      <button className="remove" type="button">Remove</button>

    </div>
  );
};

Book.defaultProps = {
  book: {
    id: '',
    title: '',
    category: '',
  },
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
  }),
};

export default Book;
