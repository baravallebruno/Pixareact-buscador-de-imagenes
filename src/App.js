import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
// componentes
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';
import Header from './components/Header';
//multimedia
import videoMp4 from './img/Nebula.mp4';
import videoWebm from './img/Nebula.webm';
import poster from './img/universo.jpg';

function App() {

   const [ busqueda, guardarBusqueda ] = useState('travel people');
   const [ imagenes, guardarImagenes ] = useState([]);
   const [ paginaactual, guardarPaginaActual ] = useState(1);
   const [ totalpaginas, guardarTotalPaginas ] = useState(1);


   useEffect(() => {
    
    const consultarApi = async () => {

      if(busqueda === '') return;

      const imagenesPorPagina = 30;
      const encodeBusqueda = encodeURIComponent(busqueda);
      const APIKey = '6150709-8e656b119b38389a70a497b8a';
      const url = `https://pixabay.com/api/?key=${APIKey}&q=${encodeBusqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;
  
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);

      //calcular cantidad de paginas 
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina );
      guardarTotalPaginas(calcularTotalPaginas);

      const barraTop = document.querySelector('.top');
      barraTop.scrollIntoView({ behavior: 'smooth' })

    }
    consultarApi();
  
   }, [busqueda,paginaactual])

   //definir pagina anterior
  const paginaAnterior = () => {
    const nuevapaginaactual = paginaactual - 1
    if ( nuevapaginaactual === 0 ) return;   
    guardarPaginaActual(nuevapaginaactual);
  }

  const paginaSiguiente = () => {
    const nuevapaginaactual = paginaactual + 1
    if ( nuevapaginaactual > totalpaginas ) return;  
    guardarPaginaActual(nuevapaginaactual);
  }

  const primeraPagina = () => {
    guardarPaginaActual(1);
  }

  const ultimaPagina = () => {
    guardarPaginaActual(totalpaginas);
  }

  const noCabecera = '-top';
  
  return (
    <Fragment>
      <span className="top"></span>
      <Header 
      titulo="PixaReact"
      paginaactual={paginaactual}
      guardarBusqueda={guardarBusqueda}
      primeraPagina={primeraPagina}
      />

        <div className="container-fluid ">

            {(paginaactual === 1 ) ? (

              <div className="jumbotron mb-0 contenido__video">

                      <video className="video" autoPlay="autoplay" loop="loop" muted="muted" poster={poster}>
                        <source src={videoMp4} type="video/mp4" />
                        <source src={videoWebm} type="video/webm"/>
                      </video>                      

                      <div className="text-hero">
                      <h1 className="text-center mb-4 text-white">Todo un universo de imágenes GRATIS para descargar.</h1>
                      <p className="lead text-center mb-5 text-white">
                        Buscador creado en React, conectado a la API de Pixabay  - por Bruno Baravalle -
                      </p>
                      </div>

                      <Formulario
                          guardarBusqueda={guardarBusqueda}
                      />

                </div>

            ) : null}

              
              <div className={(paginaactual !== 1 ) ? `justify-content-center img-content${noCabecera}` : 'justify-content-center img-content' } >

                <ListadoImagenes 
                      imagenes={imagenes}
                />

              <div className="row justify-content-center pt-3 pb-5">

                  {( paginaactual > 2 ) ? (
                        
                        <button 
                        type="button"
                        className="btn btn-primary btn-lg mr-2"
                        onClick={primeraPagina}
                        > <i>{'<<'}</i> </button>

                    ) : null }


                      {( paginaactual === 1 ) ? (
                        
                      <button 
                            type="button"
                            className="btn btn-outline-primary btn-lg mr-2 disabled"
                        ><i>{'<'}</i> Anterior</button>
                      ):(
                      
                          <button 
                              type="button"
                              className="btn btn-primary btn-lg mr-2"
                              onClick={paginaAnterior}
                          ><i>{'<'}</i> Anterior</button>

                      )}

                      {( paginaactual === totalpaginas ) ? (
              
                        <button 
                          type="button"
                          className="btn btn-outline-primary btn-lg disabled"
                        > Siguiente <i>{'>'}</i></button>

                      ) : (

                        <button 
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={paginaSiguiente}
                        > Siguiente <i>{'>'}</i></button>

                      )}

                    {( totalpaginas > 2 && paginaactual !== totalpaginas) ? (
                        
                        <button 
                        type="button"
                        className="btn btn-primary btn-lg ml-2"
                        onClick={ultimaPagina}
                        ><i>{'>>'}</i></button>

                    ) : null }

                  
              </div>


              </div>
         </div>

    </Fragment>
    
  );
}

export default App;
