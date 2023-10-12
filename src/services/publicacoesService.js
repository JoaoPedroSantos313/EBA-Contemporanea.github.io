import { api, apiSufix } from './api';

const getPublicacoes = async() => {
    return await api.get(`/${apiSufix.posts}`);
}

export { getPublicacoes };