import { getTrendingMovies,
         getNetflixOriginals, 
         getMovies} from "../../utils/getMovies";
import movieActionTypes from "./movie.actions";


export const getTrending = () => {
    
    return dispatch => {
        getTrendingMovies().then(data => {
            const newArray = Array.prototype.concat.apply([], data.results);

            dispatch({
                type: movieActionTypes.GET_TRENDING_MOVIES,
                payload: newArray
            });
        });
    }
}

export const getOriginals = () => {
    return dispatch => {
        getNetflixOriginals().then( data => {
            const newArray = Array.prototype.concat.apply([], data.results);

            dispatch({
                type: movieActionTypes.GET_NETFLIX_ORIGINALS,
                payload: newArray
            })
        })
    }
}
export const getAction = () => {
    return dispatch => {
        getMovies('28').then( data => {
            const newArray = Array.prototype.concat.apply([], data.results);

            dispatch({
                type: movieActionTypes.GET_ACTION,
                payload: newArray
            })
        })
    }
}

export const getRomance = () => {
    return dispatch => {
        getMovies('10749').then( data => {
            const newArray = Array.prototype.concat.apply([], data.results);

            dispatch({
                type: movieActionTypes.GET_ROMANCE,
                payload: newArray
            })
        })
    }
}

export const getHorror = () => {
    return dispatch => {
        getMovies('27').then( data => {
            const newArray = Array.prototype.concat.apply([], data.results);

            dispatch({
                type: movieActionTypes.GET_HORROR,
                payload: newArray
            })
        })
    }
}


export const getThriller = () => {
    return dispatch => {
        getMovies('53').then( data => {
            const newArray = Array.prototype.concat.apply([], data.results);

            dispatch({
                type: movieActionTypes.GET_THRILLER,
                payload: newArray
            })
        })
    }
}

export const getAnimation = () => {
    return dispatch => {
        getMovies('16').then( data => {
            const newArray = Array.prototype.concat.apply([], data.results);

            dispatch({
                type: movieActionTypes.GET_ANIMATION,
                payload: newArray
            })
        })
    }
}
