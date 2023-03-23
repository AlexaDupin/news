import { React, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SearchBox from './components/SearchBox/SearchBox';
import Categories from './components/Categories/Categories';
import Results from './components/Results/Results';

import './styles/_reset.css';
import './styles/index.scss';

function App() {
  const [country, setCountry] = useState('us');
  const [language, setLanguage] = useState('en');
  const [results, setResults] = useState([]);
  // console.log('results', results);

  return (
    <div className="App">
      <ScrollToTop />
      <Header
        setCountry={setCountry}
        setLanguage={setLanguage}
      />
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
      <Routes>
        <Route path="/" element={<Navigate to="/us" />} />
        <Route
          path="/us"
          element={(
            <Results
              country={country}
              results={results}
              setResults={setResults}
              language={language}
            />
          )}
        />
        <Route
          path="/fr"
          element={(
            <Results
              country={country}
              results={results}
              setResults={setResults}
              language={language}
            />
          )}
        />
        <Route
          path="/fr/:category"
          element={(
            <Results
              country={country}
              results={results}
              setResults={setResults}
              language={language}
            />
          )}
        />
        <Route
          path="/us/:category"
          element={(
            <Results
              country={country}
              results={results}
              setResults={setResults}
              language={language}
            />
          )}
        />
      </Routes>

    </div>
  );
}

export default App;
