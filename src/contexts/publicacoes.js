import { createContext, useContext, useReducer } from "react";
import PublicationsReducers, { cases, initialState } from '../reducers/publicacoes';
import { getPublicacoes } from '../services/publicacoesService';

const PublicacoesContext = createContext(initialState);

export const PublicacoesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PublicationsReducers, initialState);

    const getPublications = async() => {
        let response;

        await getPublicacoes()
            .then(res => {
                response = res.data
            })
            .catch(err => console.error(err));

        dispatch({
            type: cases.GET_PUBLICATIONS,
            payload: response
        })
    };

    const value = {
        ...state,
        getPublications
    };

    return <PublicacoesContext.Provider value={value}>{children}</PublicacoesContext.Provider>
}

const usePublicacoes = () => {
    const context = useContext(PublicacoesContext);

    if(context === undefined) {
        throw new Error("usePublicacoes must be used within PublicacoesContext");
    }

    return context;
}

export default usePublicacoes;