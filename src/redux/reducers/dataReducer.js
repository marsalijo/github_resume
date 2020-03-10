import { GET_PROFILE, LOADING_PROFILE, GET_REPOS, LOADING_REPOS, SHOW_ERROR, CLEAR_ERROR } from '../types';

const initialState = {
    profileData : null,
    profileLoading: false,
    reposData: null,
    reposLoading: false,
    showResume: false,
    error: null   
}

export default function(state = initialState, action) {
    switch(action.type){
        case LOADING_PROFILE:
            return {
                ...state,
                profileLoading: true,
                error: null
            }
        case GET_PROFILE:
            return {
                ...state,
                profileData: action.payload,
                profileLoading: false,
                showResume: true,
            }
        case LOADING_REPOS:
            return {
                ...state,
                reposLoading: true,
                error: null
            }
        case GET_REPOS:
            return {
                ...state,
                reposData: action.payload,
                reposLoading: false,
                showResume: true,
            }
        case SHOW_ERROR: 
            return {
                loading: false,
                error: action.payload,
                profileLoading: false,
                reposLoading: false,
            }
        case CLEAR_ERROR:
            return {
                ...state,
                loading: false,
                error: null
            }
        default:
            return state;

    }
}