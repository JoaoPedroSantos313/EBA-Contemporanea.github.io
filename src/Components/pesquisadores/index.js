import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './pesquisadores.css';

class pesquisadores extends Component{
    
    constructor(props){

        super(props);
            this.state = {
                coordenador: props.info.coordenador,
                card_coordenador: props.info.card_coordenador,
               
                bolsistasAtuais: props.info.bolsistasAtuais,
                card_bolsistasAtuais: props.info.card_bolsistasAtuais,
                
                bolsistasAtnteriores: props.info.bolsistasAtnteriores,
                card_bolsistasAtnteriores: props.info.card_bolsistasAtnteriores,
               
                voluntarios: props.info.voluntarios,
                card_voluntarios: props.info.card_voluntarios,

                participacoes: props.info.participacoes,
                card_participacoescol1: props.info.card_participacoescol1,
                card_participacoescol2: props.info.card_participacoescol2
        };
    }
    
    render(){
        return(
            <>                 
            <section className="Pesquisadores_main bodyText">   
            
            <div className='Coordenador_main Pesquisadores_buttonBody'>
                    <div className="Pesquisadores_card"> 
                        <h1>{this.state.coordenador}</h1>
                    </div>

                    {this.state.card_coordenador.map(i =>
                        <div className="Pesquisadores_card">
                            <img src={i.photo}/>
                            
                            <div>
                                <h1 className="mx-3">{i.name}</h1>
                                <p className="mx-3">{i.about}</p> 
                                <button className="mx-3" onClick={() => { window.location.href = i.url }}><img src="cl.png"/></button>
                                <button className="mx-3" onClick={() => { window.location.href = i.url2 }}><img src="A.png"/></button> 
                            </div>
                        </div>
                    )}
             </div>

             <div className='Coordenador_main Pesquisadores_buttonBody'>
                   

                    {this.state.card_bolsistasAtuais.map(i =>
                       <> 
                        <div className="Pesquisadores_card"> 
                            <h1>{this.state.bolsistasAtuais}</h1>
                        </div>
                        
                        <div className="Pesquisadores_card">
                            <img src={i.photo}/>
                           
                            <div>
                                <h1 className="mx-3">{i.name}</h1>
                                <p className="mx-3">{i.about}</p> 
                                <button className="mx-3" onClick={() => { window.location.href = i.url }}><img src="cl.png"/></button>
                                <button className="mx-3" onClick={() => { window.location.href = i.url2 }}><img src="A.png"/></button> 
                            </div>
                        </div>
                        </>
                    )}
             </div>

             <div className='Coordenador_main Pesquisadores_buttonBody'>
                    <div className="Pesquisadores_card"> 
                        <h1>{this.state.bolsistasAtnteriores}</h1>
                    </div>

                    {this.state.card_bolsistasAtnteriores.map(i =>
                        <div className="Pesquisadores_card">
                            <img src={i.photo}/>
                            
                            <div>
                                <h1 className="mx-3">{i.name}</h1>
                                <p className="mx-3">{i.about}</p> 
                                <button className="mx-3" onClick={() => { window.location.href = i.url }}><img src="cl.png"/></button>
                                <button className="mx-3" onClick={() => { window.location.href = i.url2 }}><img src="A.png"/></button> 
                            </div>
                        </div>
                    )}
             </div>

             <div className='Coordenador_main Pesquisadores_buttonBody'>
                    <div className="Pesquisadores_card"> 
                        <h1>{this.state.voluntarios}</h1>
                    </div>

                    {this.state.card_voluntarios.map(i =>
                        <div className="Pesquisadores_card">
                            <img src={i.photo}/>
                            
                            <div>
                                <h1 className="mx-3">{i.name}</h1>
                                <p className="mx-3">{i.about}</p> 
                                <button className="mx-3" onClick={() => { window.location.href = i.url }}><img src="cl.png"/></button>
                                <button className="mx-3" onClick={() => { window.location.href = i.url2 }}><img src="A.png"/></button> 
                            </div>
                        </div>
                    )}
             </div>


             <div className="Pesquisadores_card"> 
                        <h1>{this.state.participacoes}</h1>
            </div>
             <div className='Coordenador_main Pesquisadores_buttonBody row' >
                    <div className="col-sm"> 
                    
                    {this.state.card_participacoescol1.map(i =>
                        <div className="Pesquisadores_card">
                            <div>
                                <h1 className="mx-3">{i.name}</h1>
                            </div>
                        </div>
                    )}

                </div>

                <div className="col-sm"> 
                    
                    {this.state.card_participacoescol2.map(i =>
                        <div className="Pesquisadores_card">
                            <div>
                                <h1 className="mx-3">{i.name}</h1>
                            </div>
                        </div>
                    )}

                </div>
             </div>
                

            </section>
            </>
        )
    }
}

export default pesquisadores;