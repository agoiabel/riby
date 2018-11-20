import { getStorage } from './storage';

export const post = async (formData, end_point) => {

    // const AuthToken = await getStorage('DSTest:auth_token');
    return fetch('http://swiftpatriotapi.test/api/' + end_point, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'AuthToken': AuthToken
        },
        body: formData
    });

}

// export const get = async end_point => {

//     // const AuthToken = await get('DSTest:auth_token');

//     return fetch('http://localhost:1337/' + end_point, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             // 'AuthToken': AuthToken
//         },
//     });

// }
