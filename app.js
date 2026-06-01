const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ 
    mensagem: 'API rodando!',
    timestamp: new Date(),
    status: 'healthy'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('API rodando em http://localhost:' + PORT);
  console.log('CTRL+C para parar');
});
