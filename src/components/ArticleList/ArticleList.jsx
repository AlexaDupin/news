import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import axios from 'axios';

import Article from '../Article/Article';

import './articleListStyles.scss';

function ArticleList({
  country,
  results,
  setResults,
}) {
  // To identify the page we are currently on
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  // FetchArticle on API depending on country
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&sortBy=publishedAt&apiKey=1ce0e4832cb6431991be94fefd1c5b62`);
        setResults(response.data.articles);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticle();
    // Refresh every 5 min and clear interval if on Home page
    if (currentPath === `/${country}`) {
      const interval = setInterval(fetchArticle, 300 * 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [country]);

  return (
    <main className="articles__list">
      {results.map(({
        id, title, url, urlToImage,
      }) => (
        <Article
          key={id}
          title={title}
          url={url}
          image={urlToImage}
        />
      ))}
    </main>
  );
}

ArticleList.propTypes = {
  country: PropTypes.string.isRequired,
  setResults: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
  })).isRequired,
};

export default React.memo(ArticleList);
