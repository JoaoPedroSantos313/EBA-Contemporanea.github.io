import { Link, useParams } from 'react-router-dom';
import Slider from '../../../Components/Slider/index';
import defaultProfile from '../../../utils/default_profile.jpeg';
import './artista1.css';

export function Artista_pag1 (props) {
    const { id } = useParams();
    const { artista: info } = props.location.state;

    const goBack = () => {
        if(id > 1) {
            window.location.href = `/artistas_pag1/${id - 1}`;
        }
    }

    const goForward = () => {
        window.location.href = `/artistas_pag1/${Number(id) + 1}`;
    }

    return (
        <> 
            <div className='artista_banner'>
                <img src={info?.fotoBanner} />
            </div>
            
            <section className="artista_main">      
                <div className='row artista_body1'>
                    <div className='col-sm P_foto'> 
                        <img src={info?.fotoPerfil || defaultProfile}></img>
                    </div>

                    <div className='col-sm Info_main'> 
                        <h2>{info?.nome}</h2>
                        <h3>Nasceu em {info?.localNascimento}</h3>
                        <h3>Vive {info?.profissao && "e trabalha"} em {info?.localAtual}</h3>
                        {info?.estudos?.map(i =>
                            <h3 key={i.id}>{`${i.tipo} em ${i.area} de ${i.anoInicio || "-"} até ${i.anoFim || "atualmente"}`}</h3>
                        )}
                        <h3>{info?.profissao}</h3>
                    </div>

                    <div className='col-sm Links_main'> 
                    
                    <h2>Atalho de Navegação</h2>
                    
                    <div className='flex AtalhodeNavegacao'> 
                        <button onClick={goBack}><img src="/I_E_Arrow.png"/></button>
                        <button><img src="/I_Menu.png"/></button>
                        <button onClick={goForward}><img src="/I_D_Arrow.png"/></button>
                    </div> 

                    <hr/>
                        <h2>Detalhes Acadêmicos</h2>
                        {info?.links?.map(i => (
                            <div key={i.id} className='flex'> 
                                <a href={i.url}><img src="/link.png" className='linkImg'/></a>
                                <h3 className='mx-2'>{i.nome}</h3>
                            </div> 
                        ))}
                    {/* <div className='flex SocialMedia'> 
                            <button><img src={state.youtube}/></button>
                            <button><img src={state.site}/></button>
                        </div> */}
                    </div>        
                </div>   

                <div className='Biografia_main'>
                    <h1>Biografia</h1>
                    <p>{info?.biografia}</p>
                </div>
                {info?.obras?.length > 0 && (
                    <div className='Carrossel_Artistas'>
                        <h1>Seleção de Obras</h1>
                        <Slider img_slider={info?.obras}/>
                    </div>
                )}
                
                <div className='row buttonNext'>
                    <div className='col-sm'>
                        <h1>Página 1/2</h1>
                    </div>
                    
                    <div className='col-sm'>
                        <Link to={{ pathname: `/artistas_pag2/${id}`, state: { artista: info }}}>
                            <button>Próxima página do Arquivo <img src="/I_D_Arrow.png"/></button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    ) 
};