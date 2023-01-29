import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { US, FR } from 'country-flag-icons/react/3x2';
import PropTypes from 'prop-types';

import './headerStyles.scss';

function Header() {
  return (
    <header>
      <nav className="header__flags">
        <US title="United States" className="header__flag" />
        <FR title="United States" className="header__flag" />
      </nav>
      <h1 className="header__title">News directly from the US</h1>
    </header>
  );
}
Header.propTypes = {};

Header.defaultProps = {};

export default React.memo(Header);
