import {UserActionTypes} from './user.types';

export const setCurrentUser = user => ({
    // consts should always have snake case
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});