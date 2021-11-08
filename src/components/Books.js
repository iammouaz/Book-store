import React from 'react';

const Books = () => (
  <>
    <div>
      <span>
        Action
      </span>
      <h2>
        The Hunger Games
      </h2>
      <a href>
        Suzanne Collins
      </a>
      <ul>
        <li>Comments</li>
        <li>Remove</li>
        <li>Edit</li>
      </ul>
    </div>
    <div>
      <h2>Add New Book</h2>
      <input placeholder="Book Title" />
      <button type="submit">ADD BOOK</button>
    </div>

  </>
);

export default Books;
