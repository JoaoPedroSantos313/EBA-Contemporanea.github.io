const cases = {
    GET_COLETIVOS: 'GET_COLETIVOS',
    SET_PAGE: 'SET_PAGE',
    GET_FILTER_LETTERS: 'GET_FILTER_LETTERS',
    SET_CURRENT_COLETIVO: 'SET_CURRENT_COLETIVO'
};

const initialState = {
    coletivos: [],
    isLoading: true,
    currentPage: 1,
    totalPages: 1,
    currentColetivo: {},
    filterLetters: [],
};

const ColetivosReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case cases.GET_COLETIVOS:
            return {
                ...state,
                isLoading: false,
                coletivos: payload.coletivos,
                totalPages: payload.totalPages,
            };
        case cases.SET_PAGE:
            return {
                ...state,
                currentPage: payload.currentPage,
            };
        case cases.GET_FILTER_LETTERS:
            return {
                ...state,
                filterLetters: payload.letters,
            };
        case cases.SET_CURRENT_COLETIVO:
            return {
                ...state,
                isLoading: false,
                currentColetivo: payload.coletivo,
            };
        default:
            return state;
    }
}


export default ColetivosReducer;
export { initialState, cases };