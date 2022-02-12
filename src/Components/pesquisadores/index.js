import { Component } from 'react';
import { Link } from 'react-router-dom';
import './pesquisadores.css';

class pesquisadores extends Component{
    
    constructor(props){

        super(props);
            this.state = {
                card_pesquisadores: props.info.card_pesquisadores,
                card_participacoescol1: props.info.card_participacoescol1,
                card_participacoescol2: props.info.card_participacoescol2
        };
    }
    
    render(){
        return(
            <>                 
            <section className="Pesquisadores_main bodyText">   
            
            <div className='Coordenador_main'>
                {this.state.card_pesquisadores.map(i =>
                    <> 
                        {i.cargo_pesquisadores && (
                        <div className="Cargo_card"> 
                            <h1>{i.cargo_pesquisadores}</h1>
                        </div>
                        )}   
                    
                        <div className="Pesquisadores_card">
                            <img  className="Img_pesquisadores" src={i.photo}/>
                            <div>
                                <h1 className="mx-3">{i.name}</h1>
                                <p className="mx-3">{i.about}</p> 
                                <button className="Pesquisadores_buttonBody mx-3" onClick={() => { window.location.href = i.url }}><img src="cl.png"/></button>
                                <button className="Pesquisadores_buttonBody mx-3" onClick={() => { window.location.href = i.url2 }}><img src="A.png"/></button> 
                            </div>
                        </div>
                    </>
                    )}
             </div>

             <div className="Cargo_card"> 
                    <h1>Participações</h1>
             </div>
             <div className='Coordenador_main row' >
                <div className="col-sm"> 
                    
                    {this.state.card_participacoescol1.map(i =>
                        <div className="Participacoes_card">
                            <div>
                                <h1 className="mx-3 my-2">{i.name}</h1>
                            </div>
                        </div>
                    )}

             </div>

                <div className="col-sm"> 
                    
                    {this.state.card_participacoescol2.map(i =>
                        <div className="Participacoes_card">
                            <div>
                                <h1 className="mx-3 my-2">{i.name}</h1>
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