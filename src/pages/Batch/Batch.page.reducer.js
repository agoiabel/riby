import { updateObject } from '../../utils/updateObject';
import { STORE_BATCH, GET_BATCH_SUCCESSFUL, GET_BATCH_UNSUCCESSFUL } from './index';

const getBatchSuccessful = (state, action) => {
    return updateObject(state, {
        status: action.payload.status,
        candidates: action.payload.data
    });
}

const getBatchUnsuccessful = (state, action) => {
    return updateObject(state, {
        status: action.payload.status,
        message: action.payload.message,
    });
}

const initialState = {
    status: null,
    message: null,
    candidates: [],
};

const reducer = (state = initialState, action) => {
    const lookup = {
        GET_BATCH_SUCCESSFUL: getBatchSuccessful,
        GET_BATCH_UNSUCCESSFUL: getBatchUnsuccessful,
    }

    return lookup[action.type] ? lookup[action.type](state, action) : state;
}

export default reducer;