import React from 'react';
import { CircularProgress, Collapse } from '@material-ui/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from '../../../Components/Slider';
import defaultProfile from '../../../utils/default_profile.jpeg';
import site_icon from '../../../utils/site_icon.png';
import './artista1.css';
import useArtist from '../../../contexts/artists';

export function Artista_pag1() {
    const { currentArtist: info, getArtist, navigation, isLoading } = useArtist();
    const { id } = useParams();
    const [isPage1, setIsPage1] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(true);

    useEffect(() => {
        if (info == undefined || info.publicId !== id) {
            getArtist(id);
        }
    }, []);

    const goBack = () => {
        if (navigation.previous > 0) {
            window.location.href = `/artista/${navigation.previous}`;
        }
    }

    const goToAllArtists = () => {
        window.location.href = '/artistas'
    }

    const goForward = () => {
        window.location.href = `/artista/${navigation.next}`;
    }

    const changePageContent = () => {
        setIsPage1(curr => !curr);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    const handleCollapse = () => {
        setIsCollapsed(curr => !curr);
    }

    return (
        isLoading ?
            (<div className='loading'>
                <CircularProgress />
            </div>)
            : (<>
                <div className='artista_banner'>
                    <img src={info?.fotoBanner} />
                </div>

                <section className="artista_main">
                    <div className='row artista_body1'>
                        <div className='P_foto'>
                            <img src={info?.fotoPerfil || defaultProfile}></img>
                        </div>

                        <div className='Info_main'>
                            <h2>{info?.nome} <h3>({info?.localNascimento})</h3></h2>
                            {info?.localAtual && <h3>Vive e trabalha: <b>{info?.localAtual}</b></h3>}
                            <br />
                            {info?.estudos && (
                                <>
                                    <h3>Formações:</h3>
                                    {info?.estudos.map(i => (
                                        <h3 key={i.id}>
                                            <b>{`${i.tipo} em ${i.area} (${i.anoInicio || "-"} - ${i.anoFim || "atualmente"});`}</b>
                                        </h3>
                                    ))}
                                    <br />
                                </>
                            )}
                            {info?.profissao && <h3>Profissão:
                                <br />
                                <b>{info.profissao}</b>
                            </h3>}

                            <br />

                            <div className='SocialMedia'>
                                {info?.redesSociais?.map((rs, index) => (
                                    <div key={rs.id || index}>
                                        <a href={rs.url} target="_blank">
                                            <img src={site_icon} width="30px" style={{ marginRight: '10px' }} />
                                            {rs.nome}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='Links_main'>

                            <div className='border_links navegacao_artista'>
                                {isPage1 ? (
                                    <>
                                        <h2>Página 1/2 do Artista</h2>
                                        <button onClick={changePageContent}>
                                            <img src="/I_D_Arrow.png" />
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={changePageContent}>
                                            <img src="/I_E_Arrow.png" />
                                        </button>
                                        <h2>Página 2/2 do Artista</h2>
                                    </>
                                )}
                            </div>

                            <div className='border_links navegacao_outro_artista'>
                                <h2>Anterior/Próximo Artista</h2>

                                <div className='flex AtalhodeNavegacao'>
                                    <button onClick={goBack}><img src="/I_E_Arrow.png" /></button>
                                    <button onClick={goToAllArtists}><img src="/I_Menu.png" /></button>
                                    <button onClick={goForward}><img src="/I_D_Arrow.png" /></button>
                                </div>
                            </div>

                            {info?.links?.length > 0 && (
                                <div className='border_links detalhes_academicos'>
                                    <h2>Detalhes Acadêmicos</h2>
                                    {info?.links?.map(i => (
                                        <div key={i.id} className='flex'>
                                            <a href={i.url}><img src="/link.png" className='linkImg' /></a>
                                            <h3 className='mx-2'>{i.nome}</h3>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    {isPage1 ? (
                        <>
                            {info?.biografia?.texto !== null && <div className='Biografia_main'>
                                <h1>Biografia</h1>
                                <p>{info?.biografia?.texto}</p>
                                <br />
                                <p>Escrito por: <b>{info?.biografia?.autor}</b></p>
                            </div>}

                            {info?.obras?.length > 0 && (
                                <div className='Carrossel_Artistas'>
                                    <h1>Seleção de Obras</h1>

                                    <Slider imgs={info?.obras} />
                                </div>
                            )}

                            {info?.entrevistasSite?.length > 0 && (
                                <div className='entrevistas_site'>
                                    <h1>Entrevista do Projeto EBAContemporânea</h1>
                                    {info?.entrevistasSite.map(i =>
                                        <div key={i.id} className="textblockarrange">
                                            <a href={i.url} target="_blank">
                                                <img src="/link.png" width="20px" />
                                            </a>
                                            <p>{i.nome}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            {info?.outrosTextos?.length > 0
                                && (<div className='OutrosTextos_main buttonBody'>
                                    <h1>Outros Textos</h1>
                                    {info?.outrosTextos?.map((i, index) =>
                                        <div key={i.id || index} className="textblockarrange">
                                            <button onClick={() => { window.location.href = i.url }}><img src="/link.png" /></button>
                                            <h3 className='pag2_h3'>{i.nome}</h3>
                                        </div>
                                    )}
                                </div>)}

                            {info?.entrevistas?.length > 0 && (
                                <div className='EntrevistasDestaque_main buttonBody'>
                                    <h1>Entrevistas em Destaque</h1>
                                    {info?.entrevistas?.map(i =>
                                        <div key={i.id} className="textblockarrange">
                                            <a href={i.url} target="_blank">
                                                <img src="/link.png" />
                                            </a>
                                            <h3 className='pag2_h3'>{i.nome}</h3>
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
                                    {info?.galeriasComerciais?.length > 0 && (<div className='GC mx-1'>
                                        <h1>Galerias Comerciais</h1>
                                        {info?.galeriasComerciais?.map(i =>
                                            <div key={i.id} className="textblockarrange">
                                                <a href={i.url} target="_blank">
                                                    <img src="/link.png" />
                                                </a>
                                                <h3 className='pag2_h3'>{i.nome}</h3>
                                            </div>
                                        )}
                                    </div>)}

                                    {info?.eventos?.length > 0 &&
                                        (<div className='EC mx-1'>
                                            <h1>Eventos / Coletivos</h1>
                                            {info?.eventos?.map(i => (
                                                <div key={i.id} className="textblockarrange">
                                                    <Link to="/AtrocidadesMaravilhosas">
                                                        <button><img src="/link.png" /></button>
                                                    </Link>
                                                    <h3 className='pag2_h3'>{i.nome}</h3>
                                                </div>
                                            ))}
                                        </div>)}

                                    {info?.premios?.length > 0 &&
                                        (<div className='PR mx-1'>
                                            <h1>Prêmios e Residências</h1>
                                            {info?.premios?.map(i =>
                                                <div key={i.id} className="textblockarrange">
                                                    <a href={i.url} target="_blank">
                                                        <img src="/link.png" />
                                                    </a>
                                                    <h3 className='pag2_h3'>{i.nome}</h3>
                                                </div>
                                            )}
                                        </div>)}
                                </Collapse>
                            </div>

                        </>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5%' }}>
                        <div className='Links_main border_links navegacao_artista'>
                            {isPage1 ? (
                                <>
                                    <h2>Página 1/2 do Artista</h2>
                                    <button onClick={changePageContent}>
                                        <img src="/I_D_Arrow.png" />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button onClick={changePageContent}>
                                        <img src="/I_E_Arrow.png" />
                                    </button>
                                    <h2>Página 2/2 do Artista</h2>
                                </>
                            )}
                        </div>
                    </div>

                </section>
            </>)
    )
};