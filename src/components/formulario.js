import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
    //crear state en citas
    const [cita, actualizarcita] = useState({
        estudiante: '',
        Encargado: '',
        fecha: '',
        hora: '',
        sintomas: '',
    
    });

    const [error, actualizarError] = useState(false);


    //funcion que actualiza cada vez que e l usuario actualiza.
    const actualizarState = e =>{
        actualizarcita({
            ...cita,
            [e.target.name]: e.target.value,
        })
        console.log(e.target.value);
    }


    // Extraer valores
    const {estudiante, Encargado, fecha,hora, sintomas} = cita;

    // Enviar cita
    const submitCita = e => {
        
        e.preventDefault();
        
        // validation
        if(estudiante.trim() === '' || Encargado.trim() === '' || fecha.trim() === ''
        || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        
        actualizarError(false);

        // asignar ID
        cita.id = uuidv4();
        //crear citas

        crearCita(cita); 

        //Reiniciar el form

        actualizarcita({
            estudiante: '',
            Encargado: '',
            fecha: '',
            hora: '',
            sintomas: '',
        });

    }

    return ( <Fragment>
            <h2>Crear Citas</h2>


            { error? <p className='alerta-error'> Todos los campos son obligatorios</p>
            :null }

            <form onSubmit={submitCita}>

                <label>Nombre estudiante</label>
                <input type='text' onChange={actualizarState} name='estudiante' value={estudiante} className= 'u-full-width' placeholder='Estudiante' />
                <label>Nombre Encargado</label>
                <input type='text' onChange={actualizarState} name='Encargado' value={Encargado} className= 'u-full-width' placeholder='Encargado' />
                <label>Fecha</label>
                <input type='date' onChange={actualizarState} name='fecha' value={fecha} className= 'u-full-width'/>
                <label>Hora salida</label>
                <input type='time' onChange={actualizarState} name='hora' value={hora} className= 'u-full-width'/>
                <label>Sintomas</label>
                <textarea className= 'u-full-width' onChange={actualizarState} name= 'sintomas' value= {sintomas} placeholder='Sintomas'>
                </textarea>

                <button type='submit'  className= 'u-full-width button-primary'>
                    Enviar
                </button>
                

            </form>
        </Fragment>);
}
 

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired,
    
}

export default Formulario;