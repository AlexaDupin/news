import React from 'react';
import PropTypes from 'prop-types';

import Article from '../Article/Article';

import './ResultsStyles.scss';

function Results({
  results,
  language,
}) {
  console.log(results);
  if (results.length !== 0) {
    return (
      <main className="articles__list">
        {results.map((article, index) => (
          <Article
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            title={article.title}
            url={article.link}
            image={article.media || null}
          />
        ))}
      </main>
    );
  } if (language === 'en') {
    return <p className="message">No results for your search</p>;
  } if (language === 'fr') {
    return <p className="message">Nous n&apos;avons pas trouvé de résultats</p>;
  }
}

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    media: PropTypes.string,
  })).isRequired,
  language: PropTypes.string.isRequired,
};

Results.defaultProps = {};

export default React.memo(Results);
