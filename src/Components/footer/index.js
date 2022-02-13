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
                        <img id='ufrj' src='/ufrj.png'></img>
                    </a>
                    <a href="#">
                        <img id='eba' src='/eba.png'></img>
                    </a>
                    <nav>
                        <ul id="menu_footer">
                            <li>
                                <li><a href="#">o projeto</a></li>
                            </li>
                            <li>
                                <li><a href="#">artistas</a></li>
                            </li>
                            <li>
                                <li><a href="#">pesquisadores</a></li>
                            </li>
                            <li>
                                <li><a href="#">cidade universitária</a></li>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='hr_main'>
                    <hr/>
                    <p>© 2020 por EBAContemporânea de 1975 à atualidade.</p>
                </div>
            </section>
        )
    }
}