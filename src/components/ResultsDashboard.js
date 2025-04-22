import React, { useState, useEffect } from 'react';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from 'recharts';

const ResultsDashboard = ({ results, insights }) => {
  const [timeLeft, setTimeLeft] = useState('');
  
  useEffect(() => {
    const eventDate = new Date('2025-04-25T20:00:00Z'); // Data e hora do evento (25 de Abril às 20h)
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
        setTimeLeft(`${days} dias, ${hours} horas, ${minutes} minutos`);
      }
    }, 1000); // Atualiza a cada 1 segundo
    return () => clearInterval(interval); // Limpeza do intervalo quando o componente for desmontado
  }, []);

  // Verifique se os dados estão sendo passados corretamente
  if (!results || !insights) {
    return <div>Carregando os resultados...</div>;
  }

  // Format data for radar chart
  const radarData = [
    {
      subject: 'Origem',
      value: results.cicloOrigem || 0, // Defina um valor padrão para evitar problemas
      fullMark: 100
    },
    {
      subject: 'Relacionamentos',
      value: results.cicloEscolhidos || 0,
      fullMark: 100
    },
    {
      subject: 'Realidade',
      value: results.cicloRealidade || 0,
      fullMark: 100
    },
    {
      subject: 'Sabedoria',
      value: results.cicloSabedoria || 0,
      fullMark: 100
    }
  ];

  // Format data for line chart
  const lineData = [
    { name: 'Origem', value: results.cicloOrigem || 0 },
    { name: 'Relacionamentos', value: results.cicloEscolhidos || 0 },
    { name: 'Realidade', value: results.cicloRealidade || 0 },
    { name: 'Sabedoria', value: results.cicloSabedoria || 0 }
  ];

  // WhatsApp Group link
  const whatsappGroupLink = 'http://chat.whatsapp.com/Kpe6j3oYi0pGy9tpDtGs51'; // Link para o grupo do WhatsApp

  return (
    <div className="results-dashboard">
      <h2>Seus Resultados: Os 4 Ciclos</h2>
      
      <div className="charts-container">
        <div className="radar-chart">
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius={90} data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar
                name="Seu Perfil"
                dataKey="value"
                stroke="#FF2800"
                fill="#FF2800"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="line-chart">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={lineData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#FF2800"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="insights-container">
        <h3>Seus Insights Personalizados</h3>
        <ul>
          {insights && insights.length > 0 ? (
            insights.map((insight, index) => (
              <li key={index}>{insight}</li>
            ))
          ) : (
            <li>Nenhum insight disponível.</li>
          )}
        </ul>
        
        <div className="cta-container">
          <h3>Pronta para Transformar sua Vida?</h3>
          <p>
            O Método Gift foi criado para ajudar mulheres como você a superar bloqueios
            e viver com plenitude e propósito.
          </p>
          
          <a 
            href="https://metodogift.com/"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Participar da Aula Master
          </a>
          
          <div className="countdown-container">
            <p className="timer">
              <span>Evento começa em: </span>
              <span className="countdown">{timeLeft}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="whatsapp-group">
        <h3>Participe do nosso grupo no WhatsApp!</h3>
        <p>Para garantir sua vaga e receber os detalhes, clique abaixo e entre no grupo da live.</p>
        
        <a 
          href={whatsappGroupLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Acessar o Grupo do WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ResultsDashboard;
