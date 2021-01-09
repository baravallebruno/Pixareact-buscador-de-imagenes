import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Error from './Error'

import './Styles.css';

const Busqueda = ({guardarBusqueda,primeraPagina}) => {

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
        primeraPagina();

    }


    return (

        
        <Fragment>
                <form 
                className="form-inline mb-2 ml-auto mr-3"
                onSubmit={buscarImagenes}
                >
                    <div className="input-group input-group-lg">
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Busca una imagen..." 
                            onChange={e => guardarTermino(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button 
                                className="btn btn-secondary" 
                                type="submit"
                            >Buscar</button>
                        </div>
                    </div>
                </form>

                {error ? <Error mensaje="Escribí una palabra para buscar" /> : null}

        </Fragment>

    );
};

Busqueda.propTypes = {
    guardarBusqueda: PropTypes.func.isRequired,
    primeraPagina: PropTypes.func.isRequired 
}

export default Busqueda;