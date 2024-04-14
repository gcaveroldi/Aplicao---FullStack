const Candidato_Vaga = require('../models/Candidato_Vaga');

exports.getAllInscricoes = async (req, res) => {
  try {
    const inscricoes = await Candidato_Vaga.findAll({
      include: [{ all: true }] 
    });
    res.status(200).json(inscricoes);
  } catch (error) {
    console.error('Erro ao buscar inscrições:', error);
    res.status(500).json({ message: 'Erro interno ao listar inscrições', error: error.message });
  }
};

exports.addInscricao = async (req, res) => {
  console.log("Recebendo dados para nova inscrição:", req.body);
  try {
    const { cand_cpf, pk_vaga_codigo } = req.body;
    const novaInscricao = await Candidato_Vaga.create({
      cand_cpf,
      pk_vaga_codigo,
      data_inscricao: new Date(),
      horario_inscricao: new Date().toLocaleTimeString(),
    });
    res.status(201).json(novaInscricao);
  } catch (error) {
    console.error('Erro ao adicionar inscrição:', error);
    res.status(500).json({ message: 'Erro ao adicionar inscrição', error: error.message });
  }
};

exports.updateInscricao = async (req, res) => {
  try {
    const { id } = req.params;
    const { cand_cpf, pk_vaga_codigo } = req.body;
    const inscricao = await Candidato_Vaga.findByPk(id);
    if (!inscricao) {
      return res.status(404).json({ message: 'Inscrição não encontrada' });
    }
    inscricao.cand_cpf = cand_cpf;
    inscricao.pk_vaga_codigo = pk_vaga_codigo;
    await inscricao.save();
    res.status(200).json(inscricao);
  } catch (error) {
    console.error('Erro ao atualizar inscrição:', error);
    res.status(500).json({ message: 'Erro interno ao atualizar inscrição', error: error.message });
  }
};

exports.deleteInscricao = async (req, res) => {
  try {
    const { id } = req.params;
    const inscricao = await Candidato_Vaga.findByPk(id);
    if (!inscricao) {
      return res.status(404).json({ message: 'Inscrição não encontrada' });
    }
    await inscricao.destroy();
    res.status(204).end();
  } catch (error) {
    console.error('Erro ao excluir inscrição:', error);
    res.status(500).json({ message: 'Erro interno ao excluir inscrição', error: error.message });
  }
};
