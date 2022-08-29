import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const { payload, type} = action;

    switch(type) {
        case userActionTypes.GET_CURRENT_USER: {
            return {
                ...state,
                currentUser: payload,
            }

        }
        default: 
        return state;
    }
}