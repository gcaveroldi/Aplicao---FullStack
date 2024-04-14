const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Candidato = sequelize.define('Candidato', {
  cand_cpf: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  cand_nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cand_endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cand_telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Candidato;
