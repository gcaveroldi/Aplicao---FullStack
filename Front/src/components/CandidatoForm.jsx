import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CandidatoForm = ({ onAddSuccess }) => { 
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    telefone: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/candidatos', formData);
      alert('Candidato adicionado com sucesso!');
      setFormData({
        nome: '',
        endereco: '',
        telefone: ''
      });
      
      onAddSuccess();
    } catch (error) {
      console.error('Erro ao adicionar candidato:', error.message);
      alert('Erro ao adicionar candidato. Por favor, tente novamente.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nome do candidato"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formEndereco">
        <Form.Label>Endereço</Form.Label>
        <Form.Control
          type="text"
          placeholder="Endereço do candidato"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formTelefone">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Telefone do candidato"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Adicionar
      </Button>
    </Form>
  );
};

export default CandidatoForm;

