import React, { useState } from 'react';
import axios from 'axios';

function InscriptionForm({ onAddSuccess }) {
  const [candCpf, setCandCpf] = useState('');
  const [vagaCodigo, setVagaCodigo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/inscricoes', {
        cand_cpf: candCpf,
        pk_vaga_codigo: vagaCodigo
      });
      onAddSuccess();
      console.log('Inscrição adicionada:', response.data);
    } catch (error) {
      console.error('Erro ao adicionar inscrição:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <div className="form-group">
        <label htmlFor="candCpf">CPF do Candidato:</label>
        <input 
          type="text" 
          id="candCpf" 
          className="form-control" 
          value={candCpf} 
          onChange={e => setCandCpf(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="vagaCodigo">Código da Vaga:</label>
        <input 
          type="text" 
          id="vagaCodigo" 
          className="form-control" 
          value={vagaCodigo} 
          onChange={e => setVagaCodigo(e.target.value)} 
          required 
        />
      </div>
      <button type="submit" className="btn btn-primary">Inscrever Candidato</button>
    </form>
  );
  
  
}

export default InscriptionForm;
