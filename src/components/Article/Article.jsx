import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './articleStyles.scss';

function Article() {
  const [article, setArticle] = useState({});
  console.log(article);

  const fetchArticle = async () => {
    try {
      const response = await axios.get('http://api.mediastack.com/v1/news', {
        params: { access_key: 'f1481ce8b6b86a98fa201458d366352f' },
      });
      // Update states with results
      setArticle(response.data);
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
    <div>
      <article>
        <a href="https://www.tmz.com/2020/08/04/rafael-nadal-us-open-tennis-covid-19-concerns/">
          <img src="https://imagez.tmz.com/image/fa/4by3/2020/08/04/fad55ee236fc4033ba324e941bb8c8b7_md.jpg" alt="" className="article__image" />
        </a>
        <p className="article__title">Rafael Nadal Pulls Out Of U.S. Open Over COVID-19 Concerns</p>
      </article>
      <article>
        <a href="https://www.tmz.com/2020/08/04/rafael-nadal-us-open-tennis-covid-19-concerns/">
          <img src="https://imagez.tmz.com/image/fa/4by3/2020/08/04/fad55ee236fc4033ba324e941bb8c8b7_md.jpg" alt="" className="article__image" />
        </a>
        <p className="article__title">Rafael Nadal Pulls Out Of U.S. Open Over COVID-19 Concerns</p>
      </article>
    </div>
  );
}
Article.propTypes = {};

Article.defaultProps = {};

export default React.memo(Article);
