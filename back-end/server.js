const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Use o middleware CORS
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/message', (req, res) => {
    res.json({ message: 'Esta é uma mensagem do backend!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando na rota http://localhost:${port}`);
});
