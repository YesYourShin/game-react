import React from 'react';

const Question = ({ correct }) => {
  return <div className="Question">{<h2>{correct.card_text}</h2>}</div>;
};

Question.defaultProps = {
  correct: { card_text: '' },
};

export default Question;
