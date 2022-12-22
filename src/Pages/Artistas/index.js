import React, { useEffect, useState } from 'react';
import { ArtistCard } from '../../Components/ArtistCard';
import { CircularProgress, Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import './artistas.css';
import useArtist from '../../contexts/artists';
import { useHistory } from 'react-router-dom';
import { Filter } from '../../Components/filter';

export default function Artistas() {
    const navigate = useHistory();
    const {
        artists,
        getPaginatedArtists,
        isLoading,
        totalPages,
        filterLetters,
        currentPage,
        changePage,
        setCurrentArtist
    } = useArtist();

    useEffect(() => {
        getPaginatedArtists();
    }, []);

    const handlePagination = (e, page) => {
        changePage(page);
    }

    const goToArtist = (id) => {
        const artist = artists.filter(artist => artist.publicId == id);
        setCurrentArtist(artist);
        navigate.push(`/artista/${id}`);
    }

    return (
        isLoading
            ? (
                <div className='loading_all'>
                    <CircularProgress style={{ color: '#D60000' }} />
                </div>
            )
            : (
                <section className='artistas_main'>
                    <Filter letters={filterLetters} filterFunction={getPaginatedArtists} />
                    <Grid container>
                        {artists?.length > 0 ? artists.map(i => (
                            <Grid item md={4} key={i._id}>
                                <ArtistCard artista={i} goToArtist={goToArtist} />
                            </Grid>
                        ))
                            : <p>Desculpe, não temos nenhum resultado para sua busca.</p>}
                    </Grid>
                    <div className='pagination'>
                        <Pagination page={currentPage} count={totalPages} variant="outlined" shape="rounded" onChange={handlePagination} />
                    </div>
                </section>
            )
    )
};