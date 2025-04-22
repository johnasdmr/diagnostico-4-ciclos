import React from 'react';

const Introduction = ({ onStart }) => {
  return (
    <div className="introduction-page">
      <div className="header">
        <h1>Diagnóstico dos 4 Ciclos</h1>
        <p>Descubra o que está bloqueando sua felicidade e potencial</p>
      </div>

      <div className="introduction-content">
        <div className="what-is-section">
          <h2>O que é o Diagnóstico dos 4 Ciclos?</h2>
          <p>
            O Diagnóstico dos 4 Ciclos é uma ferramenta exclusiva desenvolvida pelo Método Gift 
            para ajudar mulheres a identificarem exatamente quais áreas da vida estão gerando 
            bloqueios emocionais e impedindo uma vida plena de propósito.
          </p>
          <p>
            Baseado em anos de pesquisa e experiência com milhares de mulheres, este diagnóstico 
            analisa quatro ciclos fundamentais que determinam nossa felicidade e realização:
          </p>
        </div>

        <div className="cycles-section">
          <div className="cycle-item">
            <h3>Ciclo da Origem</h3>
            <p>Como sua história familiar e experiências iniciais moldaram quem você é hoje.</p>
          </div>

          <div className="cycle-item">
            <h3>Ciclo dos Relacionamentos Escolhidos</h3>
            <p>Padrões que você repete nas suas conexões com parceiros, amigos e colegas.</p>
          </div>

          <div className="cycle-item">
            <h3>Ciclo da Realidade</h3>
            <p>Como você lida com sua situação atual e os desafios da vida cotidiana.</p>
          </div>

          <div className="cycle-item">
            <h3>Ciclo da Sabedoria</h3>
            <p>Sua capacidade de extrair significado das experiências e transformar dor em crescimento.</p>
          </div>
        </div>

        <div className="how-works-section">
          <h2>Como funciona?</h2>
          <ul>
            <li>Você responderá 12 perguntas cuidadosamente elaboradas (3 para cada ciclo)</li>
            <li>Leva apenas 5 minutos para completar o diagnóstico</li>
            <li>Ao final, você receberá um mapa visual dos seus ciclos e insights personalizados</li>
            <li>Identificaremos qual ciclo precisa de mais atenção para desbloquear sua felicidade</li>
          </ul>
        </div>

        <div className="start-button-container">
          <button onClick={onStart} className="start-button">
            Iniciar Meu Diagnóstico
          </button>
          <p className="privacy-note">
            Seus dados estão seguros e não serão compartilhados com terceiros.
          </p>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>O que dizem as mulheres que já fizeram o diagnóstico</h2>
        <div className="testimonials-container">
          <div className="testimonial-item">
            <p className="testimonial-text">
              "Este diagnóstico foi um divisor de águas para mim. Finalmente entendi 
              por que continuava repetindo os mesmos padrões nos relacionamentos."
            </p>
            <p className="testimonial-author">— Maria R., 42 anos</p>
          </div>

          <div className="testimonial-item">
            <p className="testimonial-text">
              "Descobri que meu Ciclo da Origem estava completamente bloqueado! 
              Após trabalhar nele, minha vida mudou completamente."
            </p>
            <p className="testimonial-author">— Ana C., 37 anos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;