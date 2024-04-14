import React, { useState, useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const VagasTable = () => {
  const [vagas, setVagas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:4000/api/vagas');
        setVagas(response.data);
      } catch (error) {
        console.error('Erro ao realizar a requisição:', error);
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Carregando dados...</div>;
  }

  if (error) {
    return <div>Erro ao carregar dados. Por favor, tente novamente mais tarde.</div>;
  }

  return (
    <Container className="m-3 border">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Código</th>
          <th>Salário</th>
          <th>Cidade</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {vagas.length > 0 ? (
          vagas.map((vaga) => (
            <tr key={vaga.pk_vaga_codigo}>
              <td>{vaga.vaga_codigo}</td>
              <td>{vaga.vaga_salario}</td>
              <td>{vaga.vaga_cidade}</td>
              <td>{vaga.vaga_quantidade}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">Nenhuma vaga disponível</td>
          </tr>
        )}
      </tbody>
    </Table>
    </Container>
    
  );
};

export default VagasTable;
