import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export default class Footer extends Component {
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
                        <img id='ufrj' src='/ufrj.png' width="150px" />
                    </a>
                    <a href="#">
                        <img id='eba' src='/eba.png' width="150px" />
                    </a>
                    <a href="#">
                        <img id="ppgav" src='/logo_ppgav.png' width="150px" />
                    </a>
                    <a href="#">
                        <img id="faperj" src='/faperj.png' width="150px" />
                    </a>
                </div>
                <nav id="menu_footer">
                    <p>Desenvolvido por:
                        <a href="https://www.behance.net/joaopedros1520" target="_blank" style={{ margin: '0 5px' }}>
                            João Pedro Santos
                        </a>
                        e
                        <a href="https://github.com/evelyncorrea" target="_blank" style={{ marginLeft: '5px' }}>
                            Evelyn Ferreira
                        </a>
                    </p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> ebacontemporanea@gmail.com</p>
                </nav>
                <div className='hr_main'>
                    <hr />
                    <p>© 2020 por EBAContemporânea de 1975 à atualidade.</p>
                </div>
            </section>
        )
    }
}