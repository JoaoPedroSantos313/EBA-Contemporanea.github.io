import { createContext, useContext, useReducer } from "react";
import ArtistReducer, { initialState, cases } from "../reducers/artists";
import { getAllArtistas, getArtista, getPaginatedArtistas } from "../services/artistaService";

const ArtistContext = createContext(initialState);

export const ArtistProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ArtistReducer, initialState);

    const getPaginatedArtists = async (page, search) => {
        let apiResponse;
        await getPaginatedArtistas(page, search).then(res => apiResponse = res.data);
        dispatch({
            type: cases.GET_ARTISTS,
            payload: {
                artists: apiResponse?.artists,
                totalPages: apiResponse?.totalPages,
                allIds: apiResponse?.allIds,
                selectedLetter: search,
            }
        });

        dispatch({
            type: cases.GET_FILTER_LETTERS,
            payload: {
                filterLetters: apiResponse?.availableLetters
            }
        });
    };

    const getAllArtists = async () => {
        let apiResponse;
        await getAllArtistas().then(res => apiResponse = res.data);
        dispatch({
            type: cases.GET_ARTISTS,
            payload: {
                artists, totalPages
            }
        });
    }

    const getArtist = async (id) => {
        let apiResponse;
        await getArtista(id).then(res => apiResponse = res.data);

        dispatch({
            type: cases.SET_CURRENT_ARTIST,
            payload: {
                currentArtist: apiResponse.artista,
                navigation: apiResponse.navigation
            }
        })
    }

    const changePage = (page, search = '') => {
        getPaginatedArtists(page, search);

        dispatch({
            type: cases.SET_PAGE,
            payload: {
                page,
                selectedLetter: search
            }
        });
    };

    const setCurrentArtist = (artist) => {
        dispatch({
            type: cases.SET_CURRENT_ARTIST,
            payload: {
                currentArtist: artist
            }
        })
    }

    const value = {
        ...state,
        getAllArtists,
        getArtist,
        getPaginatedArtists,
        changePage,
        setCurrentArtist
    };
    return <ArtistContext.Provider value={value}>{children}</ArtistContext.Provider>;
};

const useArtist = () => {
    const context = useContext(ArtistContext);

    if (context === undefined) {
        throw new Error("useArtist must be used within ArtistContext");
    }

    return context;
};

export default useArtist;