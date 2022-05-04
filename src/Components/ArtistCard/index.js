import { Link } from 'react-router-dom';
import './card.css';

export const ArtistCard = ({ artista }) => { 
    const { publicId, nome, fotoBanner } = artista;

    return (
    <Link to={{ pathname: `/artistas_pag1/${publicId}`, state: { artista }}}>
        <div className='card_label'>
            <div className='card_title'>
                <img className='card_title_img' src='icon_pasta.png' /> 
                {nome}
            </div>
            <img className='card_image' src={fotoBanner} />
        </div>
    </Link>
)}
