import { setStorage } from '../../utils/storage';
import { get } from '../../utils/http_client';
import { GET_BATCHES_SUCCESSFUL, GET_BATCHES_UNSUCCESSFUL, STORE_BATCH } from './index';

export const get_batches = () => async dispatch => {

    try {
        let response = await get('batch/list');

        response = await response.json();

        if (response.status !== 200) {
            return window.setTimeout((() => {
                dispatch(get_batches_unsucessful());
            }));
        }

        dispatch(get_batches_sucessful(response));
    } catch (error) {
        console.dir(error);
        // if (error = ) {

        // }
    }


};

export const get_batches_sucessful = payload => {
    return {
        type: GET_BATCHES_SUCCESSFUL,
        payload: payload
    };
}


export const get_batches_unsucessful = payload => {
    return {
        type: GET_BATCHES_UNSUCCESSFUL,
        payload: payload
    }
}


export const store_batch = payload => {
    return {
        type: STORE_BATCH,
        payload: payload
    }
}