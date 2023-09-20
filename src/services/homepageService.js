import { api, apiSufix } from './api';

const getHomepageInformation = async() => {
    return await api.get(`/${api}/${apiSufix.home}`);
}

export { getHomepageInformation };