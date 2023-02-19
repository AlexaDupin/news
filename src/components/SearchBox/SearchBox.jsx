/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import './searchBoxStyles.scss';

function SearchBox({
  setResults,
}) {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const fetchArticle = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${search}&searchIn=title&language=en&sortBy=publishedAt&apiKey=1ce0e4832cb6431991be94fefd1c5b62`);
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

  return (
    <form
      className="searchbox"
      onSubmit={handleSubmit}
    >
      <label
        className="searchbox_field"
      >
        What are you looking for?
      </label>
      <input
        className="searchbox_field"
        type="text"
        value={search}
        onChange={handleChange}
      />
      <button
        className="searchbox_field"
        type="submit"
      >
        Rechercher

      </button>
    </form>
  );
}
SearchBox.propTypes = {
  setResults: PropTypes.func.isRequired,
};

SearchBox.defaultProps = {};

export default React.memo(SearchBox);
