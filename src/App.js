import React, { Fragment, useState, useEffect} from 'react';
import Formulario from './components/formulario';
import Cita from './components/Cita';
 


function App() {

  //citas en localStorage

  let citasInciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasInciales){
    citasInciales = [];
  }

  //Arreglo de citas

  const[citas, guardarCitas] = useState([]);

  // Usando useEffect para cuando las operaciones cambian. Siempre será una =>

  useEffect(() => {
    let citasInciales = JSON.parse(localStorage.getItem('citas'));

    console.log('Interaccion con citas');
    if(citasInciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }
    else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  });

  // Toma citas actuales y guarda nueva

  const crearCita = cita =>{
    guardarCitas([
      ...citas,
      cita
    ]);
  }
  
  // eliminar cita

  const eliminarCita = id =>{
    console.log(id);
    const nuevasCitas = citas.filter( cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  // mensaje condicional

  const titulo = citas.length === 0 ? 'no hay citas' : 'Administra tus citas';

  return (
  <Fragment>    


    <h1>Administrador de pacientes</h1>


      <div className = 'container'>
        <div className= 'row'> 
          <div className='one-half column'>
            <Formulario 
            crearCita = {crearCita}/>
          </div>

          <div className='one-half column'>
            <h2> {titulo}</h2>

            {
              citas.map(cita => (
                <Cita 
                key = {cita.id}
                cita = {cita}
                eliminarCita = {eliminarCita}
                />
              ))
            }
          </div>
        </div>


      </div>
  </Fragment>
  );
}



export default App;
