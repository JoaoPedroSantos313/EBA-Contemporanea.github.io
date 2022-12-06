import React, { useEffect, useState } from 'react';
import { ArtistCard } from '../../Components/ArtistCard';
import { CircularProgress, Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import './artistas.css';
import useArtist from '../../contexts/artists';
import { useHistory } from 'react-router-dom';

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

    const [currentLetter, setCurrentLetter] = useState();

    useEffect(() => {
        getPaginatedArtists();
    }, []);

    const handlePagination = (e, page) => {
        changePage(page);
    }

    const filtrar = (letra) => {
        if (letra === currentLetter) {
            setCurrentLetter(null);
            getPaginatedArtists(1);
        } else {
            setCurrentLetter(letra);
            getPaginatedArtists(1, letra)
        }
    }

    const goToArtist = (id) => {
        const artist = artists.filter(artist => artist.publicId == id);
        setCurrentArtist(artist);
        navigate.push(`/artista/${id}`);
    }

    return (
        <>
            <section className='abc_filter'>
                {filterLetters?.map((item, index) => (
                    <button 
                        className={currentLetter === item && 'active-button'}
                        key={index} 
                        onClick={() => filtrar(item)}
                    >
                        {item}
                    </button>
                ))}
            </section>

            <section className='artistas_main'>
                {isLoading ? (
                    <CircularProgress />
                )
                    : (
                        <>
                            <Grid container spacing={2} columns="3">
                                {artists?.length > 0 ? artists.map(i => (
                                    <Grid item md={4} key={i._id}>
                                        <ArtistCard artista={i} goToArtist={goToArtist} />
                                    </Grid>
                                ))
                                    : <p>Desculpe, não temos nenhum resultado para sua busca.</p>}
                            </Grid>
                            <div style={{ marginTop: '50px' }}>
                                <Pagination page={currentPage} count={totalPages} variant="outlined" shape="rounded" onChange={handlePagination} />
                            </div>
                        </>
                    )}
            </section>
        </>
    )
};