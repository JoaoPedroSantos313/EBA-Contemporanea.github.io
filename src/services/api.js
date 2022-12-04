import axios from 'axios';
const apiSufix = {
    artista: 'artistas',
    pesquisador: 'pesquisador'
}

const api = axios.create({
    baseURL: "https://ebac.fly.dev",
});

export {
    api,
    apiSufix
}