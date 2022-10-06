import './card.css';

export const ArtistCard = ({ artista, goToArtist }) => { 
    const { publicId, nome, fotoCard } = artista;

    return (
        <div className='card_container' onClick={() => goToArtist(publicId)}>
            <div className='card_label'>
                <div className='card_title'>
                    <img className='card_title_img' src='icon_pasta.png' /> 
                    {nome}
                </div>
                <img className='card_image' src={fotoCard} width="100%" />
            </div>
        </div>
)}
