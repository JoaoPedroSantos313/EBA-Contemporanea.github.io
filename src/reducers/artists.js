const cases = {
    GET_ARTISTS: 'GET_ARTISTS',
    SET_PAGE: 'SET_PAGE',
    GET_FILTER_LETTERS: 'GET_FILTER_LETTERS',
    SET_CURRENT_ARTIST: 'SET_CURRENT_ARTIST'
};

const initialState = {
    artists: [],
    isLoading: true,
    currentPage: 1,
    totalPages: 1,
    currentArtist: {},
    filterLetters: [],
    allIds: document.cookie.allIds || [],
    navigationIds: { previous: 0, next: 0 }
};

const ArtistReducer = (state, action) => {
    const { type, payload } = action;

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    switch (type) {
        case cases.GET_ARTISTS:
            document.cookie = `allIds=${payload.allIds}`
            return {
                ...state,
                isLoading: false,
                artists: payload.artists,
                totalPages: payload.totalPages,
                allIds: payload.allIds
            };
        case cases.SET_PAGE:
            return {
                ...state,
                currentPage: payload.page,
            };
        case cases.GET_FILTER_LETTERS:
            return {
                ...state,
                filterLetters: payload.filterLetters,
            };
        case cases.SET_CURRENT_ARTIST:
            const idPosition = state.allIds.findIndex(id => id == payload.currentArtist.publicId);
            console.log(idPosition, 'inside reducer')
            return {
                ...state,
                currentArtist: payload.currentArtist,
                navigationIds: {
                    previous: state.allIds[idPosition - 1],
                    next: state.allIds[idPosition + 1]
                },
                isLoading: false,
            }
        default:
            return state;
    }
};

export default ArtistReducer;
export { initialState, cases };