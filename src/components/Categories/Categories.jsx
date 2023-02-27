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
  const allCategories = {
    English: ['General', 'Entertainment', 'Health', 'Sports', 'Technology'],
    French: ['Général', 'Divertissement', 'Santé', 'Sports', 'Technologie'],
  };

  let categories;
  if (language === 'en') {
    categories = allCategories.English;
  } else {
    categories = allCategories.French;
  }

  const [searchCategory, setSearchCategory] = useState('');

  // Use category in EN for search even if browsing in FR
  // Check if searchCategory is inside FR array and get index if it is
  // Then set category to equivalent in EN to enable search in API
  if (searchCategory && searchCategory !== 'Sports') {
    const indexOfFRCat = allCategories.French.indexOf(searchCategory);
    console.log('indexOfFRCat', indexOfFRCat);
    if (indexOfFRCat > -1) {
      setSearchCategory(allCategories.English[indexOfFRCat]);
      console.log('searchCategory', searchCategory);
    }
  }

  useEffect(() => {
    const fetchArticleByCategory = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${searchCategory}&sortBy=publishedAt&apiKey=1ce0e4832cb6431991be94fefd1c5b62`);
        setResults(response.data.articles);
        console.log(`Data by category ${searchCategory}`, response.data);
        console.log('searchCategory axios', searchCategory);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticleByCategory();
  }, [searchCategory]);

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
              to={`${country}/${category.toLowerCase()}`}
              onClick={() => { setSearchCategory(category); }}
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
