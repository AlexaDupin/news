import React from 'react';
import PropTypes from 'prop-types';

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
          <img src={image} alt="" className="article__image" />
        </a>
        <p className="article__title">{title}</p>
      </article>
    </div>
  );
}
Article.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

Article.defaultProps = {};

export default React.memo(Article);
