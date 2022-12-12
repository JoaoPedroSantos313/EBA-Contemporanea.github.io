import { api, apiSufix } from './api';

const getArtista = async (publicId) => {
    return await api.get(`/${apiSufix.artista}/${publicId}`);
};

const getAllArtistas = async () => {
    return await api.get(`/${apiSufix.artista}?getAll=true`);

};

const getPaginatedArtistas = async (page = 1, search = '') => {
    return await api.get(`/${apiSufix.artista}?search=${search}&page=${page}`);
}

export {
    getArtista,
    getAllArtistas,
    getPaginatedArtistas
}