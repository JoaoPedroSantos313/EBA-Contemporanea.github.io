import './style.css';
import { InfoCard } from '../../Components/InfoCard';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Filter } from '../../Components/filter';

export const Coletivos = () => {
    const navigate = useHistory();

    return (
        <main>
            <Filter />
            <Grid container spacing={5}>
                {[...Array(9).keys()].map(coletivo => (
                    <Grid item md={4} key={coletivo}>
                        <InfoCard 
                            artista={{
                                publicId: coletivo, nome: `Coletivo ${coletivo}`, fotoCard: null
                            }} 
                            goToArtist={(id) => navigate.push(`/coletivo/${id}`)}
                        />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}