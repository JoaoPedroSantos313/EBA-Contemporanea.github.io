import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid } from '@material-ui/core';
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
                        <img id='ufrj' src='/UFRJ.png' width="150px" />
                    </a>
                    <a href="#">
                        <img id='eba' src='/EBA.png' width="150px" />
                    </a>
                    <a href="#">
                        <img id="ppgav" src='/PPGAVE.png' width="150px" />
                    </a>
                    <a href="#">
                        <img id="faperj" src='/FAPERF.png' width="150px" />
                    </a>
                </div>
                <Grid container id="menu_footer">
                    <Grid item xs={4}>
                        <a>Artistas</a>
                        <a>Coletivos</a>
                        <a>O Projeto</a>
                    </Grid>
                    <Grid item xs={4}>
                        <i>Desenvolvido por:</i>
                        <a href="https://www.behance.net/joaopedros1520" target="_blank">
                            João Pedro
                        </a>
                        e
                        <a href="https://github.com/evelyncorrea" target="_blank">
                            Evelyn Ferreira
                        </a>
                    </Grid>
                    <Grid item xs={4}>
                        <a href="mailto:ebacontemporanea@gmail.com" className='email' style={{ justifyContent: 'flex-end', margin: 0 }}>
                            <FontAwesomeIcon icon={faEnvelope} size="2x" /> 
                            ebacontemporanea@gmail.com
                        </a>
                    </Grid>
                </Grid>
                <div className='hr_main'>
                    <p>© 2022 por EBAContemporânea de 1975 à atualidade.</p>
                </div>
            </section>
        )
    }
}