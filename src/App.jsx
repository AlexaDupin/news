import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import ArticleList from './components/ArticleList/ArticleList';
import Header from './components/Header/Header';
import './styles/index.scss';

function App() {
  const [country, setCountry] = useState('us');

  return (
    <div className="App">
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
