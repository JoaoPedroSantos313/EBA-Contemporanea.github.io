import { createContext, useContext, useReducer } from "react";
import HomepageReducers, { cases, initialState } from "../reducers/homepage";
import { getHomepageInformation } from "../services/homepageService";

const HomepageContext = createContext(initialState);

export const HomepageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(HomepageReducers, initialState);

    const getHomeInfo = async () => {
        let response;
        
        await getHomepageInformation()
            .then(res => {
                response = res.data.data[0];
            })
            .catch(err => console.error(err));

        dispatch({
            type: cases.GET_HOMEPAGE_INFO,
            payload: {
                info: response
            }
        })
    }

    const value = {
        ...state,
        getHomeInfo
    }

    return <HomepageContext.Provider value={value}>{children}</HomepageContext.Provider>
}

const useHomepage = () => {
    const context = useContext(HomepageContext);

    if (context === undefined) {
        throw new Error("useHomepage must be used within HomepageContext");
    }

    return context;
};

export default useHomepage;