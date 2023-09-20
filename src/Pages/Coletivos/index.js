import './style.css';
import { InfoCard } from '../../Components/InfoCard';
import { CircularProgress, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Filter } from '../../Components/filter';
import { useEffect } from 'react';
import useColetivos from '../../contexts/coletivos';
import { Pagination } from '@material-ui/lab';

export const Coletivos = () => {
    const navigate = useHistory();
    const {
        coletivos,
        getColetivosPaginated,
        isLoading,
        currentPage,
        totalPages,
        changePage,
        setCurrentColetivo
    } = useColetivos();

    useEffect(() => {
        getColetivosPaginated();
    }, []);

    const handlePagination = (e, page) => {
        changePage(page);
    }

    return (
        isLoading
            ? (
                <div className='loading_all'>
                    <CircularProgress style={{ color: '#D60000' }} />
                </div>
            )
            : (
                <main>
                    <div className='abc-filter'>
                        <Filter />
                    </div>
                    <Grid container spacing={5}>
                        {coletivos.map(coletivo => (
                            <Grid item md={4} key={coletivo.publicId}>
                                <InfoCard
                                    artista={{
                                        publicId: coletivo.publicId,
                                        nome: coletivo.nomeColetivo,
                                        fotoCard: coletivo.fotoCard,
                                        active: coletivo?.active
                                    }}
                                    publicId={coletivo.publicId}
                                    nome={coletivo.nomeColetivo}
                                    fotoCard={coletivo.fotoCard}
                                    goToArtist={(id) => {
                                        setCurrentColetivo(coletivo);
                                        navigate.push(`/coletivo/${id}`);
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <div className='pagination'>
                        <Pagination
                            page={currentPage} 
                            count={totalPages} 
                            variant="outlined" 
                            shape="rounded" 
                            onChange={handlePagination} 
                        />
                    </div>
                </main>
            )
    )
}