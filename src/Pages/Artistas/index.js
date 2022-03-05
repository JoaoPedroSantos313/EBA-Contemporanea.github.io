import { useEffect, useState } from 'react';
import { ArtistCard } from '../../Components/ArtistCard';
import { getAllArtistas } from '../../services/artistaService';
import './artistas.css';

export default function Artistas() {
    const abc_array = ["A","B","C","D","E","F","G","H",
                      "I","J","K","L","M","N","O","P",
                      "R","S","T","U","V","W","X","Y","Z"];

    const [info, setInfo] = useState([]);

    
    useEffect(() => {
        const getAllArtists = async() => {
            await getAllArtistas().then(res => {
                setInfo(res);
                console.log(res);
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
                <div className="row">
                {info && info.map(i => (
                        <div className='col-sm' key={i._id}> 
                            <ArtistCard
                                title={i.nome}
                                image={i.fotoBanner}
                                id={i.publicId}
                            />
                        </div>
                ))}
                </div> 
                {/* <div className="row">
                    <div className='col-sm'> 
                        <ArtistCard 
                            icon={'icon_pasta.png'}
                            title="Agrippina R. Manhattan"
                            image={'AGRIPPINA_R_MANHATTAN_PIC.png'}
                            id={4}
                        />
                    </div> 
                    <div className='col-sm'>
                        <ArtistCard 
                            icon={'icon_pasta.png'}
                            title="Alexandre Vogler"
                            image={'ALEXANDRE_VOGLER_PIC.png'}
                            id={1}
                        />
                    </div>   
                    <div className='col-sm'>
                        <ArtistCard 
                            icon={'icon_pasta.png'}
                            title="Andréa Hygino"
                            image={'ANDREA_HYGNO_PIC.png'}
                            id={2}
                        />
                    </div> 
                </div>         
                <div className="row">
                    <div className='col-sm'> 
                        <ArtistCard 
                            icon={'icon_pasta.png'}
                            title="Ana Holck"
                            image={'MERY_HORTA_PIC.png'}
                            id={3}
                        />
                    </div> 
                    <div className='col-sm'>
                        <ArtistCard 
                            icon={'icon_pasta.png'}
                            title= "Angélica Dass"
                            image={'PANMELA_CASTRO_PIC.png'}
                            id={5}
                        />
                    </div>    
                    <div className='col-sm'/>            
                </div>    */}
            </section>  
        </>
    ) 
};