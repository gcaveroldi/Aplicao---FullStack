import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

const CandidatosTable = () => {
  const [candidatos, setCandidatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/candidatos');
        if (response.status === 200) {
          setCandidatos(response.data);
        } else {
          throw new Error(`Falha ao buscar dados: Status ${response.status}`);
        }
      } catch (error) {
        console.error('Erro ao carregar os candidatos:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>CPF</th>
          <th>Nome</th>
          <th>Endereço</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {candidatos.map((candidato) => (
          <tr key={candidato.cand_cpf}>
            <td>{candidato.cand_cpf}</td>
            <td>{candidato.cand_nome}</td>
            <td>{candidato.cand_endereco}</td>
            <td>{candidato.cand_telefone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CandidatosTable;
