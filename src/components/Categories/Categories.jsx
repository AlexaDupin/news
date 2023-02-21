import React, { useState, useEffect } from 'react';
import {
  NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import axios from 'axios';

import './categoriesStyles.scss';

function Categories({
  language,
  setResults,
  country,
}) {
  const ENcategories = ['General', 'Entertainment', 'Health', 'Sports', 'Technology'];
  const FRcategories = ['Général', 'Divertissement', 'Santé', 'Sports', 'Technologie'];

  let categories;
  if (language === 'en') {
    categories = ENcategories;
  } else {
    categories = FRcategories;
  }

  const activeStyle = {
    textDecoration: 'underline',
  };

  const [searchCategory, setSearchCategory] = useState('');

  const fetchArticleByCategory = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${searchCategory}&sortBy=publishedAt&apiKey=1ce0e4832cb6431991be94fefd1c5b62`);
      setResults(response.data.articles);
      console.log('response.data', response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticleByCategory();
  }, [searchCategory]);

  return (
    <nav>
      <ul className="categories">
        {categories.map((category) => (
          <li className="category">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="appheader-button"
              to={`${country}/${category.toLowerCase()}`}
              onClick={() => { setSearchCategory(category); fetchArticleByCategory(); }}
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
  country: PropTypes.string.isRequired,
  setResults: PropTypes.func.isRequired,
};

Categories.defaultProps = {};

export default React.memo(Categories);
