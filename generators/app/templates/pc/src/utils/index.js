import config from '../config';
import Promise from 'bluebird';


function get(url, data) {
    let params = '?';
    if (data) {
        for (let k in data) {
            params += (k + "=" + data[k] + "&");
        }
        params = params.substring(0, params.length - 1);
    }
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url + params, true);
        //xhr.setRequestHeader( 'Content-Type', 'application/json' );
        xhr.onreadystatechange = function () {
            if (4 == xhr.readyState) {
                let status = xhr.status;
                if ((status >= 200 && status < 300) || status == 304) {
                    let response = xhr.responseText.replace(/(\r|\n|\t)/gi, '');
                    resolve(response);
                } else {
                    reject(new Error('NetWorking Error!'));
                }
            }
        };
        xhr.send();
    });
}

function post(url, data) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        //xhr.setRequestHeader( 'Content-Type', 'application/json' );
        xhr.onreadystatechange = function () {
            if (4 == xhr.readyState) {
                let status = xhr.status;
                if ((status >= 200 && status < 300) || status == 304) {
                    let response = xhr.responseText.replace(/(\r|\n|\t)/gi, '');
                    resolve(response);
                } else {
                    reject(new Error('NetWorking Error!'));
                }
            }
        };
        xhr.send(data);
    });
}

export function fetch(type, url, data) {
    return type === 'get' ?
        (
            get(config.SERVICE_URL + url, data).then(JSON.parse).catch((err) => {
                throw err;
            })
        ) : (
            post(config.SERVICE_URL + url, data).then(JSON.parse).catch((err) => {
                throw err;
            })
        )
}


// export function onEnter(nextState, replace) {
//     var token = Cookies.get('TOKEN');
//     if (!token) {
//         replace('/login');
//     }
// }

export function formatDate(timeStamp, hourFlag = false, joiner = '-') {
    var time = new Date(timeStamp),
        year = time.getFullYear(),
        month = time.getMonth() + 1,
        date = time.getDate(),
        hour = time.getHours(),
        minute = time.getMinutes();

    return hourFlag ? year + joiner + (month < 10 ? '0' + month : month) + joiner + (date < 10 ? '0' + date : date) + ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) : year + joiner + (month < 10 ? '0' + month : month) + joiner + (date < 10 ? '0' + date : date);
}

export function formatDateWithCh(timeStamp) {
    var time = new Date(timeStamp),
        year = time.getFullYear(),
        month = time.getMonth() + 1,
        date = time.getDate(),
        hour = time.getHours(),
        minute = time.getMinutes();
    return year + '年' + (month < 10 ? '0' + month : month) + '月' + (date < 10 ? '0' + date : date) + '日';
}

export function addNum(num1, num2) {
    var sq1, sq2, m;
    try {
        sq1 = num1.toString().split(".")[1].length;
    } catch (e) {
        sq1 = 0;
    }
    try {
        sq2 = num2.toString().split(".")[1].length;
    } catch (e) {
        sq2 = 0;
    }
    m = Math.pow(10, Math.max(sq1, sq2));
    return ( num1 * m + num2 * m ) / m;
}

export function divideNum(num1, num2) {
    return (num1 / num2 * 100).toFixed();
}

export function strEllipsis(str, length) {
    return str.length > length ? str.substring(0, length) + "..." : str
}

export function minusNum(num1, num2) {
    var sq1, sq2, m;
    try {
        sq1 = num1.toString().split(".")[1].length;
    } catch (e) {
        sq1 = 0;
    }
    try {
        sq2 = num2.toString().split(".")[1].length;
    } catch (e) {
        sq2 = 0;
    }
    m = Math.pow(10, Math.max(sq1, sq2));
    return ( num1 * m - num2 * m ) / m;
}

export function getItem(key) {
    var item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

export const loadState = key => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined;
    }
};

export const saveState = (key, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (err) {
        //ignore errors.
    }
};

export function setItem(key, item) {
    localStorage.setItem(key, JSON.stringify(item));
}

export function throttle(fn, interval) {
    var self = fn,
        _this = this,
        timer,
        firstTime = true;

    return function () {
        var args = arguments;

        if (firstTime) {
            self.apply(_this, args);
            return firstTime = false;
        }
        if (timer) {
            return false;
        }

        timer = setTimeout(function () {
            clearTimeout(timer);
            timer = null;
            self.apply(_this, args);
        }, interval || 500);
    }
}

export function getClassTarget(event, property) {
    var t = event.target,
        p = property,
        end = this || document.body;
    if (t === end) {
        return t.classList.contains(p) ? t : null;
    }
    while (t && (t !== end)) {
        if (t.classList.contains(p)) {
            return t;
        } else {
            t = t.parentNode;
        }
    }
    return null;

}

export function isLocalStorageSupported() {
    var testKey = 'test',
        storage = window.sessionStorage;
    try {
        storage.setItem(testKey, 1);
        storage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}

