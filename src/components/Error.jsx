import React from 'react';
import PropTypes from 'prop-types';


const Error = ({mensaje}) => {
    return (
        <div className="row justify-content-center error">	
            <p className="col-xl-4 mt-4 mb-4 p-2 text-center alert alert-dismissible alert-primary">{mensaje}</p>
        </div>
    );
};

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;