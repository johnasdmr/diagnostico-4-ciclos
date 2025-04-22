import React from 'react';
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
  // Format data for radar chart
  const radarData = [
    {
      subject: 'Origem',
      value: results.cicloOrigem,
      fullMark: 100
    },
    {
      subject: 'Relacionamentos',
      value: results.cicloEscolhidos,
      fullMark: 100
    },
    {
      subject: 'Realidade',
      value: results.cicloRealidade,
      fullMark: 100
    },
    {
      subject: 'Sabedoria',
      value: results.cicloSabedoria,
      fullMark: 100
    }
  ];
  
  // Format data for line chart
  const lineData = [
    { name: 'Origem', value: results.cicloOrigem },
    { name: 'Relacionamentos', value: results.cicloEscolhidos },
    { name: 'Realidade', value: results.cicloRealidade },
    { name: 'Sabedoria', value: results.cicloSabedoria }
  ];
  
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
          {insights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
        
        <div className="cta-container">
          <h3>Pronta para Transformar sua Vida?</h3>
          <p>
            O Método Gift foi criado para ajudar mulheres como você a superar bloqueios
            e viver com plenitude e propósito.
          </p>
          
          <a 
            href="https://metodo-gift.com.br/aula-master"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Participar da Aula Master
          </a>
          
          <p className="timer">
            <span>Evento começa em:</span>
            <span className="countdown">3 dias, 2 horas, 45 minutos</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsDashboard;
