import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Choice from './Choice';
import Question from './Question';

const Game = () => {
  const [correct, setCorrect] = useState();
  const [cards, setCards] = useState([]);

  const getData = async () => {
    const src = await axios.get('http://127.0.0.1:8000/play');
    setCorrect(src.data.correct[0]);
    // src.data.correct.map(it=>{
    //   return it
    // })
    setCards(src.data.wrong);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Game">
      <h2>Game</h2>
      <h2>효과를 보고 몬스터 이름을 맞추시오.</h2>
      <Question correct={correct} />
      <Choice cards={cards} correct={correct} />
    </div>
  );
};

export default Game;
