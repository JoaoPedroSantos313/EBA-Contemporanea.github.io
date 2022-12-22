import './card.css';

export const ArtistCard = ({ artista, goToArtist, videoEmbedLink = null }) => {
    const { publicId, nome, fotoCard, active = true } = artista;
    const icon = active ? '/icon_pasta.svg' : '/icon_pasta_desativada.svg';

    return (
        <div className='card_container' onClick={() => { active && goToArtist(publicId) }}>
            <div className='card_label'>
                <div className={!active ? 'card_deactivated' : 'card_title'}>
                    <img className='card_title_img' src={icon} />
                    {nome}
                </div>
                <div className="card_image">
                    {videoEmbedLink 
                    ? <iframe width="100%" src={videoEmbedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ borderRadius: '6px' }}/>
                    : <img src={active ? fotoCard : 'no_img.png'} width="100%" height="100%" />
                    }
                </div>
            </div>
        </div>
    )
}
