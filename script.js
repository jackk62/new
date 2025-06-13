document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputData = document.getElementById('inputData').value;

    // Aqui você pode processar os dados e gerar um gráfico
    const data = processData(inputData);
    updateChart(data);
});

let myChart;

function processData(input) {
    // Processar os dados de entrada e retornar um array
    // Exemplo simples: converter a string em um array de números
    return input.split(',').map(Number);
}

function updateChart(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    if (myChart) {
        myChart.destroy(); // Destruir o gráfico anterior se existir
    }

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map((_, index) => `Item ${index + 1}`),
            datasets: [{
                label: 'Dados Inseridos',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
