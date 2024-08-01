document.addEventListener('DOMContentLoaded', function() {
    console.log('Projeto final está funcionando!');

    const button = document.getElementById('fetch-message');
    const messageParagraph = document.getElementById('message');

    button.addEventListener('click', function() {
        fetch('http://localhost:3000/api/message')
            .then(response => response.json())
            .then(data => {
                messageParagraph.textContent = data.message;
            })
            .catch(error => {
                console.error('Erro ao buscar a mensagem:', error);
            });
    });
});
