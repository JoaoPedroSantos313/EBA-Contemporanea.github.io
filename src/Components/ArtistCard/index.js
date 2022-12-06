import './card.css';

export const ArtistCard = ({ artista, goToArtist }) => { 
    const { publicId, nome, fotoCard, active = true } = artista;
    const icon = active ? '/icon_pasta.svg' : '/icon_pasta_desativada.svg';

    return (
        <div className='card_container' onClick={() => { active && goToArtist(publicId) }}>
            <div className='card_label'>
                <div className={!active ? 'card_deactivated' : 'card_title'}>
                    <img className='card_title_img' src={icon} /> 
                    {nome}
                </div>
                <img className='card_image' src={fotoCard} width="100%" />
            </div>
        </div>
)}
