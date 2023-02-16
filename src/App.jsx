import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import ArticleList from './components/ArticleList/ArticleList';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './styles/_reset.css';
import './styles/index.scss';

function App() {
  const [country, setCountry] = useState('us');

  return (
    <div className="App">
      <ScrollToTop />
      <Header
        setCountry={setCountry}
        country={country}
      />

      <Routes>
        <Route
          path="/"
          element={(
            <ArticleList
              country={country}
            />
          )}
        />
        <Route
          path="/fr"
          element={(
            <ArticleList
              country={country}
            />
          )}
        />
      </Routes>

    </div>
  );
}

export default App;
