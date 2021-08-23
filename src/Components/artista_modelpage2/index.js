import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './artista_modelpage2.css';


class artista_modelpage2 extends Component{
    
    constructor(props){

        super(props);
            this.state = {
                title: props.info.title,
                outrostextos: props.info.outrostextos,
                entrevistasdestaque: props.info.entrevistasdestaque,
                galeriascomerciais: props.info.galeriascomerciais,
                eventoscoletivo1: props.info.eventoscoletivo1,
                eventoscoletivo2: props.info.eventoscoletivo2,
                premiosresidencias: props.info.premiosresidencias
        };
        
    }
    
    render(){
        return(
            <>     
            <div className='artista_banner'>
            </div>
            
            <section className="artista_main2 bodyText">   
            
                <div className="artista_main2_title buttonBack">   
                    <h2>{this.state.title} Página 2</h2>
                    <Link to="/artistas_pag1">
                        <button><img src="I_E_Arrow.png"/>Voltar</button>
                    </Link>
                </div>

                <div className='OutrosTextos_main buttonBody'>
                    <h1>Outros Textos</h1>
                    {this.state.outrostextos.map(i =>
                        <div className="textblockarrange">
                            <button onClick={() => { window.location.href = i.url }}><img src="link.png"/></button>
                            <h3>{i.title}</h3>
                        </div>
                    )}
                </div>

                <div className='EntrevistasDestaque_main buttonBody'>
                    <h1>Entrevistas em Destaque</h1>                    
                    {this.state.entrevistasdestaque.map(i =>
                        <div className="textblockarrange">
                           <button onClick={() => { window.location.href = i.url }}><img src="link.png"/></button>
                            <h3>{i.title}</h3>
                        </div>
                    )}
                </div>

                <div className='OutrasInformacoes_main buttonBody'>
                <div className='row mx-1 my-3'>
                    <h1>Ourtas Informações</h1>
                    <button className='mx-3 my-1'><img src="I_B_Arrow.png"/></button>
                </div>
                    <div className='GC mx-1'>
                        <h1>Galerias Comerciais</h1>
                        {this.state.galeriascomerciais.map(i =>
                            <div className="textblockarrange">
                                <button onClick={() => { window.location.href = i.url }}><img src="link.png"/></button>
                                <h3>{i.title}</h3>
                            </div>
                        )}
                    </div>

                    <div className='EC mx-1'>
                        <h1>Eventos / Coletivos</h1>
                            <div className="textblockarrange">
                            <Link to="/AtrocidadesMaravilhosas">
                                <button><img src="link.png"/></button>
                            </Link>
                                <h3>{this.state.eventoscoletivo1}</h3>
                            </div>

                            <div className="textblockarrange">
                                <button><img src="link.png"/></button>
                                <h3>{this.state.eventoscoletivo1}</h3>
                            </div>
                    </div>

                    <div className='PR mx-1'>
                        <h1>Prêmios e Residências</h1>
                        {this.state.premiosresidencias.map(i =>
                            <div className="textblockarrange">
                                <button onClick={() => { window.location.href = i.url }}><img src="link.png"/></button>
                                <h3>{i.title}</h3>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="row buttonNext2">
                    <div className='col-sm'>
                        <h1>Página 2/2</h1>
                    </div>
                    <div className='col-sm'>
                        <Link to="/artistas_pag1">
                            <button> <img src="I_E_Arrow.png"/> Voltar para Página Anterior</button>
                        </Link>
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export default artista_modelpage2;