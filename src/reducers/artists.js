const cases = {
    GET_ARTISTS: 'GET_ARTISTS',
    SET_PAGE: 'SET_PAGE',
    GET_FILTER_LETTERS: 'GET_FILTER_LETTERS',
    SET_CURRENT_ARTIST: 'SET_CURRENT_ARTIST',
    UPDATE_LOADING: 'UPDATE_LOADING'
};

const initialState = {
    artists: [],
    isLoading: true,
    currentPage: 1,
    totalPages: 1,
    currentArtist: {},
    filterLetters: [],
    allIds: document.cookie.allIds || [],
    navigation: { previous: 0, next: 0 },
    selectedLetter: '',
    filterTypes: [],
};

const ArtistReducer = (state, action) => {
    const { type, payload } = action;

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    switch (type) {
        case cases.UPDATE_LOADING: 
            return {
                ...state,
                isLoading: payload.isLoading,
            };
        case cases.GET_ARTISTS:
            return {
                ...state,
                isLoading: false,
                artists: payload.artists,
                totalPages: payload.totalPages,
                allIds: payload.allIds,
                selectedLetter: payload?.selectedLetter,
                filterTypes: payload?.filterTypes,
            };
        case cases.SET_PAGE:
            return {
                ...state,
                isLoading: false,
                currentPage: payload.page,
                selectedLetter: payload.selectedLetter
            };
        case cases.GET_FILTER_LETTERS:
            return {
                ...state,
                isLoading: false,
                filterLetters: payload.filterLetters,
            };
        case cases.SET_CURRENT_ARTIST:
            return {
                ...state,
                isLoading: false,
                currentArtist: payload.currentArtist,
                navigation: payload.navigation,
                isLoading: false,
            }
        default:
            return state;
    }
};

export default ArtistReducer;
export { initialState, cases };