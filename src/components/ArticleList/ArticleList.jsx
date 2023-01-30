import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Article from '../Article/Article';

import './articleListStyles.scss';

function ArticleList() {
  const [results, setResults] = useState([]);

  const fetchArticle = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=1ce0e4832cb6431991be94fefd1c5b62');
      //   const response = await axios.get('http://api.mediastack.com/v1/news', {
      //     params: { access_key: '1ce0e4832cb6431991be94fefd1c5b62' },
      //   });
      setResults(response.data.articles);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      fetchArticle();
    },
    [],
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

export default React.memo(ArticleList);
