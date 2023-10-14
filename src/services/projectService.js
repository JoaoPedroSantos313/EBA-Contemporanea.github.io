import { api, apiSufix } from './api';

const getProjectInfo = async() => {
    return await api.get(`/${apiSufix.project}`);
}

export { getProjectInfo };