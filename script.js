// Dados para o gráfico 1 (Crescimento de vendas)
const dadosGrafico1 = [
  { data: '2023-01-01', vendas: 100 },
  { data: '2023-02-01', vendas: 120 },
  { data: '2023-03-01', vendas: 150 },
  { data: '2023-04-01', vendas: 130 },
  { data: '2023-05-01', vendas: 170 },
  { data: '2023-06-01', vendas: 160 },
];

// Dados para o gráfico 2 (Desempenho por regiões)
const dadosGrafico2 = [
  { regiao: 'Norte', vendas: 120 },
  { regiao: 'Sul', vendas: 150 },
  { regiao: 'Leste', vendas: 180 },
  { regiao: 'Oeste', vendas: 130 },
];

// Função para criar o gráfico
function criarGrafico(idCanvas, data, labels, tipo) {
  const ctx = document.getElementById(idCanvas).getContext('2d');
  const config = {
    type: tipo, // 'line', 'bar', etc.
    data: {
      labels: labels,
      datasets: [{
        label: 'Vendas',
        data: data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        }
      },
    }
  };
  return new Chart(ctx, config);
}

// Criando os gráficos iniciais
const grafico1 = criarGrafico('grafico1Canvas', dadosGrafico1.map(item => item.vendas), dadosGrafico1.map(item => item.data), 'line');
const grafico2 = criarGrafico('grafico2Canvas', dadosGrafico2.map(item => item.vendas), dadosGrafico2.map(item => item.regiao), 'bar');

// Aplicar filtro
const aplicarFiltroBtn = document.getElementById('aplicarFiltro');
aplicarFiltroBtn.addEventListener('click', () => {
  const dataFiltro = document.getElementById('filtroData').value;

  // Filtrar dados com base na data (exemplo simples de filtro)
  const dadosFiltrados1 = dadosGrafico1.filter(item => item.data === dataFiltro);
  const dadosFiltrados2 = dadosGrafico2.filter(item => item.regiao === dataFiltro);

  // Atualizar os gráficos com os dados filtrados
  grafico1.data.labels = dadosFiltrados1.map(item => item.data);
  grafico1.data.datasets[0].data = dadosFiltrados1.map(item => item.vendas);
  grafico1.update();

  grafico2.data.labels = dadosFiltrados2.map(item
