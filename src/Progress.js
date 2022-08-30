import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Progress = ({ answerSheet, correctAnswerCount, score }) => {
  const [sec, setSec] = useState(0);
  const time = useRef(5);
  const timerId = useRef(null);
  const navigate = useNavigate();

  console.log(answerSheet);

  useEffect(() => {
    if (time.current >= 0) {
      timerId.current = setInterval(() => {
        setSec(time.current);
        time.current -= 1;
      }, 1000);
    } else {
      console.log('first');
      // <Link to="/Result"></Link>;
      navigate('/game/result', { state: { answerSheet: answerSheet, correctAnswerCount: correctAnswerCount, score: score } });
    }

    return () => clearInterval(timerId.current);
  }, [sec]);

  return (
    <div className="Progress">
      <ProgressBar now={sec} />
      <h2>타이머: {sec}</h2>
    </div>
  );
};

export default Progress;
