import { api, apiSufix } from "./api";

const getPesquisadores = async() => (
    await api.get(`/${apiSufix.pesquisador}`)
);

export {
    getPesquisadores
}