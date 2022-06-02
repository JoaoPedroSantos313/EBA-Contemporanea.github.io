import { useEffect, useState } from 'react';
import { ArtistCard } from '../../Components/ArtistCard';

import { CircularProgress, Grid } from '@material-ui/core';
import { getAllArtistas } from '../../services/artistaService';
import './artistas.css';

export default function Artistas() {
    const [info, setInfo] = useState([]);
    const [filteredInfo, setFilteredInfo] = useState();
    const [filteredLetter, setFilteredLetter] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const getAllArtists = async() => {
            await getAllArtistas().then(res => {
                setIsLoading(false);
                setInfo(res);
                setFilteredInfo(res);
            });
        }

        getAllArtists();
    }, []);

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
                <Grid container spacing="0" columns="3">
                {filteredInfo ? filteredInfo.map(i => (
                    <Grid item md={4} key={i._id}> 
                        <ArtistCard
                            artista={i}
                        />
                    </Grid>
                ))
                : <>Desculpe, não temos nenhum resultado para sua busca.</>}
                </Grid> 
            )}  
            </section>
        </>
    ) 
};