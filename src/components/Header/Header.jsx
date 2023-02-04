import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { US, FR } from 'country-flag-icons/react/3x2';
import {
  NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import './headerStyles.scss';

function Header({
  setCountry,
  country,
}) {
  // Customise title depending on country
  const getTitle = () => {
    if (country === 'us') {
      return 'News directly from the US';
    }
    if (country === 'fr') {
      return 'Les actualités en France';
    }
  };

  return (
    <header>
      <nav>
        <ul className="header__flags">
          <li className="header__flag">
            <NavLink
              to="/"
              onClick={() => setCountry('us')}
            >
              <US title="United States" />
            </NavLink>
          </li>
          {' '}
          <li className="header__flag">
            <NavLink
              to="/fr"
              onClick={() => setCountry('fr')}
            >
              <FR title="France" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1 className="header__title">{getTitle()}</h1>
    </header>
  );
}

Header.propTypes = {
  setCountry: PropTypes.func.isRequired,
  country: PropTypes.string.isRequired,
};

Header.defaultProps = {};

export default React.memo(Header);
