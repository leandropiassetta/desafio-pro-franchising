const express = require('express');
require('dotenv').config();
const routesClient = require('../routes/clientRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use('/clients', routesClient);

app.listen(PORT, () => console.log(`Api rodando na porta ${PORT}`));