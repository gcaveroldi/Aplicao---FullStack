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

  
  useEffect(() => {
    
    const fetchVagas = async () => {
      
    };
    fetchVagas();
  }, []);

  const handleCandidatoAddSuccess = () => {
    fetchCandidatos(); 
  };

  const handleVagaAddSuccess = () => {
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
