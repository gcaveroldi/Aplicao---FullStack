const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Vaga = sequelize.define('Vagas', {
  pk_vaga_codigo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  vaga_codigo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vaga_salario: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  vaga_cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vaga_quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Vaga;
