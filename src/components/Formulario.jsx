import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

import './Styles.css';



const Formulario = ({guardarBusqueda}) => {

    const [ termino, guardarTermino ] = useState('');
    const [ error, guardarError ] = useState(false);

    const buscarImagenes = e => {
        e.preventDefault();

        //validar
        if(termino.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);
        

        //enviar el termino de busqueda hacia el componente principal
        guardarBusqueda(termino);

    }

    return (
        <form
            onSubmit={buscarImagenes}
        >
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-10 col-sm-12 p-0">
                        <div className="input-group input-group-lg">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Busca una imagen, ejemplo: futbol o café" 
                                aria-label="Busca una imagen, ejemplo: futbol o café" 
                                aria-describedby="basic-addon2"
                                onChange={e => guardarTermino(e.target.value)}
                            />

                            <div className="input-group-append">
                                <button 
                                    className="btn btn-primary" 
                                    type="submit"
                                >Buscar Imagenes</button>
                            </div>
                        </div>
                    </div>

                </div>
            
            {error ? <Error mensaje="Escribí una palabra para buscar" /> : null}
            
        </form>
    );
};

Formulario.propTypes = {
    guardarBusqueda: PropTypes.func.isRequired
}

export default Formulario;
