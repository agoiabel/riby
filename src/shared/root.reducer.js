import {combineReducers} from 'redux';

import authReducer from '../pages/Auth/Auth.page.reducer';
import modalReducer from '../components/Modal/Modal.reducer';

export default combineReducers({
    authReducer: authReducer,
    modalReducer: modalReducer
});