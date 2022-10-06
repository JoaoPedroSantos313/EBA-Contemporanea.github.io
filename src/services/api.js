import axios from 'axios';
const apiSufix = {
    artista: 'artistas',
    pesquisador: 'pesquisador'
}

const api = axios.create({
    baseURL: "http://localhost:4000" // "https://ebacontemporanea.herokuapp.com",
});

export {
    api,
    apiSufix
}