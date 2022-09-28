import React, { useEffect, useState } from 'react';
import { ArtistCard } from '../../Components/ArtistCard';

import { CircularProgress, Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { getAllArtistas } from '../../services/artistaService';
import './artistas.css';

export default function Artistas() {
    const [info, setInfo] = useState([]);
    const [filteredInfo, setFilteredInfo] = useState();
    const [filteredLetter, setFilteredLetter] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    
    const getAllArtists = async(page) => {
        await getAllArtistas(page).then(res => {
            console.log(res);
            setIsLoading(false);
            setInfo(res.artists);
            setFilteredInfo(res.artists);
            setTotalPages(res.totalPages);
        });
    }

    useEffect(() => {
        getAllArtists(1);
    }, []);

    const handlePagination = (e, page) => {
        setIsLoading(true);
        setCurrentPage(page);
        getAllArtists(page);
    }

    const lettersArray = ["A","B","C","D","E","F","G","H", "I","J","K","L","M","N","O","P", "R","S","T","U","V","W","X","Y","Z"];

    const filtrar = (letra) => {
        if(filteredLetter == letra) {
            setFilteredLetter(undefined);
            setFilteredInfo(info);
        } else {
            const filtered = info.filter(i => i.nome.indexOf(letra) === 0);
            setFilteredLetter(letra);
            setFilteredInfo(filtered);
        }
    }
    
    return (
        <>
            <section className='abc_filter'>
                {lettersArray.map(item => (
                    <button onClick={() => filtrar(item)}>
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
                <Grid container spacing="2" columns="3">
                {filteredInfo?.length > 0 ? filteredInfo.map(i => (
                    <Grid item md={4} key={i._id}> 
                        <ArtistCard
                            artista={i}
                        />
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