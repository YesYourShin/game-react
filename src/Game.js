import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Choice from './Choice';
import Progress from './Progress';
import Question from './Question';

const Game = () => {
  const [correctCard, setCorrectCard] = useState();
  const [wrongCards, setWrongCards] = useState([]);
  const [answer, setAnswer] = useState(false);
  const [answerSheet, setAnswerSheet] = useState([]);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [score, setScore] = useState(0);

  const getData = async () => {
    const src = await axios.get('http://127.0.0.1:8000/play');
    setCorrectCard(src.data.correct[0]);
    // src.data.correct.map(it=>{
    //   return it
    // })
    setWrongCards(src.data.wrong);
    // console.log(`answerSheet: `, answerSheet);
  };

  useEffect(() => {
    setAnswer(false);
    if (answer === false) {
      getData();
    }
  }, [answer]);

  return (
    <div className="Game">
      <h2>Game</h2>
      <Progress answerSheet={answerSheet} correctAnswerCount={correctAnswerCount} score={score} />
      <h2>효과를 보고 몬스터 이름을 맞추시오.</h2>
      <h2>맞춘 정답 수: {correctAnswerCount}</h2>
      <Question correctCard={correctCard} />
      <Choice
        wrongCards={wrongCards}
        correctCard={correctCard}
        setAnswer={setAnswer}
        answerSheet={answerSheet}
        setAnswerSheet={setAnswerSheet}
        correctAnswerCount={correctAnswerCount}
        setCorrectAnswerCount={setCorrectAnswerCount}
        score={score}
        setScore={setScore}
      />
    </div>
  );
};

export default Game;
