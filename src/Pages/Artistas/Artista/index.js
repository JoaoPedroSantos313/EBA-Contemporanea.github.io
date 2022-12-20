
import { CircularProgress, Collapse, Grid } from '@material-ui/core';
import { faChevronDown, faChevronUp, faChevronLeft, faChevronRight, faBars, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from '../../../Components/Slider';
import defaultProfile from '../../../utils/default_profile.jpeg';
import site_icon from '../../../utils/site_icon.png';
import './artista1.css';
import useArtist from '../../../contexts/artists';

export function Artista() {
    const { currentArtist: info, getArtist, navigation, isLoading } = useArtist();
    const { id } = useParams();
    const [isPage1, setIsPage1] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isOutrosTextosCollapsed, setOutrosTextosCollapsed] = useState(false);
    const [isEntrevistasCollapsed, setEntrevistasCollapsed] = useState(false);

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
                    <img src={info?.fotoBanner} width="100%" />
                </div>

                <section className="artista_main">
                    <Grid container className='artista_body'>
                        <Grid item md={3} className='artista_foto'>
                            <img src={info?.fotoPerfil || defaultProfile} width="90%" />
                        </Grid>

                        <Grid item md={6} className='artista_info'>
                            <h2 className='artista_name'>{info?.nome}</h2>
                            <p className="artista_more_info">({info?.localNascimento})</p>

                            {info?.localAtual && <p className="artista_more_info">
                                Vive e trabalha: <b>{info?.localAtual}</b>
                            </p>}

                            {info?.estudos && (
                                <div className="artista_more_info">
                                    <p>Formações:</p>
                                    {info?.estudos.map(i => (
                                        <p key={i.id}>
                                            <b>{`${i.tipo} em ${i.area} (${i.anoInicio || "-"} - ${i.anoFim || "atualmente"});`}</b>
                                        </p>
                                    ))}
                                </div>
                            )}
                            {info?.profissao && <p className="artista_more_info">Profissão:
                                <br /><b>{info.profissao}</b>
                            </p>}

                            {info?.redesSociais?.map((rs, index) => (
                                <a key={rs.id || index} href={rs.url} target="_blank" className='nav_link button_hover'>
                                    <img src={site_icon} width="30px" />
                                    <p>{rs.nome}</p>
                                </a>
                            ))}
                        </Grid>

                        <Grid item md={3} className='artista_nav'>
                            <div className='border_links nav_artistas'>
                                <div className='nav_link column'>
                                    <h2>Anterior</h2>
                                    <button className="button_navigation button_hover" onClick={goBack}>
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                </div>

                                <div className='nav_link column'>
                                    <h2>Menu</h2>
                                    <button className="button_navigation button_hover" onClick={goToAllArtists}>
                                        <FontAwesomeIcon icon={faBars} />
                                    </button>
                                </div>

                                <div className='nav_link column'>
                                    <h2>Próximo</h2>
                                    <button className="button_navigation button_hover" onClick={goForward}>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>
                                </div>
                            </div>

                            <div className='border_links nav_pages'>
                                {isPage1 ? (
                                    <div className="nav_link button_hover">
                                        <h2>Página 1/2 do Artista</h2>
                                        <button className='button-right' onClick={changePageContent}>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="nav_link button_hover">
                                        <button className='button-left' onClick={changePageContent}>
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </button>
                                        <h2>Página 2/2 do Artista</h2>
                                    </div>
                                )}
                            </div>

                            {info?.links?.length > 0 && (
                                <div className='border_links column nav_artistas'>
                                    <h2>Detalhes Acadêmicos</h2>
                                    {info?.links?.map(i => (
                                        <a key={i.id} className='nav_link button_hover' href={i.url} >
                                            <FontAwesomeIcon icon={faPaperPlane} className='button-left' />
                                            <p>{i.nome}</p>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </Grid>
                    </Grid>
                    {isPage1 ? (
                        <>
                            {info?.biografia?.texto !== null && <div className='biografia'>
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
                                <div className='biografia'>
                                    <h1>Entrevista do Projeto EBAContemporânea</h1>
                                    {info?.entrevistasSite.map(i =>
                                        <a key={i.id} className="nav_link info_links" href={i.url} target="_blank">
                                            <FontAwesomeIcon icon={faPaperPlane} className='button-left button_hover' />
                                            <p>{i.nome}</p>
                                        </a>
                                    )}
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            {info?.outrosTextos?.length > 0
                                && (<>
                                    <div className='nav_link collapse_title'>
                                        <h1>Outros Textos</h1>
                                        {isOutrosTextosCollapsed ?
                                            <button onClick={() => setOutrosTextosCollapsed(curr => !curr)} className='button-right button_navigation button_hover'>
                                                <FontAwesomeIcon icon={faChevronDown} />
                                            </button>
                                            : <button onClick={() => setOutrosTextosCollapsed(curr => !curr)} className='button-right button_navigation button_hover'>
                                                <FontAwesomeIcon icon={faChevronUp} />
                                            </button>
                                        }
                                    </div>
                                    <Collapse in={!isOutrosTextosCollapsed} unmountOnExit className="collapse_section">
                                        {info.outrosTextos.map((i, index) =>
                                            <a href={i.url} target='_blank' className="info_links">
                                                <FontAwesomeIcon icon={faPaperPlane} className='button-left button_hover' />
                                                <p>{i.nome}</p>
                                            </a>
                                        )}
                                    </Collapse>
                                </>)}

                            {info?.entrevistas?.length > 0 && (
                                <>
                                    <div className="nav_link collapse_title">
                                        <h1>Entrevistas em Destaque</h1>
                                        {isEntrevistasCollapsed ?
                                            <button onClick={() => setEntrevistasCollapsed(curr => !curr)} className='button-right button_navigation button_hover'>
                                                <FontAwesomeIcon icon={faChevronDown} />
                                            </button>
                                            : <button onClick={() => setEntrevistasCollapsed(curr => !curr)} className='button-right button_navigation button_hover'>
                                                <FontAwesomeIcon icon={faChevronUp} />
                                            </button>
                                        }
                                    </div>
                                    <Collapse in={!isEntrevistasCollapsed} unmountOnExit className="collapse_section">
                                        {info?.entrevistas?.map(i =>
                                            <a href={i.url} target='_blank' className="info_links">
                                                <FontAwesomeIcon icon={faPaperPlane} className='button-left button_hover' />
                                                <p>{i.nome}</p>
                                            </a>
                                        )}
                                    </Collapse>
                                </>)}

                            <div class="nav_link">
                                <h1>Outras informações</h1>
                                {isCollapsed ?
                                    <button onClick={handleCollapse} className='button-right button_navigation button_hover'>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </button>
                                    : <button onClick={handleCollapse} className='button-right button_navigation button_hover'>
                                        <FontAwesomeIcon icon={faChevronUp} />
                                    </button>}
                            </div>
                            <Collapse in={!isCollapsed} unmountOnExit className="collapse_section">
                                {info?.galeriasComerciais?.length > 0 && (
                                    <div className='info_links column'>
                                        <h1>Galerias Comerciais</h1>
                                        {info?.galeriasComerciais?.map(i =>
                                            <a href={i.url} target='_blank' className="nav_link info_links">
                                                <FontAwesomeIcon icon={faPaperPlane} className='button-left button_hover' />
                                                <p>{i.nome}</p>
                                            </a>
                                        )}
                                    </div>
                                )}

                                {info?.eventos?.length > 0 &&
                                    (<div className='info_links column'>
                                        <h1>Eventos / Coletivos</h1>
                                        {info?.eventos?.map(i => (
                                            <a href={i.url} target='_blank' className="nav_link">
                                                <FontAwesomeIcon icon={faPaperPlane} className='button-left button_hover' />
                                                <p>{i.nome}</p>
                                            </a>
                                        ))}
                                    </div>)}

                                {info?.premios?.length > 0 &&
                                    (<div className='info_links column'>
                                        <h1>Prêmios e Residências</h1>
                                        {info?.premios?.map(i =>
                                            <a href={i.url} target='_blank' className="nav_link">
                                                <FontAwesomeIcon icon={faPaperPlane} className='button-left button_hover' />
                                                <p>{i.nome}</p>
                                            </a>
                                        )}
                                    </div>)}
                            </Collapse>

                        </>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5%' }}>
                        <div className='border_links nav_pages'>
                            {isPage1 ? (
                                <div className="nav_link button_hover">
                                    <h2>Página 1/2 do Artista</h2>
                                    <button className='button-right' onClick={changePageContent}>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>
                                </div>
                            ) : (
                                <div className="nav_link button_hover">
                                    <button className='button-left' onClick={changePageContent}>
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                    <h2>Página 2/2 do Artista</h2>
                                </div>
                            )}
                        </div>
                    </div>

                </section>
            </>)
    )
};