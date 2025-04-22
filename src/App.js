import React, { useState } from 'react';
import Introduction from './pages/Introduction';
import Diagnostic from './pages/Diagnostic';
import Results from './pages/Results';
import ThankYou from './pages/ThankYou';
import './styles.css';

function App() {
  const [currentPage, setCurrentPage] = useState('introduction');
  const [results, setResults] = useState(null);
  const [insights, setInsights] = useState([]);
  const [userData, setUserData] = useState({});
  
  const handleStartDiagnostic = () => {
    setCurrentPage('diagnostic');
  };
  
  const handleDiagnosticComplete = (calculatedResults, generatedInsights, userInfo) => {
    setResults(calculatedResults);
    setInsights(generatedInsights);
    setUserData(userInfo);
    setCurrentPage('results');
  };
  
  const handleViewThankYou = () => {
    setCurrentPage('thankyou');
  };
  
  return (
    <div className="App">
      {currentPage === 'introduction' && (
        <Introduction onStart={handleStartDiagnostic} />
      )}
      
      {currentPage === 'diagnostic' && (
        <Diagnostic onComplete={handleDiagnosticComplete} />
      )}
      
      {currentPage === 'results' && (
        <Results 
          results={results} 
          insights={insights} 
          userData={userData}
          onNext={handleViewThankYou}
        />
      )}
      
      {currentPage === 'thankyou' && (
        <ThankYou userData={userData} />
      )}
    </div>
  );
}

export default App;