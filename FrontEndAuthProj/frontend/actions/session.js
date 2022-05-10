import {postUser,postSession,deleteSession} from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECIEVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const recieveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user,
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}

export const createNewUser = formUser => dispatch => postUser(formUser)
    .then(user => dispatch(recieveCurrentUser(user)));

export const login = formUser => dispatch => postSession(formUser)
    .then(user => dispatch(recieveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
.then(() => dispatch(logoutCurrentUser()));

