// Exemplo de script para carregar dados dinamicamente
document.addEventListener('DOMContentLoaded', function() {
    const latestNewsList = document.getElementById('latestNewsList');

    // Simulação de dados que poderiam ser carregados de uma API
    const latestNews = [
        'Notícia 1: Detalhes importantes',
        'Notícia 2: Novidades do dia',
        'Notícia 3: Atualizações relevantes',
        'Notícia 4: Informações úteis',
        'Notícia 5: Últimas notícias'
    ];

    // Adicionar as últimas notícias à lista
    latestNews.forEach(news => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${news}</a>`;
        latestNewsList.appendChild(li);
    });
});
