import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../assets/breaking_news.jpg';

import './articleStyles.scss';

function Article({
  title,
  url,
  image,
}) {
  return (
    <div>
      <article>
        <a href={url}>
          <img src={image || defaultImage} alt="" className="article__image" />
        </a>
        <p className="article__title">{title}</p>
      </article>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  image: PropTypes.string,
};

Article.defaultProps = {
};

export default React.memo(Article);
