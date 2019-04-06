export const LOCALSTORAGE_TOKEN_KEY = 'token';
export const LOCALSTORAGE_ROLE_KEY = 'role';
export const PUBLIC_PATH = '/';
export const ADMIN_ROOT_ROUTE = '/admin';
export const ADMIN_ROLE = 'admin';
export const USER_ROLE = 'user';
export const SESSION_EXPIRED_URL = 'admin';

var baseUrl = 'http://' + window.location.hostname;
if (window.location.port) {
  baseUrl += ':' + window.location.port;
}
baseUrl += '/';

export const BASE_URL = baseUrl;

export const SERVER_BASE_URL = 'http://' + window.location.hostname + ':3000/';

export const DEFAULT_PAGE_SIZE = 10;

export const OK_STATUS = 200;
export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const NOT_FOUND = 404;
export const MEDIA_ERROR_STATUS = 415;
export const VALIDATION_FAILURE_STATUS = 417;
export const DATABASE_ERROR_STATUS = 422;
export const INTERNAL_SERVER_ERROR = 500;


export const USER = {
  ADD_START: 'ADD_START',
  ADD_SUCCESS: 'ADD_SUCCESS',
  ADD_ERROR: 'ADD_ERROR'
}