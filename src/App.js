import './App.css';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
