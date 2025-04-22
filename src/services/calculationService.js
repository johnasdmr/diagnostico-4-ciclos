// Calculate scores for each cycle based on answers
const calculateResults = (answers) => {
    // Initialize results with default values
    const results = {
      cicloOrigem: 0,
      cicloEscolhidos: 0,
      cicloRealidade: 0,
      cicloSabedoria: 0
    };
    
    // Calculate scores for each cycle based on answers
    // For this example, we'll assume answers is an object with question IDs as keys
    // and values from 1-5 as values
    
    // Cycle 1: Origin
    if (answers.q1) results.cicloOrigem += answers.q1;
    if (answers.q2) results.cicloOrigem += answers.q2;
    if (answers.q3) results.cicloOrigem += answers.q3;
    // Normalize to a 0-100 scale
    results.cicloOrigem = Math.round((results.cicloOrigem / 15) * 100);
    
    // Cycle 2: Chosen Relationships
    if (answers.q4) results.cicloEscolhidos += answers.q4;
    if (answers.q5) results.cicloEscolhidos += answers.q5;
    if (answers.q6) results.cicloEscolhidos += answers.q6;
    // Normalize to a 0-100 scale
    results.cicloEscolhidos = Math.round((results.cicloEscolhidos / 15) * 100);
    
    // Cycle 3: Reality
    if (answers.q7) results.cicloRealidade += answers.q7;
    if (answers.q8) results.cicloRealidade += answers.q8;
    if (answers.q9) results.cicloRealidade += answers.q9;
    // Normalize to a 0-100 scale
    results.cicloRealidade = Math.round((results.cicloRealidade / 15) * 100);
    
    // Cycle 4: Wisdom
    if (answers.q10) results.cicloSabedoria += answers.q10;
    if (answers.q11) results.cicloSabedoria += answers.q11;
    if (answers.q12) results.cicloSabedoria += answers.q12;
    // Normalize to a 0-100 scale
    results.cicloSabedoria = Math.round((results.cicloSabedoria / 15) * 100);
    
    return results;
  };
  
  // Generate insights based on results
  const generateInsights = (results) => {
    // Find the lowest score
    const scores = [
      { cycle: 'cicloOrigem', score: results.cicloOrigem },
      { cycle: 'cicloEscolhidos', score: results.cicloEscolhidos },
      { cycle: 'cicloRealidade', score: results.cicloRealidade },
      { cycle: 'cicloSabedoria', score: results.cicloSabedoria }
    ];
    
    scores.sort((a, b) => a.score - b.score);
    const weakestCycle = scores[0].cycle;
    
    // Generate insights based on weakest cycle
    let insights = [];
    
    if (weakestCycle === 'cicloOrigem') {
      insights = [
        "Seu maior desafio está no Ciclo da Origem",
        "Eventos do passado ainda exercem forte influência sobre suas decisões atuais",
        "Trabalhar o perdão e a aceitação pode trazer grandes transformações para você"
      ];
    } else if (weakestCycle === 'cicloEscolhidos') {
      insights = [
        "Seu maior desafio está no Ciclo dos Relacionamentos Escolhidos",
        "Você pode estar reproduzindo padrões negativos em seus relacionamentos atuais",
        "Estabelecer limites saudáveis pode transformar sua forma de se relacionar"
      ];
    } else if (weakestCycle === 'cicloRealidade') {
      insights = [
        "Seu maior desafio está no Ciclo da Realidade",
        "Você pode estar tendo dificuldades em aceitar e lidar com sua realidade atual",
        "Trabalhar o equilíbrio entre aceitação e ação pode transformar sua vida"
      ];
    } else {
      insights = [
        "Seu maior desafio está no Ciclo da Sabedoria",
        "Você pode estar tendo dificuldades em integrar as lições do passado",
        "Desenvolver uma nova perspectiva sobre sua história pode trazer paz interior"
      ];
    }
    
    return { weakestCycle, insights };
  };
  
  export { calculateResults, generateInsights };