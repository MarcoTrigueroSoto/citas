import React, {Fragment, useState} from 'react';


const Formulario = () => {
    //crear state en citas
    const [cita, actualizarcita] = useState({
        estudiante: '',
        Encargado: '',
        fecha: '',
        hora: '',
        sintomas: '' 
    })


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

    return ( <Fragment>
            <h2>Crear Citas</h2>

            <form>
                <label>Nombre estudiante</label>
                <input type='text' onChange={actualizarState} name='estudiante' value='estudiante' className= 'u-full-width' placeholder='Estudiante' />
                <label>Nombre Encargado</label>
                <input type='text' onChange={actualizarState} name='Encargado' value='Encargado'className= 'u-full-width' placeholder='Encargado' />
                <label>Fecha</label>
                <input type='date' onChange={actualizarState} name='fecha' value='fecha' className= 'u-full-width'/>
                <label>Hora salida</label>
                <input type='time' onChange={actualizarState} name='hora' value='hora' className= 'u-full-width'/>
                <label>Sintomas</label>
                <textarea className= 'u-full-width' onChange={actualizarState} name= 'sintomas' value= 'sintomas'>
                </textarea>

                <button type='button' className= 'u-full-width button-primary'>
                    Enviar
                </button>
                

            </form>
        </Fragment>);
}
 
export default Formulario;