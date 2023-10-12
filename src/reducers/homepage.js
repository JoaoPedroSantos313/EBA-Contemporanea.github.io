const cases = {
    GET_HOMEPAGE_INFO: 'GET_HOMEPAGE_INFO',
};

const initialState = {
    firstParagraph: { 
        text: '', 
        title: '',
        buttonLink: ''
    },
    secondParagraph: { 
        text: '', 
        title: '',
        buttonLink: ''
    },
    galleryImages: [],
    headerLinks: [],
}

const HomepageReducers = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case cases.GET_HOMEPAGE_INFO:
            return payload.info;
        default:
            return state;
    }
}

export default HomepageReducers;
export { cases, initialState };