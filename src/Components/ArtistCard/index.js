import { Link } from 'react-router-dom';
import './card.css';

export const ArtistCard = ({ artista }) => { 
    const { publicId, nome, fotoCard } = artista;

    return (
    <Link to={{ pathname: `/artistas_pag1/${publicId}`, state: { artista }}}>
        <div className='card_label'>
            <div className='card_title'>
                <img className='card_title_img' src='icon_pasta.png' /> 
                {nome}
            </div>
            <img className='card_image' src={fotoCard} width="100%" />
        </div>
    </Link>
)}
