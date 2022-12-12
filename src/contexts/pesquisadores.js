import { createContext, useContext, useReducer } from "react";
import PesquisadoresReducer, { cases, initialState } from "../reducers/pesquisadores";
import { getPesquisadores } from "../services/pesquisadoresService";

const PesquisadoresContext = createContext(initialState);

export const PesquisadoresProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PesquisadoresReducer, initialState);

    const getResearchers = async () => {
        let response;
        await getPesquisadores().then(res => response = res.data);

        dispatch({
            type: cases.GET_PESQUISADORES,
            payload: {
                pesquisadores: response
            }
        })
    }

    const value = {
        ...state,
        getResearchers
    }

    return <PesquisadoresContext.Provider value={value}>{children}</PesquisadoresContext.Provider>
}

const usePesquisadores = () => {
    const context = useContext(PesquisadoresContext);

    if (context === undefined) {
        throw new Error("usePesquisadores must be used within ArtistContext");
    }

    return context;
};

export default usePesquisadores;