import { React } from 'react';
import ArticleList from './components/ArticleList/ArticleList';
import Header from './components/Header/Header';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <ArticleList />
    </div>
  );
}

export default App;
