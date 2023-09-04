


const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {




  const {nombre, propietario, email, fecha, sintomas, id} = paciente;


  const handleEliminar = () => {
    const respuesta = confirm('Desea eliminar este paciente');
    if(respuesta){
      eliminarPaciente(id);
    }
  }
  return (
    <div className="mx-5 my-10 shadow-md bg-white rounded-xl px-5 py-10">
    <p className=" text-gray-500 uppercase font-bold mb-3">
      Nombre:
      <span className=" font-normal normal-case ml-2">
        {nombre}</span>
    </p>
    <p className=" text-gray-500 uppercase font-bold mb-3">
      Propietario:
      <span className=" font-normal ml-2">{propietario}</span>
    </p>
    <p className=" text-gray-500  uppercase font-bold mb-3">
      Correo:
      <span className=" font-normal normal-case ml-2">{email}</span>
    </p>
    <p className=" text-gray-500 uppercase font-bold mb-3">
      Fecha Alta:
      <span className="font-normal normal-case ml-2">{fecha}</span>
    </p>
    <p className=" text-gray-500 uppercase font-bold mb-3">
      Síntomas:
      <span className="font-normal normal-case ml-2">{sintomas}</span>
    </p>

    <div className='flex justify-between mt-10'>
      <button 
        className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
      type='button'
      onClick={() => setPaciente(paciente)}>
        Editar
      </button>
      <button 
      className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
      type='button'
      onClick={handleEliminar}
      >
        Eliminar
      </button> 
    </div>
 
  </div>
  )
}

export default Paciente
