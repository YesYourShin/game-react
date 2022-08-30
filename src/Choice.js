import React, { useEffect, useRef, useState } from 'react';

const Choice = ({ wrongCards, correctCard, setAnswer, answerSheet, setAnswerSheet, correctAnswerCount, setCorrectAnswerCount, score, setScore }) => {
  const [choice, setChoice] = useState([]);
  const arr = [correctCard];
  const qId = useRef(1);

  for (const card of wrongCards) {
    arr.push(card);
  }
  // console.log(arr);

  const getRdArr = () => {
    const rdArr = [];
    // console.log(arr);
    for (let i = 0; i < 4; i++) {
      // console.log(arr.length);
      const rdNum = Math.floor(Math.random() * arr.length);
      // console.log(rdNum);

      rdArr.push(arr[rdNum]);
      arr.splice(rdNum, 1);
    }
    setChoice(rdArr);
    // console.log(rdArr);
    // console.log(choice);
  };

  const handleChoiceClick = (title, id) => {
    if (id === correctCard.id) {
      // console.log(`correctCard title : ${correctCard.title}, id : ${correctCard.id}, 정답입니다.`);

      console.log('정답입니다');
      setCorrectAnswerCount(correctAnswerCount + 1);
      setScore(score + 1);
    } else {
      console.log('틀렸습니다');
      setScore(score - 1);
    }

    // console.log(JSON.stringify(e.target));
    setAnswer(true);
    // 왜 여기서 에러나지?
    // 배열에 저장한 객체를 앞에 추가하고 뒤에 새로운 객체를 추가하는 이런 게 아닌가?
    setAnswerSheet([...answerSheet, { id: qId.current++, question: correctCard.card_text, choice: choice, myChoice: title, correctAnswer: correctCard.title }]);
    // setAnswerSheet(...answerSheet, 1);

    return;
  };

  useEffect(() => {
    if (arr.length === 4) {
      getRdArr();
    }
  }, [correctCard]);

  return (
    <div className="Choice">
      {choice.map(it => {
        return (
          <button key={it.id} id="choice" onClick={() => handleChoiceClick(it.title, it.id)}>
            {it.title}
          </button>
        );
      })}
    </div>
  );
};

Choice.defaultProps = {
  wrongCards: [],
  correctCard: [],
};

export default Choice;
