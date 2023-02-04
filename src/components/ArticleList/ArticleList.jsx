import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import Article from '../Article/Article';

import './articleListStyles.scss';

function ArticleList({
  country,
}) {
  const [results, setResults] = useState([]);

  const fetchArticle = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&sortBy=publishedAt&apiKey=1ce0e4832cb6431991be94fefd1c5b62`);
      setResults(response.data.articles);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch articles when country changes
  useEffect(
    () => {
      fetchArticle();
    },
    [country],
  );

  return (
    <div className="articles__list">
      {results.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          url={article.url}
          image={article.urlToImage}
        />
      ))}

    </div>
  );
}

ArticleList.propTypes = {
  country: PropTypes.string.isRequired,
};

export default React.memo(ArticleList);
