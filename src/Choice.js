import React, { useEffect, useState } from 'react';

const Choice = ({ cards, correct }) => {
  const [choice, setChoice] = useState([]);
  const arr = [correct];
  for (const card of cards) {
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
    if (id === correct.id) {
      console.log(`correct title : ${correct.title}, id : ${correct.id}, 정답입니다.`);
      return;
    }

    console.log('틀렸습니다');
    // console.log(JSON.stringify(e.target));
  };

  useEffect(() => {
    if (arr.length === 4) {
      getRdArr();
    }
  }, [correct]);

  return (
    <div className="Choice">
      {choice.map(it => {
        return (
          <p key={it.id} onClick={() => handleChoiceClick(it.id)}>
            {it.title}
          </p>
        );
      })}
      {/* <table>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>4</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

Choice.defaultProps = {
  cards: [],
  correct: [],
};

export default Choice;
