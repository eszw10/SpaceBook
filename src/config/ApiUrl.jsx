function ApiURL() {
    return 'https://arvin.aenzt.tech';
}

function userToken() {
    return `Bearer ${window.localStorage.getItem('token')}`
}

function adminToken() {
    return `Bearer ${window.localStorage.getItem('AdminToken')}`
}
export {ApiURL, userToken, adminToken}
