import movieActionTypes from "./movie.actions";

const INITIAL_STATE = {
    trending: [],
    netflixOriginals: [],
    romance: [],
    action: [],
    thriller: [],
    horror: [],
    animation: []
}



export const movieReducer = (state = INITIAL_STATE, action) => {
    const { type, payload} = action;
    switch(type) {
        case movieActionTypes.GET_TRENDING_MOVIES: 
        return {
            ...state, 
           trending: payload
        }
        case movieActionTypes.GET_NETFLIX_ORIGINALS:
            return {
                ...state,
                netflixOriginals: payload
            }
            case movieActionTypes.GET_ACTION:
                return {
                    ...state,
                    action: payload
                }
                case movieActionTypes.GET_ROMANCE:
                return {
                    ...state,
                    romance: payload
                }
                case movieActionTypes.GET_HORROR:
                return {
                    ...state,
                    horror: payload
                }
                case movieActionTypes.GET_THRILLER:
                return {
                    ...state,
                    thriller: payload
                }
                case movieActionTypes.GET_ANIMATION:
                return {
                    ...state,
                    animation: payload
                }
        default:
            return state;
    }
}