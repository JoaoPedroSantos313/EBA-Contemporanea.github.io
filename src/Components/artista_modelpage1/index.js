import React, { Component } from 'react';
import './artista_modelpage1.css';

class artista_modelpage1 extends Component{
    
    constructor(props){

        super(props);
            this.state = {
                banner: props.info.banner,
                title: props.info.title,
                foto: props.info.foto,
                artistname: props.info.artistname,
                local: props.info.local,
                ondevive: props.info.ondevive,
                graduacao: props.info.graduacao,
                profissao: props.info.profissao,
                curriculolattes: props.info.curriculolattes,
                dissertacao: props.info.dissertacao,
                tese: props.info.tese,
                biografia: props.info.biografia,
                galeria: props.info.galeria,
                site: props.info.site,
                youtube: props.info.youtube
        };
    }
  
    render(){
        return(
            <>           
            <div className='artista_banner'>
            </div>
            
            <section className="artista_main">
            
                <h1>{this.state.title}</h1>

            <div className="row">
                <div className='col-sm'> 
                    <img src={this.state.foto}></img>
                </div>

                <div className='col-sm'> 
                    <h1>{this.state.artistname}</h1>
                    <h1>{this.state.local}</h1>
                    <h1>{this.state.ondevive}</h1>
                    {this.state.graduacao.map(i =>
                        <h1>{i}</h1>
                    )}
                    <h1>{this.state.profissao}</h1>
                </div>

                <div className='col-sm'> 
                    <button><img src="link.png"/></button><h1>{this.state.curriculolattes}</h1>
                    <button><img src="link.png"/></button><h1>{this.state.dissertacao}</h1>
                    <button><img src="link.png"/></button> <h1>{this.state.tese}</h1>
                    <button><img src={this.state.site}/></button>
                    <button><img src={this.state.youtube}/></button>
                </div>           
                </div>   

                <div>
                    <h1>Biografia</h1>
                    <p>{this.state.biografia}</p>
                </div>

                <div>
                    <h1>Seleção de Obras</h1>
                    {this.state.galeria.map(i =>
                        <img src={i}></img>
                    )}
            </div>
                
            </section>
            </>
        )
    }
    
}

export default artista_modelpage1;