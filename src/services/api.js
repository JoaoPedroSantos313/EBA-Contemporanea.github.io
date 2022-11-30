import axios from 'axios';
const apiSufix = {
    artista: 'artistas',
    pesquisador: 'pesquisador'
}

const api = axios.create({
    baseURL: "https://ebacontemporanea.herokuapp.com",
});

export {
    api,
    apiSufix
}