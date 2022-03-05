import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './artista_pag2.css'

export default function Artista_pag2(props) {
    const { artista } = props.location.state;
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <>     
        <div className='artista_banner'>
        </div>
        
        <section className="artista_main2 bodyText">   
        
            <div className="artista_main2_title buttonBack">   
                <h2>{artista?.title} Página 2</h2>
                <Link to={{ pathname: `/artistas_pag1/${id}`, state: { artista: info }}}>
                    <button><img src="/I_E_Arrow.png"/>Voltar</button>
                </Link>
            </div>

            {artista?.outrosTextos?.length > 0 
            && (<div className='OutrosTextos_main buttonBody'>
                <h1>Outros Textos</h1>
                {artista?.outrostextos?.map(i =>
                    <div key={i.id} className="textblockarrange">
                        <button onClick={() => { window.location.href = i.url }}><img src="/link.png"/></button>
                        <h3>{i.title}</h3>
                    </div>
                )}
            </div>)}

            <div className='EntrevistasDestaque_main buttonBody'>
                <h1>Entrevistas em Destaque</h1>                    
                {artista?.entrevistas?.map(i =>
                    <div key={i.id} className="textblockarrange">
                        <a href={i.url} target="_blank">
                            <img src="/link.png"/>
                        </a>
                        <h3>{i.nome}</h3>
                    </div>
                )}
            </div>

            <div className='Outrasartistarmacoes_main buttonBody'>
                <div className='row mx-1 my-3'>
                    <h1>Outras artistarmações</h1>
                    <button className='mx-3 my-1'><img src="/I_B_Arrow.png"/></button>
                </div>
                {artista?.galeriasComerciais?.length > 0 && (<div className='GC mx-1'>
                    <h1>Galerias Comerciais</h1>
                    {artista?.galeriasComerciais?.map(i =>
                        <div key={i.id} className="textblockarrange">
                        <a href={i.url} target="_blank">
                            <img src="/link.png"/>
                        </a>
                        <h3>{i.nome}</h3>
                    </div>
                    )}
                </div>)}

                {artista?.eventos?.length> 0 && 
                (<div className='EC mx-1'>
                    <h1>Eventos / Coletivos</h1>
                    {artista?.eventos?.map(i => (
                        <div key={i.id} className="textblockarrange">
                        <Link to="/AtrocidadesMaravilhosas">
                            <button><img src="/link.png"/></button>
                        </Link>
                            <h3>{i.nome}</h3>
                        </div>
                    ))}
                </div>)}

                {artista?.premios?.length > 0 && 
                (<div className='PR mx-1'>
                    <h1>Prêmios e Residências</h1>
                    {artista?.premios?.map(i =>
                        <div key={i.id} className="textblockarrange">
                            <a href={i.url} target="_blank">
                                <img src="/link.png"/>
                            </a>
                            <h3>{i.nome}</h3>
                        </div>
                    )}
                </div>)}
            </div>
            
            <div className="row buttonNext2">
                <div className='col-sm'>
                    <h1>Página 2/2</h1>
                </div>
                <div className='col-sm'>
                    <Link to={`/artistas_pag1/${id}`}>
                        <button> <img src="/I_E_Arrow.png"/> Voltar para Página Anterior</button>
                    </Link>
                </div>
            </div>
        </section>
        </>
    ) 
};