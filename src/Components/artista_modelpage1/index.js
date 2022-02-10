import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider';
import './artista_modelpage1.css';


class artista_modelpage1 extends Component{
    
    constructor(props){

        super(props);
            this.state = {
                banner: props.info.banner,
                foto: props.info.foto,
                artistname: props.info.artistname,
                local: props.info.local,
                ondevive: props.info.ondevive,
                graduacao: props.info.graduacao,
                profissao: props.info.profissao,
                atalhonavegacao: props.info.atalhonavegacao,
                detalhestitulo: props.info.detalhestitulo,
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
               
                <div className='row artista_body1'>
                    <div className='col-sm P_foto'> 
                        <img src={this.state.foto}></img>
                    </div>

                    <div className='col-sm Info_main'> 
                        <h2>{this.state.artistname}</h2>
                        <h3>{this.state.local}</h3>
                        <h3>{this.state.ondevive}</h3>
                        {this.state.graduacao.map(i =>
                            <h3>{i}</h3>
                        )}
                        <h3>{this.state.profissao}</h3>
                    </div>

                    <div className='col-sm Links_main'> 
                    
                    <h2>{this.state.atalhonavegacao}</h2>
                    
                    <div className='flex AtalhodeNavegacao'> 
                        <button><img src="I_E_Arrow.png"/></button>
                        <button> 
                            <Link to="/artistas">
                                <img src="I_Menu.png"/>
                            </Link>
                        </button>
                        <button><img src="I_D_Arrow.png"/></button>
                    </div> 

                    <hr/>
                        <h2>{this.state.detalhestitulo}</h2>   

                        <div className='flex'> 
                            <button><img src="link.png"/></button>
                            <h3 className='mx-2'>{this.state.curriculolattes}</h3>
                        </div> 
                        
                        <div className='flex'> 
                            <button><img src="link.png"/></button>
                            <h3 className='mx-2'>{this.state.dissertacao}</h3>
                        </div> 
                        
                        <div className='flex'> 
                            <button><img src="link.png"/></button>
                            <h3 className='mx-2'>{this.state.tese}</h3>
                        </div>
                        
                        <div className='flex SocialMedia'> 
                            <button><img src={this.state.youtube}/></button>
                            <button><img src={this.state.site}/></button>
                        </div>
                    </div>        
                </div>   

                <div className='Biografia_main'>
                    <h1>Biografia</h1>
                    <p>{this.state.biografia}</p>
                    <p className='mt-2'>Autor: Clarelis R.</p>
                </div>

                <div className='Carrossel_Artistas'>
                    <h1>Seleção de Obras</h1>
                    <Slider img_slider={this.state.galeria}/>
                </div>
                
                <div className='row buttonNext'>
                    <div className='col-sm'>
                        <h1>Página 1/2</h1>
                    </div>
                   
                    <div className='col-sm'>
                        <Link to="/artistas_pag2">
                            <button >Próxima página do Arquivo <img src="I_D_Arrow.png"/></button>
                        </Link>
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export default artista_modelpage1;