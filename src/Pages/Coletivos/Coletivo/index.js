import { faChevronDown, faChevronLeft, faChevronUp, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Slider from '../../../Components/Slider';
import useColetivos from '../../../contexts/coletivos';
import './style.css';

const Coletivo = () => {
    const {
        currentColetivo,
        getSingleColetivo
    } = useColetivos();

    const navigate = useHistory();
    const { id } = useParams();

    const [isLinkCollapsed, setLinkCollapsed] = useState(true);
    const [isVideosCollapsed, setVideosCollapsed] = useState(true);
    const [isTextsCollapsed, setTextsCollapsed] = useState(true);

    useEffect(() => {
        getSingleColetivo(id);
    }, [])

    const handleLinkCollapse = () => (setLinkCollapsed(current => !current));
    const handleVideoCollapse = () => (setVideosCollapsed(current => !current));
    const handleTextoCollapse = () => (setTextsCollapsed(current => !current));

    const goToParticipant = (id) => {
        if(id != null) {
            navigate.push(`/artista/${id}`);
        }
    }

    return (
        <>
            <div className='coletivo_banner'>
                <img src={currentColetivo.banner} />
            </div>

            <main>
                <div className="page_title">
                    <h2>Participantes</h2>

                    <button className='button_hover' onClick={() => navigate.push('/coletivos')}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <p>Voltar</p>
                    </button>
                </div>

                {currentColetivo?.participantes && 
                    <Grid container className='participante_container'>
                        {currentColetivo.participantes.map((p, index) => (
                            <Grid item md={3} key={index} className="participante">
                                <button className={!p.publicId && 'disabled'} onClick={() => goToParticipant(p.publicId)}>
                                    <h3>{p.nome}</h3>
                                </button>
                            </Grid>
                        ))}
                    </Grid>
                }

                {currentColetivo.sobre?.texto && (
                <>
                    <h2 className='page_title'>Sobre</h2>
                    <h2 className='page_title'>{currentColetivo.nomeColetivo}</h2>
                    
                    <p className="sobre">
                        {currentColetivo.sobre.texto}
                        <br /><br />
                        Escrito por: <b>{currentColetivo.sobre.autor}</b>
                    </p>
                </>
                )}

                {currentColetivo?.obras?.length > 0 && ( 
                    <>
                        <h2>Galeria</h2>
                        <Slider imgs={currentColetivo.obras} />
                    </>
                )}
                
                <div className="collapse_title">
                    <h2>Links</h2>
                    <button onClick={handleLinkCollapse} className="button_hover">
                        {isLinkCollapsed ? 
                            <FontAwesomeIcon icon={faChevronDown} />
                            : <FontAwesomeIcon icon={faChevronUp} />
                        }
                    </button>
                </div>
                <Collapse in={!isLinkCollapsed} unmountOnExit className="collapse_section">
                    {currentColetivo?.videos?.length > 0 && (
                        <>
                            <div className='collapse_title'>
                                <h2>Vídeos</h2>
                                <button onClick={handleVideoCollapse} className="button_hover">
                                    {isVideosCollapsed ? 
                                        <FontAwesomeIcon icon={faChevronDown} />
                                        : <FontAwesomeIcon icon={faChevronUp} />
                                    }
                                </button>
                            </div>
                            <Collapse in={!isVideosCollapsed} unmountOnExit className="collapse_section">
                                <Grid container>
                                    {currentColetivo.videos.map((v, index) => (
                                        <Grid md={6} key={index}>
                                            <a href={v.link} target="_blank" rel="noreferrer" className="links_container">
                                                <FontAwesomeIcon icon={faPaperPlane} className="button_hover" />
                                                <p>{v.nome}</p>
                                            </a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Collapse>
                        </>
                    )}
                    {currentColetivo?.textos?.length > 0 && (
                        <>
                            <div className='collapse_title'>
                                <h2>Arquivos de texto</h2>
                                <button onClick={handleTextoCollapse} className="button_hover">
                                    {isTextsCollapsed ? 
                                        <FontAwesomeIcon icon={faChevronDown} />
                                        : <FontAwesomeIcon icon={faChevronUp} />
                                    }
                                </button>
                            </div>
                            <Collapse in={!isTextsCollapsed} unmountOnExit className="collapse_section">
                                <Grid container>
                                    {currentColetivo.textos.map((t, index) => (
                                        <Grid md={6} key={index}>
                                            <a href={t.link} target="_blank" rel="noreferrer" className="links_container">
                                                <FontAwesomeIcon icon={faPaperPlane} className="button_hover" />
                                                <p>{t.nome}</p>
                                            </a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Collapse>
                        </>
                    )}
                </Collapse>
            </main>
        </>
    )
};

export default Coletivo;