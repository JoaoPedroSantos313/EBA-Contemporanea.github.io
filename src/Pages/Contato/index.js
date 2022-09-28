import './contato.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contato(){
    return(
        <main>
            <h1>Contato</h1>
            <br />
            <h6>EBA<span className='redTitle'>Contemporanea</span></h6>
            <br />
            <p>Av. Athos da Silveira Ramos, 149 - Cidade Universitária da Universidade Federal do Rio de Janeiro, Rio de Janeiro - RJ, 21941-485</p>
            <p>ebacontemporanea@gmail.com</p>
            <p>Tel: 021-8888-8888</p>
            <p>Fax: 021-8888-8888</p>
            <br />
            <a href="#" className='redeSocialLink'>
                <FontAwesomeIcon icon={faTwitter} />
                Siga no Twitter
            </a>
            <br />
            <a href='#' className='redeSocialLink'>
                <FontAwesomeIcon icon={faLinkedin}/>
                Siga no LinkedIn
            </a>
        </main>
    )
};