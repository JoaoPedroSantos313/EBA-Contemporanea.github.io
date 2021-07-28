import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './artista_modelpage2.css';


class artista_modelpage2 extends Component{
    
    constructor(props){

        super(props);
            this.state = {
                banner: props.info.banner,
                title: props.info.title,
                outrostextos: props.info.outrostextos,
                entrevistasdestaque: props.info.entrevistasdestaque,
                galeriascomerciais: props.info.galeriascomerciais,
                eventoscoletivos: props.info.eventoscoletivos,
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
                            <button><img src="link.png"/></button>
                            <h3>{i}</h3>
                        </div>
                    )}
                </div>

                <div className='EntrevistasDestaque_main buttonBody'>
                    <h1>Entrevistas em Destaque</h1>
                    {this.state.entrevistasdestaque.map(i =>
                        <div className="textblockarrange">
                            <button><img src="link.png"/></button>
                            <h3>{i}</h3>
                        </div>
                    )}
                </div>

                <div className='OutrasInformacoes_main buttonBody'>
                    <h1>Ourtas Informações</h1>
                    <div>
                        <h1>Galerias Comerciais</h1>
                        {this.state.galeriascomerciais.map(i =>
                            <div className="textblockarrange">
                                <button><img src="link.png"/></button>
                                <h3>{i}</h3>
                            </div>
                        )}
                    </div>

                    <div>
                        <h1>Eventos / Coletivos</h1>
                        {this.state.eventoscoletivos.map(i =>
                            <div className="textblockarrange">
                                <button><img src="link.png"/></button>
                                <h3>{i}</h3>
                            </div>
                        )}
                    </div>

                    <div>
                        <h1>Prêmios e Residências</h1>
                        {this.state.premiosresidencias.map(i =>
                            <div className="textblockarrange">
                                <button><img src="link.png"/></button>
                                <h3>{i}</h3>
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