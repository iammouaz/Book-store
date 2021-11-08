import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <ul>
        <li>BookStore CMS</li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>

      </ul>
    </div>
  </header>
);

export default Header;
