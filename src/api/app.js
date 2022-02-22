const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Olá mundo'))

app.listen(PORT, () => console.log(`Api rodando na porta ${PORT}`));