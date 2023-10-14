import { createContext, useContext, useReducer } from "react";
import ProjectReducers, { cases, initialState } from "../reducers/project";
import { getProjectInfo } from "../services/projectService.js";

const ProjectContext = createContext(initialState);

export const ProjectProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProjectReducers, initialState);

    const getProjectInformation = async () => {
        let response;
        
        await getProjectInfo()
            .then(res => {
                response = res.data.data[0];
            })
            .catch(err => console.error(err));

        dispatch({
            type: cases.GET_PROJECT_INFO,
            payload: {
                info: response
            }
        })
    }

    const value = {
        ...state,
        getProjectInformation
    }

    return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
}

const useProject = () => {
    const context = useContext(ProjectContext);

    if (context === undefined) {
        throw new Error("useProject must be used within ProjectContext");
    }

    return context;
};

export default useProject;