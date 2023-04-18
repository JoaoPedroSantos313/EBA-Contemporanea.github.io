import { api, apiSufix } from './api';

const getColetivo = async (publicId) => {
    return await api.get(`/${apiSufix.coletivo}/${publicId}`);
};

const getAllColetivos = async () => {
    return await api.get(`/${apiSufix.coletivo}?getAll=true`);
};

const getPaginatedColetivos = async (page = 1, search = '') => {
    return await api.get(`/${apiSufix.coletivo}?search=${search}&page=${page}`);
}

export {
    getColetivo,
    getAllColetivos,
    getPaginatedColetivos
}