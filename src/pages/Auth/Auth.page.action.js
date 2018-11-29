import { setStorage } from '../../utils/storage';
import { post } from '../../utils/http_client';
import { AUTH_SUCCESSFUL, AUTH_UNSUCCESSFUL } from './index';

export const start_login = payload => {
    return async dispatch => {

        try {
            let response = await post(payload, 'user/login');

            response = await response.json();

            if (response.status !== 200) {
                return window.setTimeout((() => {
                    const payload = {
                        status: response.status,
                        message: `${response.message} ${Date.now()}`
                    }
                    dispatch(auth_unsucessful(payload));
                }));
            }

            try {
                await setStorage("RIBY:AUTH_USER_ID", response.data.id);
            } catch (error) {
                console.dir('Error storing in storage');
            }

            dispatch(auth_sucessful(response));
        } catch (error) {
            console.dir(error);
        }

    }
};


export const auth_sucessful = payload => {
    return {
        type: AUTH_SUCCESSFUL,
        payload: payload
    };
}


export const auth_unsucessful = payload => {
    return {
        type: AUTH_UNSUCCESSFUL,
        payload: payload
    }
}