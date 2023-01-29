import { React } from 'react';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Article />
    </div>
  );
}

export default App;
