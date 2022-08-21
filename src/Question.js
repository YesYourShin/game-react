import React from 'react';

const Question = ({ correctCard }) => {
  return <div className="Question">{<h2>{correctCard.card_text}</h2>}</div>;
};

Question.defaultProps = {
  correctCard: { card_text: '' },
};

export default Question;
