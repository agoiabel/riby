import {combineReducers} from 'redux';

import { reducer as formReducer } from 'redux-form';
import authReducer from '../pages/Auth/Auth.page.reducer';
import batchReducer from '../pages/Batch/Batch.page.reducer';
import modalReducer from '../components/Modal/Modal.reducer';
import batchesReducer from '../pages/Batches/Batches.page.reducer';
import forgotPasswordReducer from '../pages/ForgotPassword/ForgotPassword.page.reducer';

export default combineReducers({
    form: formReducer,
    authReducer: authReducer,
    modalReducer: modalReducer,
    batchReducer: batchReducer,
    batchesReducer: batchesReducer,
    forgotPasswordReducer: forgotPasswordReducer
});