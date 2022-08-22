import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useEffect, useRef, useState } from 'react';

const Progress = () => {
  const [sec, setSec] = useState(0);
  const time = useRef(5);
  const timerId = useRef(null);

  useEffect(() => {
    if (time.current >= 0) {
      timerId.current = setInterval(() => {
        setSec(time.current);
        time.current -= 1;
      }, 1000);
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
