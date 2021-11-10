import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';
import Form from './UI/Form';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="Books">
      <Form id="add-input" labelContent="ADD NEW BOOK" />

      {books.map((book) => (
        <Book key={book.id} book={book} category={book.category} />
      ))}
    </div>
  );
};

export default Books;
