import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const VagasForm = ({ onAddSuccess }) => { // Adicionamos a prop onAddSuccess
  const [formData, setFormData] = useState({
    codigo: '',
    salario: '',
    cidade: '',
    quantidade: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/vagas', formData);
      alert('Vaga adicionada com sucesso!');
      setFormData({
        codigo: '',
        salario: '',
        cidade: '',
        quantidade: ''
      });
      // Chamamos a função onAddSuccess para indicar que a adição foi bem-sucedida
      onAddSuccess();
    } catch (error) {
      console.error('Erro ao adicionar vaga:', error.message);
      alert('Erro ao adicionar vaga. Por favor, tente novamente.');
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
      <Form.Group controlId="formCodigo">
        <Form.Label>Código</Form.Label>
        <Form.Control
          type="text"
          placeholder="Código da vaga"
          name="codigo"
          value={formData.codigo}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formSalario">
        <Form.Label>Salário</Form.Label>
        <Form.Control
          type="text"
          placeholder="Salário da vaga"
          name="salario"
          value={formData.salario}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formCidade">
        <Form.Label>Cidade</Form.Label>
        <Form.Control
          type="text"
          placeholder="Cidade da vaga"
          name="cidade"
          value={formData.cidade}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formQuantidade">
        <Form.Label>Quantidade</Form.Label>
        <Form.Control
          type="text"
          placeholder="Quantidade de vagas disponíveis"
          name="quantidade"
          value={formData.quantidade}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Adicionar
      </Button>
    </Form>
  );
};

export default VagasForm;
