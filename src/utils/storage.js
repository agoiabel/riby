
export const setStorage = (key, value) => {
    return window.localStorage.setItem(key, JSON.stringify(value));
}

export const getStorage = key => {
    
    function parseJson(item) {
        try { return JSON.parse(item) }
        catch (e) { return item }
    }

    return window.localStorage.getItem(key).then(item => parseJson(item));
    
}