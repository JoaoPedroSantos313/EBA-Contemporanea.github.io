import { faChevronDown, faChevronLeft, faChevronUp, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Grid } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Slider from '../../../Components/Slider';
import './style.css';

const Coletivo = ({ info }) => {
    const navigate = useHistory();
    const [isLinkCollapsed, setLinkCollapsed] = useState(true);
    const [isVideosCollapsed, setVideosCollapsed] = useState(true);
    const [isTextsCollapsed, setTextsCollapsed] = useState(true);

    const handleLinkCollapse = () => (setLinkCollapsed(current => !current));
    const handleVideoCollapse = () => (setVideosCollapsed(current => !current));
    const handleTextoCollapse = () => (setTextsCollapsed(current => !current));

    const informacoes = {
        title: 'Atrocidades Maravilhosas',
        participantes: [
            {
                title: 'Adriano Melhem',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Alexandre Vogler',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Ana Paula Cardoso',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'André Amaral',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Arthur Leandro',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Clara Zúñiga',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Cláudia Leão',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },
        
            {
                title: 'Ducha',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Edson Barrus',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Felipe Barbosa',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Geraldo Marcolini',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Guga Ferraz',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Leonardo Tepedino',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Luís Andrade',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },
        
            {
                title: 'Marcos Abreu',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Ronald Duarte',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Rosana Ricaldi',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Roosevelt Pinheiro',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Alan Dunn',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Bruno Lins',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Erika Fraenkel',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },
        
            {
                title: 'Floriano Romano',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Hapax',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'João Ferraz',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Joni',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },

            {
                title: 'Terence Dihel',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            },
        ],
        sobre: 'O projeto Atrocidades Maravilhosas surgiu a partir da pesquisa de mestrado de Alexandre Vogler. Em abril do ano 2000, Vogler deu início à primeira e mais conhecida ação do Atrocidades Maravilhosas, reunindo um grupo de 20 artistas (em maioria estudantes da EBA- UFRJ) que espalharia cartazes lambe-lambes em zonas de grande circulação de motoristas, passageiros e pedestres. Cada participante desenvolveu uma imagem para ser reproduzida em grande escala, com tiragem de 250 cópias. Muros, telefones públicos e rampas receberam intervenções do grupo, que, por meio da aplicação dos 250 cartazes, formavam painéis de aproximadamente 120 metros, cujo conteúdo se diferenciava de acordo com a poética de cada. Os integrantes variam de acordo com as diferentes ações. Em 2001 houve continuidade trabalhos em lambe-lambe em um tapume localizado na Lapa. O grupo participou de exposições como o 27º Panorama da Arte Brasileira (MAM-SP, 2001), Caminhos do Contemporâneo: 1952/2002 (Paço Imperial, RJ, 2002) e Mídia Tática Brasil (Casa das Rosas, SP, 2003).',
        autor: 'Thiago Fernandes',
        galeria: [{ img: 'https://static.wixstatic.com/media/8b4bc0_3c8b995516ae477f84e931065c7d754c~mv2.png'}, { img: 'https://static.wixstatic.com/media/8b4bc0_3c8b995516ae477f84e931065c7d754c~mv2.png'}],
        videos: [
            {
                title: 'Atrocidades Maravilhosas',
                url: "https://www.youtube.com/watch?v=_io15ZQlod0&list=RDMMUXgSy7Q1McY&index=6"
            },

            {
                title: 'Atrocidades Maravilhosas',
                url: "https://www.youtube.com/watch?v=uJ56kmVjFpI&list=RDMMUXgSy7Q1McY&index=7"
            },

            {
                title: 'Atrocidades Maravilhosas - parte 1',
                url: "https://www.youtube.com/watch?v=uJ56kmVjFpI&list=RDMMUXgSy7Q1McY&index=7"
            },
        
            {
                title: 'Atrocidades Maravilhosas',
                url: "https://www.youtube.com/watch?v=_io15ZQlod0&list=RDMMUXgSy7Q1McY&index=6"
            },

            {
                title: 'Atrocidades Maravilhosas',
                url: "https://www.youtube.com/watch?v=uJ56kmVjFpI&list=RDMMUXgSy7Q1McY&index=7"
            },

            {
                title: 'Atrocidades Maravilhosas - parte 2',
                url: "https://www.youtube.com/watch?v=uJ56kmVjFpI&list=RDMMUXgSy7Q1McY&index=7"
            },
        
            {
                title: 'Atrocidades Maravilhosas',
                url: "https://www.youtube.com/watch?v=_io15ZQlod0&list=RDMMUXgSy7Q1McY&index=6"
            },

            {
                title: 'Atrocidade Grande',
                url: "https://www.youtube.com/watch?v=uJ56kmVjFpI&list=RDMMUXgSy7Q1McY&index=7"
            },
        ],
        textos: [
            {
                title: 'ATROCIDADES MARAVILHOSAS',
                url: "https://www.youtube.com/watch?v=_io15ZQlod0&list=RDMMUXgSy7Q1McY&index=6"
            },

            {
                title: 'REZENDE, Renato. SCOVINO, Felipe. Atrocidades Maravilhosas. in: Coletivos. (p. 18-55)',
                url: "https://www.youtube.com/watch?v=uJ56kmVjFpI&list=RDMMUXgSy7Q1McY&index=7"
            },
        
            {
                title: 'WONDERFUL ATROCITIES',
                url: "https://www.youtube.com/watch?v=_io15ZQlod0&list=RDMMUXgSy7Q1McY&index=6"
            },

            {
                title: 'Atrocidades Maravilhosas',
                url: "https://www.youtube.com/watch?v=uJ56kmVjFpI&list=RDMMUXgSy7Q1McY&index=7"
            },
        ],
    }

    return (
        <>
            <div className='coletivoBanner'>
            </div>

            <main>
                <div className="page_title">
                    <h2>Participantes</h2>

                    <button className='button_hover' onClick={() => navigate.push('/coletivos')}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <p>Voltar</p>
                    </button>
                </div>

                <Grid container className='participante_container'>
                    {informacoes.participantes.map((p, index) => (
                        <Grid item md={3} key={index} className="participante">
                            <a href={p.url} target="_blank" rel="noreferrer">
                                <h3>{p.title}</h3>
                            </a>
                        </Grid>
                    ))}
                </Grid>

                {informacoes?.sobre && (
                <>
                    <h2 className='page_title'>Sobre</h2>
                    <h2 className='page_title'>{informacoes.title}</h2>
                    
                    <p className="sobre">
                        {informacoes.sobre}
                        <br /><br />
                        Escrito por: {informacoes.autor}
                    </p>
                </>
                )}

                {informacoes?.galeria?.length > 0 && ( 
                    <>
                        <h2>Galeria</h2>
                        <Slider imgs={informacoes.galeria} />
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
                    {informacoes?.videos?.length > 0 && (
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
                                    {informacoes.videos.map((v, index) => (
                                        <Grid md={6} key={index}>
                                            <a href={v.url} target="_blank" rel="noreferrer" className="links_container">
                                                <FontAwesomeIcon icon={faPaperPlane} className="button_hover" />
                                                <p>{v.title}</p>
                                            </a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Collapse>
                        </>
                    )}
                    {informacoes?.textos?.length > 0 && (
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
                                    {informacoes.textos.map((t, index) => (
                                        <Grid md={6} key={index}>
                                            <a href={t.url} target="_blank" rel="noreferrer" className="links_container">
                                                <FontAwesomeIcon icon={faPaperPlane} className="button_hover" />
                                                <p>{t.title}</p>
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