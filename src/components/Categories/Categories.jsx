import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import './categoriesStyles.scss';

function Categories({
  language,
}) {
  const ENcategories = ['General', 'Entertainment', 'Health', 'Sports', 'Technology'];
  const FRcategories = ['Général', 'Divertissement', 'Santé', 'Sports', 'Technologie'];

  let categories;
  if (language === 'en') {
    categories = ENcategories.map((ENcategory) => (
      <li className="category">{ENcategory}</li>
    ));
  } else {
    categories = FRcategories.map((FRcategory) => (
      <li className="category">{FRcategory}</li>
    ));
  }

  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <nav>
      <ul className="categories">
        {categories.map((category) => (
          <li className="category">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="appheader-button"
              to={`fr/${category.props.children.toLowerCase()}`}
            >
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
Categories.propTypes = {
  language: PropTypes.string.isRequired,
};

Categories.defaultProps = {};

export default React.memo(Categories);

{ /* <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="appheader-button"
                to="/organism/profile"
            >
             </NavLink> */ }
