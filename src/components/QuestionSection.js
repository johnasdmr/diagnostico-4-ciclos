import React from 'react';

const QuestionSection = ({ question, value, onChange }) => {
  const handleChange = (newValue) => {
    onChange(question.id, newValue);
  };
  
  return (
    <div className="question-section">
      <h3 className="question-text">{question.text}</h3>
      
      <div className="rating-container">
        <div className="rating-labels">
          <span>Discordo totalmente</span>
          <span>Concordo totalmente</span>
        </div>
        
        <div className="rating-options">
          {[1, 2, 3, 4, 5].map((rating) => (
            <div 
              key={rating} 
              className={`rating-option ${value === rating ? 'selected' : ''}`}
              onClick={() => handleChange(rating)}
            >
              {rating}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;