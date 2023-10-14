const cases = {
    GET_PROJECT_INFO: 'GET_PROJECT_INFO',
};

const initialState = {
    fullText: "",
    boldText: "",
    galleryImages: []
}

const ProjectReducers = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case cases.GET_PROJECT_INFO:
            return payload.info;
        default:
            return state;
    }
}

export default ProjectReducers;
export { cases, initialState };