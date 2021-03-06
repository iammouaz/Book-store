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
    <div className="book-div flex">
      <div className="right flex">
        <div className="title">
          <span className="booktitle flex">{title}</span>
          <span className="author">{category}</span>
        </div>
        <div className="flex">
          <button className="li-buttons" type="button">Comments</button>
          <button className="li-buttons" onClick={handleRemoveBook} type="button">Remove</button>
          <button className="li-buttons" type="button">Edit</button>
        </div>
      </div>
      <div className="left flex">
        <div className="left flex" />
        <div className="wrapper" data-anim="base wrapper">
          <div className="circle" data-anim="base left" />
          <div className="circle" data-anim="base right" />
        </div>
        <div className="presentage flex">
          <span className="pres">
            100%
          </span>
          <span className="completed">
            Completed
          </span>
        </div>
        <div className="border flex">
          <span className="completed">Current Chapter</span>
          <span className="lesson">Chapter 17</span>
          <button className="remove" type="button">Update progress</button>

        </div>
      </div>
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
