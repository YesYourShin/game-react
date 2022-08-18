import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <Link to="/game">
        <button>Play Game</button>
      </Link>
    </div>
  );
};

export default Home;
