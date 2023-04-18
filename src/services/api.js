import axios from 'axios';

const apiSufix = {
    artista: 'artista',
    pesquisador: 'pesquisadores',
    coletivo: 'coletivos',
}

const api = axios.create({
    baseURL: "https://ebac.fly.dev",
});

export {
    api,
    apiSufix
}