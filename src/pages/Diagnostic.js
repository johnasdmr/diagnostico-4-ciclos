import React from 'react';
import DiagnosticForm from '../components/DiagnosticForm';
import { calculateResults, generateInsights } from '../services/calculationService';
import { saveResults } from '../services/supabase';

const Diagnostic = ({ onComplete }) => {
  const handleFormComplete = async (answers, userData) => {
    // Calculate results
    const results = calculateResults(answers);
    
    // Generate insights
    const { insights } = generateInsights(results);
    
    // Save to database
    try {
      await saveResults(userData, results);
    } catch (error) {
      console.error('Error saving results:', error);
    }
    
    // Complete the diagnostic
    onComplete(results, insights, userData);
  };
  
  return (
    <div className="diagnostic-page">
      <div className="header">
        <h1>Diagnóstico dos 4 Ciclos</h1>
        <p>
          Descubra quais ciclos emocionais estão bloqueando sua felicidade plena
        </p>
      </div>
      
      <DiagnosticForm onComplete={handleFormComplete} />
    </div>
  );
};

export default Diagnostic;