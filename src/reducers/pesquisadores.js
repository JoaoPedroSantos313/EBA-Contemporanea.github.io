const cases = {
    GET_PESQUISADORES: 'GET_PESQUISADORES'
}

const initialState = {
    coordenador: [],
    bolsistasAtuais: [],
    bolsistasAnteriores: [],
    voluntarios: [],
    isLoading: true
}

const PesquisadoresReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case cases.GET_PESQUISADORES:
            const { 
                coordenador, 
                bolsistasAtuais, 
                bolsistasAnteriores, 
                voluntarios 
            } = payload.pesquisadores;
            return {
                coordenador,
                bolsistasAtuais, 
                bolsistasAnteriores, 
                voluntarios,
                isLoading: false
            };
        default:
            return state;
    }
}

export default PesquisadoresReducer;
export { initialState, cases };