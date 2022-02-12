import { api } from './api';

const getArtista = async (publicId) => (
    await api.get(`/artista/${publicId}`)
        .then(res => res.data)
        .catch(err => console.error(err))
);

const getAllArtistas = () => (
    // api fix catalogo collection
    api.get('/artista').then(res => res.data)
);

export {
    getArtista,
    getAllArtistas
}