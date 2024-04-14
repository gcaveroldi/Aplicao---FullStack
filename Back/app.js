const express = require('express');
const cors = require('cors');
const app = express();
const candidatosRoutes = require('./routes/candidatos');
const vagasRoutes = require('./routes/vagas');
const sequelize = require('./database');
const inscricoesRoutes = require('./routes/inscricoes');

app.use(express.json());
app.use(cors());

app.use('/api/candidatos', candidatosRoutes);
app.use('/api/vagas', vagasRoutes);
app.use('/api/inscricoes', inscricoesRoutes);

sequelize.sync({force:true}).then(() => {
  console.log('Banco de dados sincronizado');
}).catch((error) => {
  console.error('Erro ao sincronizar banco de dados:', error);
});

app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');
});
