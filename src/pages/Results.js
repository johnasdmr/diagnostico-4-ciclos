import React from 'react';
import ResultsDashboard from '../components/ResultsDashboard';

const Results = ({ results, insights, userData }) => {
  return (
    <div className="results-page">
      <div className="header">
        <h1>Seus Resultados Personalizados</h1>
        <p>Olá, {userData.name}! Aqui está seu mapa dos 4 Ciclos.</p>
      </div>
      
      <ResultsDashboard results={results} insights={insights} />
      
      <div className="share-container">
        <h3>Compartilhe seus resultados</h3>
        <div className="share-buttons">
          <button className="share-button whatsapp">
            Compartilhar no WhatsApp
          </button>
          <button className="share-button facebook">
            Compartilhar no Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;