import axios from 'axios';
import {
    SERVER_BASE_URL,
    VALIDATION_FAILURE_STATUS,
    BAD_REQUEST,
    UNAUTHORIZED,
    NOT_FOUND,
    LOCALSTORAGE_TOKEN_KEY,
    LOCALSTORAGE_ROLE_KEY,
    PUBLIC_PATH,
    ADMIN_ROOT_ROUTE,
    ADMIN_ROLE,
    SESSION_EXPIRED_URL
} from '../config/constants';
import history from '../config/history';

const API_URL = SERVER_BASE_URL;

export const callApi = (path, data, headers) => {
    const url = `${API_URL}${path}`;
    let defaultHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

    let _headers = {
        ...defaultHeaders,
        ...headers
    }
    let apiRequestObject = {
        ...data,
        url: url,
        headers: _headers
    }
    return axiosCall(apiRequestObject);
};

function axiosCall(apiRequestObject) {
    return axios(apiRequestObject).then(function (res) {
        return res.data;
    }).catch(function (error) {
        if (error.response) {
            if (error.response.status === UNAUTHORIZED) {
                var role = localStorage.getItem(LOCALSTORAGE_ROLE_KEY);
                var url = PUBLIC_PATH;
                if (window.atob(role) === ADMIN_ROLE) {
                    url = ADMIN_ROOT_ROUTE + '/';
                }
                localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
                history.replace(`${url}${SESSION_EXPIRED_URL}`);
            } else if (error.response.status === BAD_REQUEST) {
                throw ApiError(error.response.data.message, error.response.data, error.response.status);
            } else if (error.response.status === NOT_FOUND) {
                throw ApiError(`Request not found! please try again later.`, null, error.response.status);
            } else if (error.response.status === VALIDATION_FAILURE_STATUS) {
                throw ApiError(`Validation errors.`, error.response.data, error.response.status);
            } else {
                throw ApiError(`Request failed with status ${error.response.status}.`, error.response.data, error.response.status);
            }
        } else {
            throw ApiError(error.toString(), null, 'REQUEST_FAILED');
        }
    });
}

// Custom API error to throw
function ApiError(message, data, status) {
    let response = null;
    let isObject = false;

    // We are trying to parse response
    try {
        response = JSON.parse(data);
        isObject = true;
    } catch (e) {
        response = data;
    }

    return {
        response,
        message,
        status,
        toString: () => {
            return `${this.message}\nResponse:\n${isObject ? JSON.stringify(this.response, null, 2) : this.response}`;
        },
    };
}