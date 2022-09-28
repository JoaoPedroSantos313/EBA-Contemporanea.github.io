import { api } from './api';

const getArtista = async (publicId) => (
    await api.get(`/artista/${publicId}`)
        .then(res => res.data)
        .catch(err => console.error(err))
);

const getAllArtistas = (page = 1) => (
    api.get(`/artista?page=${page}`).then(res => res.data)
);

export {
    getArtista,
    getAllArtistas
}