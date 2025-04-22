import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase com suas credenciais
const supabaseUrl = 'https://olkqjueigvlhyexqpcdu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sa3FqdWVpZ3ZsaHlleHFwY2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMzYyODMsImV4cCI6MjA2MDkxMjI4M30.smgMJMXVdRQRY5m906Fo8fgAEQBEr6VlEmOimtLm18A';
const supabase = createClient(supabaseUrl, supabaseKey);

// Função para salvar os resultados do diagnóstico no Supabase
const saveResults = async (userData, results) => {
  try {
    // Salvar os dados do usuário e resultados
    const { data, error } = await supabase
      .from('diagnosticos')
      .insert([
        { 
          nome: userData.name,
          email: userData.email,
          telefone: userData.phone,
          ciclo_origem: results.cicloOrigem,
          ciclo_escolhidos: results.cicloEscolhidos,
          ciclo_realidade: results.cicloRealidade,
          ciclo_sabedoria: results.cicloSabedoria,
          data_criacao: new Date().toISOString()
        }
      ]);
    
    if (error) throw error;
    
    return { success: true, id: data[0].id };
  } catch (error) {
    console.error('Erro ao salvar no Supabase:', error);
    // Fallback para caso haja erro na conexão
    return { success: false, id: 'local-' + Date.now() };
  }
};

export { saveResults };