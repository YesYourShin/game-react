import './App.css';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import Result from './Result';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
