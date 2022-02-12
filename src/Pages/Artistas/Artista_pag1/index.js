import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArtista } from '../../../services/artistaService';
import Slider from '../../../Components/Slider/index';
import defaultProfile from '../../../utils/default_profile.jpeg';
import './artista1.css';

export function Artista_pag1 () {
    const { id } = useParams();
    const [info, setInfo] = useState({});

    useEffect(async() => {
        await getArtista(id).then(res => {
            setInfo(res);
            console.log(res);
        });
    }, []);

    return (
        <> 
        <div className='artista_banner' />
        
        <section className="artista_main">      
            <div className='row artista_body1'>
                <div className='col-sm P_foto'> 
                    <img src={info?.fotoPerfil || defaultProfile}></img>
                </div>

                <div className='col-sm Info_main'> 
                    <h2>{info?.nome}</h2>
                    <h3>{info?.localNascimento}</h3>
                    <h3>{info?.localAtual}</h3>
                    {info?.estudos?.map(i =>
                        <h3>{`${i.tipo} em ${i.area} de ${i.anoInicio} a ${i.anoFim}`}</h3>
                    )}
                    <h3>{info?.profissao}</h3>
                </div>

                <div className='col-sm Links_main'> 
                
                {/* <h2>{state.atalhonavegacao}</h2> */}
                
                <div className='flex AtalhodeNavegacao'> 
                    <button><img src="I_E_Arrow.png"/></button>
                    <button><img src="I_Menu.png"/></button>
                    <button><img src="I_D_Arrow.png"/></button>
                </div> 

                <hr/>
                    {/* <h2>{state.detalhestitulo}</h2> */}
                    {info?.links?.map(i => (
                        <div className='flex'> 
                            <a href={i.url}><img src="link.png"/></a>
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

            <div className='Carrossel_Artistas'>
                <h1>Seleção de Obras</h1>
                <Slider img_slider={info?.obras}/>
            </div>
            
            <div className='row buttonNext'>
                <div className='col-sm'>
                    <h1>Página 1/2</h1>
                </div>
                
                <div className='col-sm'>
                    <Link to={`/artistas_pag2/${id}`}>
                        Próxima página do Arquivo <img src="I_D_Arrow.png"/>
                    </Link>
                </div>
            </div>
        </section>
        </>
    ) 
};