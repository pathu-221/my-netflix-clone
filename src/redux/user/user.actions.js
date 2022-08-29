import { userActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
    type: userActionTypes.GET_CURRENT_USER,
    payload: user,
})