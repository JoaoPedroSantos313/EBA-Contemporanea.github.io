import './style.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from '@material-ui/core';
import usePublicacoes from '../../contexts/publicacoes';

export default function Publicacoes() {
    const { getPublications, years, separatedData } = usePublicacoes();
    const [collapseStateYears, setCollapseStateYears] = useState({});

    useEffect(() => {
        getPublications();
    }, []);

    useEffect(() => {
        if(years.length > 0) {
            years.map(year => {
                setCollapseStateYears(curr => {
                    return {
                        ...curr,
                        [year]: {
                            isCollapsed: false
                        }
                    }
                });
            });
        }
    }, [years]);

    return (
        <main>
            <h2 className='page-title'>Publicações</h2>

            {years.map((ano, index) => {
                const isYearCollapsed = collapseStateYears[ano]?.isCollapsed;

                const editCollapseState = (newState) => {
                    setCollapseStateYears(curr => ({
                        ...curr,
                        [ano]: {
                            isCollapsed: newState
                        }
                    }))
                }

                return (<div className='publicacao-container'>

                    <div className='collapse-container'>
                        <h2 key={index}>{ano}</h2>

                        {isYearCollapsed ?
                            <button onClick={() => { editCollapseState(false) }} className='button-right button_navigation button_hover'>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </button>
                            : <button onClick={() => { editCollapseState(true) }} className='button-right button_navigation button_hover'>
                                <FontAwesomeIcon icon={faChevronUp} />
                            </button>
                        }
                    </div>

                    <Collapse in={!isYearCollapsed} unmountOnExit className="collapse_section">
                        {separatedData[ano].map((post, i) => (
                            <a key={i} href={post.link} target='_blank' className="info_links">
                                <div className="button_hover">
                                    <FontAwesomeIcon icon={faPaperPlane} className='button-left' />
                                </div>
                                <p>{post.name}</p>
                            </a>
                        ))}
                    </Collapse>
                </div>)
            })}
        </main>
    )
};