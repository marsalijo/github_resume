import { GET_PROFILE, LOADING_PROFILE, GET_REPOS, LOADING_REPOS, SHOW_ERROR, CLEAR_ERROR } from '../types';
import ajaxWrapper from '../../utils/ajaxWrapper';

export const getProfile = (username) => (dispatch) => {
    dispatch({ type: LOADING_PROFILE })
    ajaxWrapper(`users/${username}`, "GET")
        .then((res) => {
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
            dispatch({ type: CLEAR_ERROR });
        })
        .catch(err => {
            dispatch(showError(err))
        });
};

export const getRepositories = (username) => (dispatch) => {
    dispatch({ type: LOADING_REPOS })
    ajaxWrapper(`users/${username}/repos`, "GET")
        .then((res) => {
            dispatch({
                type: GET_REPOS,
                payload: res.data
            })
            dispatch({ type: CLEAR_ERROR });
        })
        .catch(err => {
            dispatch(showError(err))
        });
}

export const showError = (err) => (dispatch) => {
    switch (err.status) {
        case 404:
            err = {
                ...err,
                statusText: 'This username does not exist on github!'
            }
            dispatch({
                type: SHOW_ERROR,
                payload: err
            })
            break;
        default:
            break;
      }
      return false;

}
