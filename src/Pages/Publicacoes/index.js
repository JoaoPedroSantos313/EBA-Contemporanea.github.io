import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Publicacoes() {
    return (
        <main>
            <h2 className='page-title'>Publicações</h2>

            {[...Array(9).keys()].map(publicacao => (
                <a href='#' target='_blank' className="info_links">
                    <div class="button_hover">
                        <FontAwesomeIcon icon={faPaperPlane} className='button-left' />
                    </div>
                    <p>publi {publicacao}</p>
                </a>
            ))}
        </main>
    )
};