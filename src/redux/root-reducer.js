import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { movieReducer } from './movies/movie.reducer';
import { userReducer } from './user/user.reducer';
const middlewares = [logger, thunk];

const rootReducer = combineReducers({
    movie: movieReducer, 
    user: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(...middlewares));