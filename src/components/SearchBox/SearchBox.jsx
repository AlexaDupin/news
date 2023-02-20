/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import './searchBoxStyles.scss';

function SearchBox({
  setResults,
  language,
}) {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const fetchArticle = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${search}&searchIn=title&language=${language}&sortBy=publishedAt&apiKey=1ce0e4832cb6431991be94fefd1c5b62`);
      setResults(response.data.articles);
      console.log('response.data', response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!search.trim()) {
      return;
    }
    fetchArticle();
    setSearch('');
  };

  const getLabel = () => {
    if (language === 'en') {
      return 'What are you looking for?';
    }
    if (language === 'fr') {
      return 'Que recherchez-vous ?';
    }
  };

  const getBtnText = () => {
    if (language === 'en') {
      return 'Search';
    }
    if (language === 'fr') {
      return 'Rechercher';
    }
  };

  return (
    <form
      className="searchbox"
      onSubmit={handleSubmit}
    >
      <label
        className="searchbox_field"
      >
        {getLabel()}
      </label>
      <input
        className="searchbox_field searchbox_input"
        type="text"
        value={search}
        onChange={handleChange}
      />
      <button
        className="searchbox_field searchbox_button"
        type="submit"
      >
        {getBtnText()}
      </button>
    </form>
  );
}
SearchBox.propTypes = {
  setResults: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

SearchBox.defaultProps = {};

export default React.memo(SearchBox);
