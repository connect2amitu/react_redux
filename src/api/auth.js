import { callApi } from "./index";

const ADMIN_LOGIN_URL = "admin/login";
const USER_LOGIN_URL = "admin/login";

function adminLogin(loginData) {
    let options = {
        method: 'POST',
        data: loginData
    }
    return callApi(ADMIN_LOGIN_URL, options);
}
function userLogin(loginData) {
    let options = {
        method: 'POST',
        data: loginData
    }
    return callApi(USER_LOGIN_URL, options);
}

export {
    userLogin,
    adminLogin
}