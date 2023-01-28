import { Grid } from '@material-ui/core';
import './pesquisadores.css';

const Pesquisadores = ({ pesquisador }) => {
    const { foto, nome, descricao, links } = pesquisador;
    return (
        <Grid container className="card-container">
            <Grid item xs={3} className="card-picture">
                <img src={foto} height="100%" />
            </Grid>
            <Grid item xs={9} className="card-info">
                <div className='card-title'>
                    <h2 className="card-name">{nome}</h2>
                    <div>
                        {links?.map((link, index) => {
                            const imgLink = () => {
                                switch (link.nome) {
                                    case 'Curriculum Lattes':
                                        return 'btnLattes.svg';
                                    case 'Academia.edu':
                                        return 'btnAcademiaEdu.svg';
                                    case 'Site':
                                        return 'btnSite.svg';
                                    default:
                                        return 'btnSite.svg';
                                }
                            };

                            return (
                                <a key={index} className="card-link" href={link.url} rel="noreferrer" target="_blank">
                                    <img src={imgLink()} alt={link.nome} height="37px" />
                                </a>
                            )
                        })}
                    </div>
                </div>
                <p className="card-description">{descricao}</p>
            </Grid>
        </Grid>
    )
}

export default Pesquisadores;