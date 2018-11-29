import { getStorage } from './storage';

export const post = async (formData, end_point) => {

    return fetch('http://whitelist.tradermoni.ng/api_gdm/' + end_point, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer 012HRlcjoxMjM0NI0YWRhcTY3OHVpY'
        },
        body: JSON.stringify(formData)
    });

}


export const get = async end_point => {

    return fetch('http://whitelist.tradermoni.ng/api_gdm/' + end_point, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer 012HRlcjoxMjM0NI0YWRhcTY3OHVpY'
        },
    });

}