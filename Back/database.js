const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('atvfinalfsii', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5, 
    min: 0, 
    acquire: 30000, 
    idle: 10000 
  }
});

try {
  sequelize.authenticate();
  console.log('Conexão com o banco de dados estabelecida com sucesso.');
} catch (error) {
  console.error('Erro ao conectar-se ao banco de dados:', error);
}

module.exports = sequelize;
