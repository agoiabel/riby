import { get } from '../../utils/http_client';
import { GET_BATCH_SUCCESSFUL, GET_BATCH_UNSUCCESSFUL } from './index';

export const get_batch = batchId => async dispatch => {

    try {
        let response = await get(`batch/batchcandidates/${batchId}`);

        response = await response.json();

        if (response.status !== 200) {
            return window.setTimeout((() => {
                dispatch(get_batch_unsucessful());
            }));
        }

        dispatch(get_batch_sucessful(response));
    } catch (error) {
        console.dir(error);
    }


};


export const get_batch_sucessful = payload => {
    return {
        type: GET_BATCH_SUCCESSFUL,
        payload: payload
    };
}


export const get_batch_unsucessful = payload => {
    return {
        type: GET_BATCH_UNSUCCESSFUL,
        payload: payload
    }
}