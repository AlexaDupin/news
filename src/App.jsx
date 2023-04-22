import { React, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Page from './components/Page/Page';
import NotFound from './components/NotFound/NotFound';

import './styles/_reset.css';
import './styles/index.scss';

function App() {
  const [country, setCountry] = useState('us');
  const [language, setLanguage] = useState('en');

  return (
    <div className="App">
      <Header
        setCountry={setCountry}
        setLanguage={setLanguage}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/us" />} />
        <Route
          path="/us"
          element={(
            <Page language={language} country={country} />
            )}
        >
          <Route
            path=":category"
            element={(
              <Page />
            )}
          />
        </Route>
        <Route
          path="/fr"
          element={(
            <Page language={language} country={country} />
            )}
        >
          <Route
            path=":category"
            element={(
              <Page />
            )}
          />
        </Route>
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

    </div>
  );
}

export default App;
