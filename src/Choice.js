import React, { useEffect, useState } from 'react';

const Choice = ({ wrongCards, correctCard, setAnswer }) => {
  const [choice, setChoice] = useState([]);
  const arr = [correctCard];
  for (const card of wrongCards) {
    arr.push(card);
  }
  // console.log(arr);

  const getRdArr = () => {
    const rdArr = [];
    console.log(arr);
    for (let i = 0; i < 4; i++) {
      // console.log(arr.length);
      const rdNum = Math.floor(Math.random() * arr.length);
      // console.log(rdNum);

      rdArr.push(arr[rdNum]);
      arr.splice(rdNum, 1);
    }
    setChoice(rdArr);
    console.log(rdArr);
    // console.log(choice);
  };

  const handleChoiceClick = id => {
    if (id === correctCard.id) {
      console.log(`correctCard title : ${correctCard.title}, id : ${correctCard.id}, 정답입니다.`);
      setAnswer(id);
      return;
    }

    console.log('틀렸습니다');
    // console.log(JSON.stringify(e.target));
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
          <p key={it.id} onClick={() => handleChoiceClick(it.id)}>
            {it.title}
          </p>
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
