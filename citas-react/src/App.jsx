import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';
import {useState, useEffect} from 'react';
function App() {


  const [pacientes, setPacientes ] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);

  const [paciente, setPaciente] = useState({});
  
  // Cuando un useEffect, no tiene ninguna dependencia o dicho de otra forma, cuando el arreglo esta vació, quiere decir que solo se ejecutara una sola vez.


  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  // sumar();
 

  return (
    // Esto es un fragment
    <div className='container mx-auto mt-20'> 
      <Header 
      />
      <div className='mt-12 md:flex ml-4'>
        <Formulario
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
