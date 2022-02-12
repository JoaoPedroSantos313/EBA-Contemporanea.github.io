import { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider';
import './coletivo_modelpage.css';

class coletivo_modelpage extends Component{
    
    constructor(props){

        super(props);
            this.state = {
                title: props.info.title,
                participantesG1: props.info.participantesG1,
                participantesG2: props.info.participantesG2,
                participantesG3: props.info.participantesG3,
                participantesG4: props.info.participantesG4,
                sobre_title: props.info.sobre_title,
                sobre: props.info.sobre,
                sobre_assing: props.info.sobre_assing,
                galeria: props.info.galeria,
                linksVideosG1: props.info.linksVideosG1,
                linksVideosG2: props.info.linksVideosG2,
                linksVideosG3: props.info.linksVideosG3,
                linksTextosG1: props.info.linksTextosG1,
                linksTextosG2: props.info.linksTextosG2
        };
        
    }
    
    render(){
        return(
            <>     
            <div className='coletivoBanner'>
            </div>
            
            <section className="coletivo_main">   
            
                <div className="coletivo_main_title c_buttonBack mt-4">   
                    <h2>Participantes</h2>

                    <Link to="/artistas_pag1">
                        <button><img src="I_E_Arrow.png"/>Voltar</button>
                    </Link>
                </div>

                <div className='Participantes_main row'>
                   <div className='col-sm'>
                    {this.state.participantesG1.map(i =>
                        <div className='NomesParticipantes'>
                           <a href={i.url}><h3>{i.title}</h3></a>
                        </div>
                    )}
                    </div>

                    <div className='col-sm'>
                    {this.state.participantesG2.map(i =>
                        <div className='NomesParticipantes'>
                           <a href={i.url}><h3>{i.title}</h3></a>
                        </div>
                    )}
                    </div>

                    <div className='col-sm'>
                    {this.state.participantesG3.map(i =>
                        <div className='NomesParticipantes'>
                           <a href={i.url}><h3>{i.title}</h3></a>
                        </div>
                    )}
                    </div>

                    <div className='col-sm'>
                    {this.state.participantesG4.map(i =>
                        <div className='NomesParticipantes'>
                           <a href={i.url}><h3>{i.title}</h3></a>
                        </div>
                    )}
                    </div>
                </div>

                <div className='ColetivoSobre_main'>
                    <h1>Sobre</h1>
                    <h3 className='my-4'>{this.state.sobre_title}</h3>
                    <h5 className='my-4'>{this.state.sobre_assing}</h5>
                    <p>{this.state.sobre}</p>
                    
                </div>

                <div className='ColetivoGaleria_main'>
                    <h1>Galeria</h1>                    
                    <Slider img_slider={this.state.galeria}/>
                </div>

                <div className='ColetivosLinks_main c_buttonBody'>
                <h1>Links</h1>
                    
                <div className='mt-5'>
                    <h1>Vídeos</h1>
                </div>

                    <div className='row mt-1'>
                        <div className='col-sm'>
                            {this.state.linksVideosG1.map(i =>
                            <div className='Espaco'>
                            <button onClick={() => { window.location.href = i.url }}><img src="link.png"/></button>
                            <h3>{i.title}</h3>
                            </div>
                        )}
                    </div>

                    <div className='col-sm'>
                        {this.state.linksVideosG2.map(i =>
                            <div className='Espaco'>
                            <button onClick={() => { window.location.href = i.url }}><img src="link.png"/></button>
                            <h3>{i.title}</h3>
                            </div>
                        )}
                    </div>

                    <div className='col-sm'>
                        {this.state.linksVideosG3.map(i =>
                            <div className='Espaco'>
                            <button onClick={() => { window.location.href = i.url }}><img src="link.png"/></button>
                            <h3>{i.title}</h3>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className='mt-5'>
                    <h1>Arquivos de texto</h1>
                </div>

                <div className='row mt-1'>
                    <div className='LimitWidth'>
                        {this.state.linksTextosG1.map(i =>
                            <div className='Espaco'>
                            <button onClick={() => { window.location.href = i.url }}><img src="link.png"/></button>
                            <h3>{i.title}</h3>
                            </div>
                        )}
                    </div>

                    <div className='col-sm'>
                        {this.state.linksTextosG2.map(i =>
                            <div className='EspacoPersonalizado'>
                            <button onClick={() => { window.location.href = i.url }}><img src="link.png"/></button>
                            <h3>{i.title}</h3>
                            </div>
                        )}
                    </div>
                </div>
                    
                </div>
            </section>
            </>
        )
    }
}

export default coletivo_modelpage;