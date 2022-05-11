import {RECEIVE_CURRENT_USER,RECEIVE_ERRORS,LOGOUT_CURRENT_USER}from  "../actions/session_actions"

const _nullSession = {
    currentUser: null,
}

export default (state = _nullSession, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {[action.user.id]: action.user});
        case RECEIVE_ERRORS:
            return Object.assign({}, { session:  )
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}