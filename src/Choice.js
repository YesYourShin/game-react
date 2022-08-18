import React, { useState } from 'react';

const Choice = ({ cards, correct }) => {
  const [choice, setChoice] = useState([]);
  const arr = [correct];
  for (const card of cards) {
    arr.push(card);
  }
  console.log(arr);

  const getRdArr = () => {
    const rdArr = [];
    for (let i = 0; i < 4; i++) {
      console.log(arr.length);
      const rdNum = Math.floor(Math.random() * arr.length);
      rdArr.push(arr[rdNum]);
      arr.splice(0, 1);
    }
    setChoice(rdArr);
  };
  if (arr.length === 4) getRdArr();
  return (
    <div className="Choice">
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
