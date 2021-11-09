import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="headholder">
      <ul className="mainlist">
        <li className="list-item main">BookStore CMS</li>
        <li className="list-item">
          <Link to="/books">Books</Link>
        </li>
        <li className="list-item">
          <Link to="/categories">CATEGORIES</Link>
        </li>

      </ul>
    </div>
  </header>
);

export default Header;
