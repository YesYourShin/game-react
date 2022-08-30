import React from 'react';
import { useLocation } from 'react-router-dom';
// import './Result.css';

const Result = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h2>점수 : {state.score}</h2>
      <h2>맞춘 문제 : {state.correctAnswerCount}</h2>
      <h2>상세보기</h2>
      <div className="Question">
        {state.answerSheet.map(it => {
          return (
            <div key={it.id}>
              <h3>문제 : {it.question}</h3>
              {/* <h3>선택지 : {it.choice.title}</h3> */}
              {it.choice.map(cho => {
                console.log('cho', cho);
                console.log('it.myChoice', it.myChoice);
                // 정답도 객체에 넣어서 정답과 고른 정답을 비교하게
                if (it.correctAnswer === it.myChoice) {
                  if (it.myChoice === cho.title) {
                    return <button style={{ backgroundColor: '#00C73C' }}>{cho.title}</button>;
                  } else {
                    return <button>{cho.title}</button>;
                  }
                } else {
                  if (it.myChoice === cho.title) {
                    return <button style={{ backgroundColor: 'red' }}>{cho.title}</button>;
                  } else if (it.correctAnswer === cho.title) {
                    return <button style={{ backgroundColor: 'aqua' }}>{cho.title}</button>;
                  } else {
                    return <button>{cho.title}</button>;
                  }
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Result.defaultProps = {
  state: {},
};

export default Result;
