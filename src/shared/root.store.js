import thunk from 'redux-thunk';
import rootReducer from './root.reducer';
import { createStore, compose, applyMiddleware } from 'redux';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk))
);

export default store;