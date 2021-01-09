import React from 'react';
import Etiqueta from './Etiqueta';
import PropTypes from 'prop-types';

import './Styles.css';


const Imagen = ({imagen}) => {

    //extrar las variables
    const {largeImageURL, likes, webformatURL, tags, comments} = imagen;
    
    const tagsNoSpace = tags.replace(/ /g, "");

    const tag = new Array(tagsNoSpace.split(","));
   
    
    return (
        
          
        <a 
            href={largeImageURL} 
            className="card"
            target="_blank"
            rel="noopener noreferrer"

        >
             
                    <img 
                        src={webformatURL} 
                        alt={tags} 
                        className="card-img-top"
                    />

                    <div className="card-text">
                        <p className="info">{
                            tag.map(dato =>(
                                <Etiqueta 
                                    dato={dato}
                                    key={dato}
                                />
                            ))
                        }</p>
                    
                        <div className="right">
                            <p className="mr-2">
                                
                                <i className="icon-like"></i>{likes}
                                
                            </p>
                            <p>
                                
                                <i className="icon-chat"></i>{comments}
                                
                            </p>
                        </div>
                    </div>  
                            
              
        </a>

        
    );
};

Imagen.propTypes = {
    imagen: PropTypes.object.isRequired
}

export default Imagen;