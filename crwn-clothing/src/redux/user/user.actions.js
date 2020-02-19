export const setCurrentUser = user => ({
    // consts should always have snake case
    type: 'SET_CURRENT_USER',
    payload: user
});