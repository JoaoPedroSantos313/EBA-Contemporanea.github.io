import { Link } from 'react-router-dom';
import './card.css';

export const ArtistCard = ({ id, title, image }) => (
    <Link to={`/artistas_pag1/${id}`}>
        <div className='card_label'>
            <button className='card_title'>
                <img src='icon_pasta.png' /> 
                {title}
            </button>
            <button className='card_image'>
                <img src={image} />
            </button>
        </div>
    </Link>
)
