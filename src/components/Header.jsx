import React from 'react';
import Busqueda from './Busqueda';
import PropTypes from 'prop-types';

import './Styles.css';


const Header = ({titulo,paginaactual,guardarBusqueda,primeraPagina}) => {

    const urlBehance = 'https://www.behance.net/baravallebruno';
    const urlLinkedin = 'https://www.linkedin.com/in/bruno-baravalle/';



    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="#!" className="navbar-brand">
                <span className="icon-camera"></span>
                {titulo}
            </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">

                    {( paginaactual > 1 ) ? (

                        <Busqueda 
                        guardarBusqueda={guardarBusqueda} 
                        primeraPagina={primeraPagina}
                        />  

                    ) : null} 

                    <ul className={( paginaactual === 1 ) ? 'navbar-nav ml-auto' : 'navbar-nav ml-2' }>
                
                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href={urlBehance}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon-behance"></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href={urlLinkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon-linkedin"></span>
                            </a>
                        </li>

                    </ul>

                </div>
        </nav>
    );
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired,
    paginaactual: PropTypes.number.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    primeraPagina: PropTypes.func.isRequired
}

export default Header;