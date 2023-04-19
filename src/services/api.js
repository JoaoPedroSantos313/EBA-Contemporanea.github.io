import axios from 'axios';

const apiSufix = {
    artista: 'artista',
    pesquisador: 'pesquisadores',
    coletivo: 'coletivos',
}

const api = axios.create({
    baseURL: 'http://localhost:4000' // "https://ebac.fly.dev",
});

export {
    api,
    apiSufix
}