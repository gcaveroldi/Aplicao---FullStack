const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Candidato = require('./Candidato');
const Vaga = require('./Vagas');

const Candidato_Vaga = sequelize.define('Candidato_Vaga', {
  data_inscricao: {
    type: DataTypes.DATE,
    allowNull: false
  },
  horario_inscricao: {
    type: DataTypes.TIME,
    allowNull: false
  }
});

Candidato.belongsToMany(Vaga, { 
  through: Candidato_Vaga, 
  foreignKey: 'cand_cpf', 
  otherKey: 'pk_vaga_codigo' 
});
Vaga.belongsToMany(Candidato, { 
  through: Candidato_Vaga, 
  foreignKey: 'pk_vaga_codigo', 
  otherKey: 'cand_cpf' 
});

module.exports = Candidato_Vaga;

