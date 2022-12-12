import axios from 'axios';

const apiSufix = {
    artista: 'artista',
    pesquisador: 'pesquisadores'
}

const api = axios.create({
    baseURL: "https://ebac.fly.dev",
});

export {
    api,
    apiSufix
}