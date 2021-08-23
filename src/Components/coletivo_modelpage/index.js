import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider';
import './coletivo_modelpage.css';

class coletivo_modelpage extends Component{
    
    constructor(props){

        super(props);
            this.state = {
                title: props.info.title,
                participantes: props.info.participantes,
                sobre_title: props.info.sobre_title,
                sobre: props.info.sobre,
                sobre_assing: props.info.sobre_assing,
                galeria: props.info.galeria,
                links: props.info.links
        };
        
    }
    
    render(){
        return(
            <>     
            <div className='coletivoBanner'>
            </div>
            
            <section className="artista_main2 bodyText">   
            
                <div className="artista_main2_title buttonBack my-4">   
                    <h2>Participantes</h2>

                    <Link to="/artistas_pag1">
                        <button><img src="I_E_Arrow.png"/>Voltar</button>
                    </Link>
                </div>

                <div>
                    {this.state.participantes.map(i =>
                        <div>
                           <a href={i.url}><h3>{i.title}</h3></a>
                        </div>
                    )}
                </div>

                <div className='OutrosTextos_main buttonBody'>
                    <h1>Sobre</h1>
                    <h3>{this.state.sobre_title}</h3>
                    <p>{this.state.sobre}</p>
                    <h3>{this.state.sobre_assing}</h3>
                </div>

                <div className='EntrevistasDestaque_main buttonBody'>
                    <h1>Galeria</h1>                    
                    <Slider img_slider={this.state.galeria}/>
                </div>

                <div className='OutrasInformacoes_main buttonBody'>
                <div className='mx-1 my-3'>
                    <h1>Links</h1>
                    {this.state.links.map(i =>
                        <div>
                           <a href={i.url}><h3>{i.title}</h3></a>
                        </div>
                    )}
                </div>
                    
                </div>
            </section>
            </>
        )
    }
}

export default coletivo_modelpage;