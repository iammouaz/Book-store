import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './UI/Form';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

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
