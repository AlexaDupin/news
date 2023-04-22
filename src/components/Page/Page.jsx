import { React, useState } from 'react';
import PropTypes from 'prop-types';

import ScrollToTop from '../ScrollToTop/ScrollToTop';
import SearchBox from '../SearchBox/SearchBox';
import Categories from '../Categories/Categories';
import Results from '../Results/Results';

function Page({
  language,
  country,
}) {
  const [results, setResults] = useState([]);

  return (
    <>
      <ScrollToTop />

      <Categories
        language={language}
        setResults={setResults}
        country={country}
      />
      <SearchBox
        setResults={setResults}
        language={language}
        country={country}
      />
      <Results
        country={country}
        results={results}
        setResults={setResults}
        language={language}
      />
    </>
  );
}
Page.propTypes = {
  language: PropTypes.string,
  country: PropTypes.string,
};

Page.defaultProps = {
  language: 'en',
  country: 'us',
};

export default Page;
