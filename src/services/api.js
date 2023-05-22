import axios from 'axios';

const apiSufix = {
    artista: 'artista',
    pesquisador: 'pesquisadores',
    coletivo: 'coletivos',
}

const url = {
    prod: "https://ebac.fly.dev",
    local: "http://localhost:4000"
}

const currentUrl = window.location.href.indexOf("localhost") > -1 ? url.prod : url.local;

const api = axios.create({
    baseURL: currentUrl,
});

export {
    api,
    apiSufix
}