const Candidato = require('../models/Candidato.js');
const Vaga = require('../models/Vagas.js');
const Candidato_Vaga = require('../models/Candidato_Vaga.js');

exports.getAllCandidatos = async (req, res) => {
  try {
    const candidatos = await Candidato.findAll();
    res.status(200).json(candidatos);
  } catch (error) {
    console.error('Erro ao listar candidatos:', error);
    res.status(500).json({ message: 'Erro interno ao listar candidatos', error: error.message });
  }
};

exports.addCandidato = async (req, res) => {
  try {
    const { cand_cpf, cand_nome, cand_endereco, cand_telefone } = req.body;
    if (!cand_cpf || !cand_nome || !cand_endereco || !cand_telefone) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }
    const novoCandidato = await Candidato.create({ cand_cpf, cand_nome, cand_endereco, cand_telefone });
    res.status(201).json(novoCandidato);
  } catch (error) {
    console.error('Erro ao criar candidato:', error);
    res.status(500).json({ message: 'Erro ao criar candidato', error: error.message });
  }
};

exports.addCandidatoToVaga = async (req, res) => {
  const { candidatoId, vagaId } = req.body;
  try {
    const candidato = await Candidato.findByPk(candidatoId);
    const vaga = await Vaga.findByPk(vagaId);
    if (!candidato || !vaga) {
      return res.status(404).json({ message: 'Candidato ou vaga não encontrados' });
    }

    const inscricoes = await Candidato_Vaga.count({ where: { candidatoId } });
    if (inscricoes >= 3) {
      return res.status(400).json({ message: 'O candidato já se inscreveu em três vagas' });
    }

    const inscricao = await Candidato_Vaga.create({
      candidatoId,
      vagaId,
      data_inscricao: new Date(),
      horario_inscricao: new Date().toLocaleTimeString(),
    });
    res.status(201).json(inscricao);
  } catch (error) {
    console.error('Erro ao inscrever candidato na vaga:', error);
    res.status(500).json({ message: 'Erro ao inscrever candidato na vaga', error: error.message });
  }
};

exports.updateCandidato = async (req, res) => {
  const  { id }  = req.params; 
  const { cand_nome, cand_endereco, cand_telefone } = req.body;
  
  try {
    const candidato = await Candidato.findByPk(id);
    if (!candidato) {
      return res.status(404).json({ message: 'Candidato não encontrado' });
    }

    
    await candidato.update({ cand_nome, cand_endereco, cand_telefone });

    
    res.status(200).json(candidato);
  } catch (error) {
    console.error('Erro ao atualizar candidato:', error);
    res.status(500).json({ message: 'Erro ao atualizar candidato', error: error.message });
  }
};

exports.deleteCandidato = async (req, res) => {
  const { id } = req.params; 
  
  try {
    
    const candidato = await Candidato.findByPk(id);
    if (!candidato) {
      return res.status(404).json({ message: 'Candidato não encontrado' });
    }

    
    await candidato.destroy();

    
    res.status(200).json({ message: 'Candidato removido com sucesso' });
  } catch (error) {
    console.error('Erro ao remover candidato:', error);
    res.status(500).json({ message: 'Erro ao remover candidato', error: error.message });
  }
};
