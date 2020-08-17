import React from 'react';

import '../stylesheets/App.scss';

function Footer() {
  return (
    <div className="header__div">
      <ul className="header__list footer__list">
        <li className="header__li">
          <a href="https://www.linkedin.com/in/belencatalan-lab/" target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </li>
        <li className="header__li">
          <a href="https://github.com/BelenCatalan" target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
        {/* <li className="header__li"> Contacto</li> */}
      </ul>
    </div>
  );
}

export default Footer;
