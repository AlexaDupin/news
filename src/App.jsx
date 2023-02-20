import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import ArticleList from './components/ArticleList/ArticleList';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SearchBox from './components/SearchBox/SearchBox';
import Categories from './components/Categories/Categories';
import './styles/_reset.css';
import './styles/index.scss';

function App() {
  const [country, setCountry] = useState('us');
  const [language, setLanguage] = useState('en');
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <ScrollToTop />
      <Header
        setCountry={setCountry}
        setLanguage={setLanguage}
      />
      <Categories
        language={language}
      />
      <SearchBox
        setResults={setResults}
        language={language}
      />
      <Routes>
        <Route
          path="/"
          element={(
            <ArticleList
              country={country}
              results={results}
              setResults={setResults}
            />
          )}
        />
        <Route
          path="/fr"
          element={(
            <ArticleList
              country={country}
              results={results}
              setResults={setResults}
            />
          )}
        />
        <Route
          path="/fr/:category"
          element={(
            <ArticleList
              country={country}
              results={results}
              setResults={setResults}
            />
          )}
        />
      </Routes>

    </div>
  );
}

export default App;
