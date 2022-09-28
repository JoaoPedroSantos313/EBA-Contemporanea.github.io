import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export default class Footer extends Component{
    render() {
        return (
            <section className="footer_container">
                <div className="faixa">
                    <Link to="/">
                        <img className='logo_footer' src='/logo_h_white.png'></img>
                        <img className='logo2_footer' src='/logo_h_completo_white.png'></img>
                    </Link>
                </div>
                <div className="footer_main">
                    <a href="#">
                        <img id='ufrj' src='/ufrj.png' width="200px" />
                    </a>
                    <a href="#">
                        <img id='eba' src='/eba.png' width="200px" />
                    </a>
                    <a href="#">
                        <img id="ppgav" src='/logo_ppgav.png' />
                    </a>
                    <a href="#">
                        <img id="faperj" src='/faperj.png' />
                    </a>
                </div>
                <nav id="menu_footer">
                    <ul style={{ display: 'flex' }}>
                        <li>
                            <li><a href="/artistas">artistas</a></li>
                        </li>
                        <li>
                            <li><a href="/coletivos">coletivos</a></li>
                        </li>
                        <li>
                            <li><a href="/">o projeto</a></li>
                        </li>
                    </ul>
                    <p>Desenvolvido por: 
                        <a href="https://www.behance.net/joaopedros1520" target="_blank">
                            João Pedro Santos 
                        </a>
                        e 
                        <a href="https://github.com/evelyncorrea" target="_blank">
                            Evelyn Ferreira
                        </a>
                    </p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> ebacontemporanea@gmail.com</p>
                </nav>
                <div className='hr_main'>
                    <hr/>
                    <p>© 2020 por EBAContemporânea de 1975 à atualidade.</p>
                </div>
            </section>
        )
    }
}