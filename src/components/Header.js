import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header className="header">
    <div className="headholder">
      <ul className="mainlist">
        <li className="main">BookStore CMS</li>
        <li className="list-item">
          <Link to="/books">Books</Link>
        </li>
        <li className="list-item">
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <div className="userdiv">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  </header>
);

export default Header;
