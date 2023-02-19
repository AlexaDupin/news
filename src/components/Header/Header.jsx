import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { US, FR } from 'country-flag-icons/react/3x2';
import {
  NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import './headerStyles.scss';

function Header({
  setCountry,
  setLanguage,
}) {
  const [title, setTitle] = useState('News directly from the US');

  const handleUS = () => {
    setCountry('us');
    setLanguage('en');
    setTitle('News directly from the US');
  };

  const handleFR = () => {
    setCountry('fr');
    setLanguage('fr');
    setTitle('Les actualités en France');
  };

  return (
    <header>
      <nav>
        <ul className="header__flags">
          <li className="header__flag">
            <NavLink
              to="/"
              onClick={handleUS}
            >
              <US title="United States" />
            </NavLink>
          </li>
          {' '}
          <li className="header__flag">
            <NavLink
              to="/fr"
              onClick={handleFR}
            >
              <FR title="France" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1 className="header__title">{title}</h1>
    </header>
  );
}

Header.propTypes = {
  setCountry: PropTypes.func.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

Header.defaultProps = {};

export default React.memo(Header);
