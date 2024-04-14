import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InscriptionsTable() {
  const [inscriptions, setInscriptions] = useState([]);

  useEffect(() => {
    fetchInscriptions();
  }, []);

  const fetchInscriptions = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/inscricoes');
      setInscriptions(response.data);
    } catch (error) {
      console.error('Erro ao buscar inscrições:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/inscricoes/${id}`);
      fetchInscriptions();  // Atualizar a lista após excluir
    } catch (error) {
      console.error('Erro ao deletar inscrição:', error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>CPF do Candidato</th>
          <th>Código da Vaga</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {inscriptions.map((inscription, index) => (
          <tr key={index}>
            <td>{inscription.cand_cpf}</td>
            <td>{inscription.pk_vaga_codigo}</td>
            <td>
              <button onClick={() => handleDelete(inscription.id)}>Excluir</button>
              <button>Editar</button> {/* Implementar funcionalidade de edição se necessário */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InscriptionsTable;
