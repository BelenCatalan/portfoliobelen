import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/App.scss';

function Menu() {
  return (
    <div className="header__div">
      <ul className="header__list">
        <li className="header__li">
          <Link to="/Home">Home</Link>
        </li>
        <li className="header__li">
          <Link to="/About">Sobre mi</Link>
        </li>
        <li className="header__li">
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li className="header__li">
          <Link to="/Contact">Contacto</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
