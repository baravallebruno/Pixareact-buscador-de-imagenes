import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Styles.css';




const Etiqueta = ({dato}) => {


    const wordCapitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }


 

    return (
        <Fragment>   
        {dato.map(val =>{
            return (
            <button
                key={val}
                className="tag"
            >
                {wordCapitalize(val)} </button>  
            )})}
        </Fragment>
    );
};

Etiqueta.propTypes = {
    dato: PropTypes.array.isRequired
}

export default Etiqueta;