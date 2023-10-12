import { api, apiSufix } from './api';

const getHomepageInformation = async() => {
    return await api.get(`/${apiSufix.home}`);
}

export { getHomepageInformation };