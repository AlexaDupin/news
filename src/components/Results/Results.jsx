import React from 'react';
import PropTypes from 'prop-types';

import ArticleList from '../ArticleList/ArticleList';

import './ResultsStyles.scss';

function Results({
  results,
  country,
  setResults,
  language,
}) {
  if (results.length !== 0) {
    return (
      <ArticleList
        country={country}
        results={results}
        setResults={setResults}
      />
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
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string,
  })).isRequired,
  country: PropTypes.string.isRequired,
  setResults: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

Results.defaultProps = {};

export default React.memo(Results);
