const cases = {
    GET_PUBLICATIONS: 'GET_PUBLICATIONS',
};

const initialState = {
    data: [],
    years: [],
    separatedData: {},
}

const PublicationsReducers = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case cases.GET_PUBLICATIONS:
            return {
                data: payload.data,
                years: payload.years,
                separatedData: payload.separatedData,
            };
        default:
            return state;
    }
}

export default PublicationsReducers;
export { cases, initialState };