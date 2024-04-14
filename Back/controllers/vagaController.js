const Vaga = require('../models/Vagas.js');

exports.getAllVagas = async (req, res) => {
  try {
    const vagas = await Vaga.findAll();
    res.status(200).json(vagas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

exports.addVaga = async (req, res) => {
  try {
    const { vaga_codigo, vaga_salario, vaga_cidade, vaga_quantidade } = req.body;
    if (!vaga_codigo || !vaga_salario || !vaga_cidade || !vaga_quantidade) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }
    const novaVaga = await Vaga.create({ vaga_codigo, vaga_salario, vaga_cidade, vaga_quantidade });
    res.status(201).json(novaVaga);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

exports.updateVaga = async (req, res) => {
  try {
    const { id } = req.params;
    const { vaga_codigo, vaga_salario, vaga_cidade, vaga_quantidade } = req.body;
    const vaga = await Vaga.findByPk(id);
    if (!vaga) {
      return res.status(404).json({ message: 'Vaga não encontrada' });
    }
    await Vaga.update({ vaga_codigo, vaga_salario, vaga_cidade, vaga_quantidade }, { where: { id } });
    res.status(200).json({ message: 'Vaga atualizada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

exports.deleteVaga = async (req, res) => {
  try {
    const { id } = req.params;
    const vaga = await Vaga.findByPk(id);
    if (!vaga) {
      return res.status(404).json({ message: 'Vaga não encontrada' });
    }
    await Vaga.destroy({ where: { id } });
    res.status(200).json({ message: 'Vaga excluída com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

