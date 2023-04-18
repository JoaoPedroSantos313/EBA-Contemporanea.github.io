import './style.css';
import { InfoCard } from '../../Components/InfoCard';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Filter } from '../../Components/filter';

export const Entrevistas = () => {
    const navigate = useHistory();
    const isUnderConstruction = true;

    return (isUnderConstruction 
        ?<div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>Página em Construção</h1>
        </div>
        : <main>
            <Filter />
            <Grid container spacing={5}>
                {[...Array(9).keys()].map(entrevista => (
                    <Grid item md={4} key={entrevista}>
                        <InfoCard 
                            artista={{
                                publicId: entrevista, nome: `Entrevista ${entrevista}`, fotoCard: null
                            }} 
                            goToArtist={(id) => navigate.push('#')}
                            videoEmbedLink='https://www.youtube.com/embed/HBxn56l9WcU'
                            active={true}
                        />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}