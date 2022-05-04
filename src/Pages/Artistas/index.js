import { useEffect, useState } from 'react';
import { ArtistCard } from '../../Components/ArtistCard';

import { CircularProgress, Grid } from '@material-ui/core';
import { getAllArtistas } from '../../services/artistaService';
import './artistas.css';

export default function Artistas() {
    const abc_array = ["A","B","C","D","E","F","G","H",
                      "I","J","K","L","M","N","O","P",
                      "R","S","T","U","V","W","X","Y","Z"];

    const [info, setInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const getAllArtists = async() => {
            await getAllArtistas().then(res => {
                setIsLoading(false);
                setInfo(res);
            });
        }

        getAllArtists();
    }, []);
    
    return (
        <>
            <section className='abc_filter'>
                {abc_array.map(item => (<button>{item}</button>))}
            </section>

            <section className='artistas_main'>
            {isLoading ? (
                <CircularProgress />
            )
            : (
                <Grid container spacing="0" columns="3">
                {info && info.map(i => (
                    <Grid item md={4} key={i._id}> 
                        <ArtistCard
                            artista={i}
                        />
                    </Grid>
                ))}
                </Grid> 
            )}  
            </section>
        </>
    ) 
};