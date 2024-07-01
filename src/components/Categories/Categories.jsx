import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {
  NavLink, useNavigate,
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
    English: ['news', 'entertainment', 'travel', 'sport', 'tech'],
    French: ['actualités', 'divertissement', 'voyage', 'sport', 'technologies'],
  };

  let categories;
  if (language === 'en') {
    categories = allCategories.English;
  } else {
    categories = allCategories.French;
  }

  const [searchCategory, setSearchCategory] = useState('news');

  // Use category in EN for search even if browsing in FR
  // Check if searchCategory is inside FR array and get index if it is
  // Then set category to equivalent in EN to enable search in API
  if (searchCategory && searchCategory !== 'sport') {
    const indexOfFRCat = allCategories.French.indexOf(searchCategory);
    console.log(indexOfFRCat);
    if (indexOfFRCat > -1) {
      console.log('searchCategory', searchCategory);
      setSearchCategory(allCategories.English[indexOfFRCat]);
      console.log('searchCategory', searchCategory);
    }
  }

  useEffect(() => {
    console.log('searchCategory', searchCategory);
    console.log('country', country);

    const fetchArticleByCategory = async () => {
      try {
        // const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${searchCategory}&sortBy=publishedAt&apiKey=1ce0e4832cb6431991be94fefd1c5b62`);
        const response = await axios.get(`https://api.newscatcherapi.com/v2/latest_headlines?countries=${country}&lang=${language}&topic=${searchCategory}&when=1d`, {
          headers: {
            'x-api-key': process.env.VITE_API_KEY,
          },
        });
        setResults(response.data.articles);
        console.log(`Data by category ${searchCategory}`, response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticleByCategory();
  }, [searchCategory, language]);

  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <nav>
      <ul className="categories">
        {categories.map((category) => (
          <li
            className="category"
            key={category.toString()}
          >
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to={`${category.toLowerCase()}`}
              onClick={() => { setSearchCategory(category.toLowerCase()); }}
            >
              {category.toUpperCase()}
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
