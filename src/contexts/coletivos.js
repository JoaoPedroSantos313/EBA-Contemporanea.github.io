import { createContext, useContext, useReducer } from "react";
import ColetivosReducer, { initialState, cases } from "../reducers/coletivos";
import { getPaginatedColetivos, getColetivo } from '../services/coletivosService';

const ColetivosContext = createContext(initialState);

export const ColetivosProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ColetivosReducer, initialState);

    const getColetivosPaginated = async (page, search = '') => {
        let apiResponse;
        await getPaginatedColetivos(page, search).then(res => apiResponse = res.data);
        dispatch({
            type: cases.GET_COLETIVOS,
            payload: {
                coletivos: apiResponse?.coletivos,
                totalPages: apiResponse?.totalPages
            }
        });
    }
    
    const getSingleColetivo = async (id) => {
        let apiResponse;
        await getColetivo(id).then(res => apiResponse = res.data);
        console.log(apiResponse);
        dispatch({
            type: cases.SET_CURRENT_COLETIVO,
            payload: {
                coletivo: apiResponse?.coletivo,
            }
        })
    }

    const changePage = async (page) => {
        getColetivosPaginated(page);

        dispatch({
            type: cases.SET_PAGE,
            payload: {
                page,
            }
        });
    }

    const setCurrentColetivo = (coletivo) => {
        dispatch({
            type: cases.SET_CURRENT_COLETIVO,
            payload: { coletivo }
        })
    }

    const value = {
        ...state,
        getColetivosPaginated,
        getSingleColetivo,
        changePage,
        setCurrentColetivo
    };

    return <ColetivosContext.Provider value={value}>{children}</ColetivosContext.Provider>;
}

const useColetivos = () => {
    const context = useContext(ColetivosContext);

    if (context === undefined) {
        throw new Error("useColetivos must be used within ColetivosContext");
    }

    return context;
};

export default useColetivos;
