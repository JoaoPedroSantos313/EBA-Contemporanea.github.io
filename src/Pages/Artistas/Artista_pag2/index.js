import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import site_icon from '../../../utils/site_icon.png';
import defaultProfile from '../../../utils/default_profile.jpeg';
import './artista_pag2.css';

export default function Artista_pag2(props) {
    const { artista } = props.location.state;
    const { id } = useParams();
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleCollapse = () => {
        setIsCollapsed(curr => !curr);
    }
    
    const goBack = () => {
        if(id > 1) {
            window.location.href = `/artistas_pag1/${id - 1}`;
        }
    }

    const goToAllArtists = () => {
        window.location.href = '/artistas'
    }

    const goForward = () => {
        window.location.href = `/artistas_pag1/${Number(id) + 1}`;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <>     
        <div className='artista_banner'>
            <img src={artista?.fotoBanner} />
        </div>
        
        <section className="artista_main2 bodyText"> 

            <div className='row' style={{ width: '100%' }}>
                    <div className='P_foto' style={{ width: '25%'}}> 
                        <img src={artista?.fotoPerfil || defaultProfile} width="80%"></img>
                    </div>

                    <div style={{ width: '50%', marginTop: '10px'}}> 
                        <h2 class="artist_name">{artista?.nome} <h3>({artista?.localNascimento})</h3></h2>
                        {artista?.localAtual && <h3>Vive e trabalha: <b>{artista?.localAtual}</b></h3>}
                        <br/>
                        {artista?.estudos && (
                            <>
                            <h3>Formações:</h3>
                            {artista?.estudos.map(i => (
                                <h3 key={i.id}>
                                <b>{`${i.tipo} em ${i.area} (${i.anoInicio || "-"} - ${i.anoFim || "atualmente"});`}</b>
                                </h3>
                            ))}
                                <br />
                            </>
                        )}
                       {artista?.profissao && <h3>Profissão: 
                            <br/>
                            <b>{artista.profissao}</b>
                        </h3>}

                        <br/>

                        <div className='SocialMedia'>
                            {artista?.redesSociais?.map((rs, index) => (
                                <div key={rs.id || index}>
                                    <a href={rs.url} target="_blank">
                                        <img src={site_icon} width="30px" style={{ marginRight: '10px' }} />
                                        {rs.nome}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='Links_main' style={{ width: '25%'}}> 

                    <div className='border_links navegacao_artista'>
                        <Link to={{ pathname: `/artistas_pag1/${id}`, state: { artista: artista }}}>
                            <img src="/I_E_Arrow.png"/>
                        </Link>
                        <h2>Página 2/2 do Artista</h2>
                    </div>
                    
                    <div className='border_links navegacao_outro_artista'>
                        <h2>Anterior/Próximo Artista</h2>
                        
                        <div className='flex AtalhodeNavegacao'> 
                            <button onClick={goBack}><img src="/I_E_Arrow.png"/></button>
                            <button onClick={goToAllArtists}><img src="/I_Menu.png"/></button>
                            <button onClick={goForward}><img src="/I_D_Arrow.png"/></button>
                        </div> 
                    </div>

                    <div className='border_links detalhes_academicos'>
                        <h2>Detalhes Acadêmicos</h2>
                        {artista?.links?.map(i => (
                            <div key={i.id} className='flex'> 
                                <a href={i.url}><img src="/link.png" className='linkImg'/></a>
                                <h3 className='mx-2'>{i.nome}</h3>
                            </div> 
                        ))}
                    </div>
                    </div>        
                </div>   

            {artista?.outrosTextos?.length > 0 
            && (<div className='OutrosTextos_main buttonBody'>
                <h1>Outros Textos</h1>
                {artista?.outrosTextos?.map((i, index) =>
                    <div key={i.id || index} className="textblockarrange">
                        <button onClick={() => { window.location.href = i.url }}><img src="/link.png"/></button>
                        <h3>{i.nome}</h3>
                    </div>
                )}
            </div>)}

            {artista?.entrevistas?.length > 0 && (
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
                </div>)}

            <div className='Outrasinformacoes_main buttonBody'>
                <div className='row mx-1 my-3'>
                    <h1>Outras informações</h1>
                    {isCollapsed ? 
                        <button onClick={handleCollapse} className='mx-3 my-1'>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button> 
                        : <button onClick={handleCollapse} className='mx-3 my-1'><FontAwesomeIcon icon={faChevronUp} /></button>}
                </div>
                <Collapse in={!isCollapsed} unmountOnExit>
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
                </Collapse>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5%' }}>
                    <div className='Links_main border_links navegacao_artista'>
                        <Link to={{ pathname: `/artistas_pag1/${id}`, state: { artista }}}>
                            <img src="/I_E_Arrow.png"/>
                        </Link>
                        <h2>Página 2/2 do Artista</h2>
                    </div>
                </div>
        </section>
        </>
    ) 
};