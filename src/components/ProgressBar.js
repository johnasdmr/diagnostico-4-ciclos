import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = Math.round((currentStep / totalSteps) * 100);
  
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        <span className="progress-text">{progress}%</span>
      </div>
      <div className="step-indicator">
        Etapa {currentStep} de {totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;