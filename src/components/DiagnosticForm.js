import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import QuestionSection from './QuestionSection';
import UserForm from './UserForm';

const DiagnosticForm = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [userData, setUserData] = useState({});
  const [showUserForm, setShowUserForm] = useState(false);
  
  // Questions for each cycle
  const questions = [
    // Ciclo da Origem
    { id: 'q1', text: 'Sinto que meu passado familiar ainda influencia negativamente minhas decisões atuais.' },
    { id: 'q2', text: 'Tenho dificuldade em perdoar pessoas que me magoaram no passado.' },
    { id: 'q3', text: 'Ainda carrego sentimentos de culpa ou ressentimentos de experiências passadas.' },
    
    // Ciclo dos Relacionamentos Escolhidos
    { id: 'q4', text: 'Percebo que repito padrões negativos em meus relacionamentos.' },
    { id: 'q5', text: 'Tenho dificuldade em estabelecer limites saudáveis com outras pessoas.' },
    { id: 'q6', text: 'Muitas vezes me sinto insatisfeita ou desvalorizada em meus relacionamentos.' },
    
    // Ciclo da Realidade
    { id: 'q7', text: 'Sinto que minha vida atual está distante do que eu realmente desejo.' },
    { id: 'q8', text: 'Tenho dificuldade em aceitar minha realidade atual e agir para transformá-la.' },
    { id: 'q9', text: 'Frequentemente me sinto sobrecarregada ou sem equilíbrio em minha vida.' },
    
    // Ciclo da Sabedoria
    { id: 'q10', text: 'Tenho dificuldade em aprender com meus erros e experiências passadas.' },
    { id: 'q11', text: 'Não consigo ver como minhas experiências difíceis contribuíram para meu crescimento.' },
    { id: 'q12', text: 'Sinto que ainda não encontrei um propósito ou significado maior em minha vida.' }
  ];
  
  // Current question based on step
  const currentQuestion = questions[currentStep - 1];
  
  // Handle answer change
  const handleAnswerChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };
  
  // Next step
  const handleNextStep = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowUserForm(true);
    }
  };
  
  // Previous step
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Handle user data change
  const handleUserDataChange = (newUserData) => {
    setUserData(newUserData);
  };
  
  // Submit form
  const handleSubmit = () => {
    onComplete(answers, userData);
  };
  
  // Determine which cycle the current question belongs to
  const getCurrentCycleTitle = () => {
    if (currentStep <= 3) {
      return 'Ciclo da Origem';
    } else if (currentStep <= 6) {
      return 'Ciclo dos Relacionamentos Escolhidos';
    } else if (currentStep <= 9) {
      return 'Ciclo da Realidade';
    } else {
      return 'Ciclo da Sabedoria';
    }
  };
  
  return (
    <div className="diagnostic-form">
      {!showUserForm ? (
        <>
          <ProgressBar currentStep={currentStep} totalSteps={questions.length} />
          
          <div className="cycle-title">
            <h2>{getCurrentCycleTitle()}</h2>
          </div>
          
          <QuestionSection
            question={currentQuestion}
            value={answers[currentQuestion.id]}
            onChange={handleAnswerChange}
          />
          
          <div className="navigation-buttons">
            {currentStep > 1 && (
              <button className="prev-button" onClick={handlePrevStep}>
                Anterior
              </button>
            )}
            
            <button
              className="next-button"
              onClick={handleNextStep}
              disabled={!answers[currentQuestion.id]}
            >
              {currentStep < questions.length ? 'Próxima' : 'Finalizar'}
            </button>
          </div>
        </>
      ) : (
        <UserForm
          userData={userData}
          onChange={handleUserDataChange}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default DiagnosticForm;