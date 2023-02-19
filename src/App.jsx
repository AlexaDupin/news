import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import ArticleList from './components/ArticleList/ArticleList';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SearchBox from './components/SearchBox/SearchBox';
import './styles/_reset.css';
import './styles/index.scss';

function App() {
  const [country, setCountry] = useState('us');
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <ScrollToTop />
      <Header
        setCountry={setCountry}
        country={country}
      />
      <SearchBox
        setResults={setResults}
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
      </Routes>

    </div>
  );
}

export default App;
