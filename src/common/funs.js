import { LOCALSTORAGE_TOKEN_KEY } from "../config/constants";
import { toast } from 'react-toastify';
import _ from 'lodash';

export function getToken() {
    const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
    return token;
}

export function extraHeaders() {
    const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
    let headers = {
        'x-access-token': token,
    };
    return headers;
}

export function isLogin() {
    return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) ? true : false;
}


export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function ti(message) {
    toast.info(message);
}

export function te(message) {
    toast.error(message);
}

export function tw(message) {
    toast.warn(message);
}

export function ts(message) {
    toast.success(message);
}

export function generateDTTableFilterObj(state, instance) {
    const { pageSize, page, filtered, sorted, columns } = state;
    let columnFilter = [];
    let columnSort = [];
    _.forEach(columns, (column) => {
        if (typeof column.id !== 'undefined') {
            if (filtered && filtered.length > 0) {
                let filterObj = _.find(filtered, (o) => {
                    return o.id === column.id;
                });
                if (typeof filterObj !== 'undefined') {
                    if (column.filterEqual) {
                        filterObj['isEqualFlag'] = true;
                    } else if (column.filterDigit) {
                        filterObj['isDigitFlag'] = true;
                    }

                    if (column.convertBoolean) {
                        filterObj.value = (filterObj.value === 'true');
                    }
                    columnFilter.push(filterObj);
                }
            }
        }
    });

    if (sorted && sorted.length > 0) {
        _.forEach(sorted, (sort) => {
            columnSort.push(sort);
        });
    }

    const filterData = {
        pageSize,
        page,
        columnFilter,
        columnSort,
    }

    return filterData;
}

/**
 * to format seconds to mm:ss format
 */
export const formatTime = (seconds) => {
    let minutes, sec;
    minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    sec = Math.floor(seconds % 60);
    sec = (sec >= 10) ? sec : "0" + sec;
    return minutes + ":" + sec;
}
