// src/App.js
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import CandidatosTable from './components/CandidatosTable.jsx';
import VagasTable from './components/VagasTable';
import MyComponent from './components/MyComponent';
import CandidatoForm from './components/CandidatoForm'; 
import VagasForm from './components/VagasForm'; 
import InscriptionForm from './components/InscriptionForm';
import InscriptionsTable from './components/InscriptionsTable';

function App() {
  const [candidatos, setCandidatos] = useState([]);
  const [vagas, setVagas] = useState([]);

  // Fetching candidatos
  useEffect(() => {
    const fetchCandidatos = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/candidatos');
        if (!response.ok) {
          throw new Error('Erro ao obter os candidatos');
        }
        const data = await response.json();
        setCandidatos(data);
      } catch (error) {
        console.error('Erro ao obter os candidatos:', error.message);
      }
    };
    fetchCandidatos();
  }, []);

  // Placeholder for fetching vagas
  useEffect(() => {
    // Função similar para buscar vagas
    const fetchVagas = async () => {
      // Implement fetch logic here
    };
    fetchVagas();
  }, []);

  const handleCandidatoAddSuccess = () => {
    fetchCandidatos(); // Refresh candidatos after adding new one
  };

  const handleVagaAddSuccess = () => {
    // Refresh vagas after adding a new one
    // fetchVagas(); // Uncomment and implement fetchVagas
  };

  return (
    <div>
      <MyComponent />
      <Container>
        <h1>Adicionar Candidato</h1>
        <CandidatoForm onAddSuccess={handleCandidatoAddSuccess} />
        <h1>Candidatos</h1>
        <CandidatosTable candidatos={candidatos} />
        <h1>Adicionar Vaga</h1>
        <VagasForm onAddSuccess={handleVagaAddSuccess} />
        <h1>Vagas</h1>
        <VagasTable vagas={vagas} />
        <h1>Registrar Inscrição</h1>
        <InscriptionForm />
        <h1>Inscrições</h1>
        <InscriptionsTable />
      </Container>
    </div>
  );
}

export default App;
