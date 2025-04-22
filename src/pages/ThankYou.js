import React, { useState, useEffect } from 'react';

const ThankYou = ({ userData }) => {
  const [timeLeft, setTimeLeft] = useState('');
  
  useEffect(() => {
    const eventDate = new Date('2025-04-25T20:00:00Z'); // Data e hora do evento
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = eventDate - now;
      if (timeDifference <= 0) {
        clearInterval(interval);
        setTimeLeft('Evento iniciado!');
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setTimeLeft(`${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`);
      }
    }, 1000); // Atualiza a cada 1 segundo
    return () => clearInterval(interval); // Limpeza do intervalo quando o componente for desmontado
  }, []);
  
  const whatsappGroupLink = 'http://chat.whatsapp.com/Kpe6j3oYi0pGy9tpDtGs51'; // Link para o grupo do WhatsApp
  
  return (
    <div className="thank-you-page">
      <div className="header">
        <h1>Obrigado, {userData && userData.name ? userData.name : 'visitante'}!</h1>
        <p>Seus resultados foram enviados para seu email.</p>
      </div>
      
      <div className="next-steps">
        <h2>Próximos Passos</h2>
        <p>
          Não perca a Aula Master do Método Gift, onde você aprenderá como
          transformar esses insights em ações concretas.
        </p>
        
        <div className="event-details">
          <div className="event-item">
            <span className="event-label">Data:</span>
            <span className="event-value">25 de Abril de 2025</span>
          </div>
          
          <div className="event-item">
            <span className="event-label">Horário:</span>
            <span className="event-value">20h (horário de Brasília)</span>
          </div>
          
          <div className="event-item">
            <span className="event-label">Local:</span>
            <span className="event-value">Online (link será enviado por email)</span>
          </div>
        </div>
        
        <div className="countdown-container">
          <h3>O evento começa em:</h3>
          <p className="countdown">{timeLeft}</p>
        </div>
        
        
          href="https://metodogift.com/"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Garantir Minha Vaga
        </a>
        
        <div className="whatsapp-group">
          <h3>Participe do nosso grupo no WhatsApp!</h3>
          <p>Para garantir sua vaga e receber os detalhes, clique abaixo e entre no grupo da live.</p>
          
            href={whatsappGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Acessar o Grupo do WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
