require('es6-promise').polyfill();
require('isomorphic-fetch');
import config from '../config';

// 为fetch添加超时
let oldFetch = fetch; //拦截原始的fetch方法
window.fetch = function(input, opts){//定义新的fetch方法，封装原有的fetch方法
    var fetchPromise = oldFetch(input, opts);
    var timeoutPromise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            reject(new Error("请求超时"))
        }, 10000)
    });
    return Promise.race([fetchPromise, timeoutPromise])
};
// function ajaxGet(url) {
//     return new Promise(function (resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', url, true);
//         //xhr.setRequestHeader( 'Content-Type', 'application/json' );
//         xhr.onreadystatechange = function () {
//             if (4 == xhr.readyState) {
//                 var status = xhr.status;
//                 if ((status >= 200 && status < 300) || status == 304) {
//                     var response = xhr.responseText.replace(/(\r|\n|\t)/gi, '');
//                     // var m = /callback\((.+)\)/gi.exec( response );
//                     // var result = { ret : 998, msg : '解析数据出错，请稍后再试' };
//                     // try{ result = eval( '(' + m[1] + ')' ) } catch ( e ) {};
//                     // result = eval( '(' + m[1] + ')' )
//                     resolve(response);
//                 } else {
//                     reject(new Error('NetWorking Error!'));
//                 }
//             }
//         };
//         xhr.send();
//     });
// }
//
// export function ajaxFetch(url) {
//     return ajaxGet(config.SERVICE_URL + url + '.do?industry=1').then(JSON.parse).catch(function (err) {
//         throw err;
//     });
// }

export function get(url, data) {
    var request = '';
    if (data) {
        for (let k in data) {
            request += (k + "=" + data[k] + "&");
        }
    }
    return fetch(config.SERVICE_URL + url + '?' + request, {
        method: 'GET',
        credentials: 'include', // omit: 默认值，忽略cookie的发送 same-origin: cookie只能同域发送 include: cookie既可以同域发送，也可以跨域发送
    }).then((res)=> {
            if (res.ok) {
                return res.json()
            } else {
                console.error('请求失败，状态码为：' + res.status)
            }
        }
    ).catch(function (err) {
        throw err;
    })
}

export function post(url, data) {
    var request;
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    for (let k in data) {
        request = k + "=" + data[k] + "&";
    }
    return fetch(config.SERVICE_URL + url + '.do', {
        method: 'POST',
        credentials: 'include',
        headers: headers,
        body: request
    }).then((res)=> {
            if (res.ok) {
                return res.json()
            } else {
                console.error('请求失败，状态码为：' + res.status)
            }
        }
    ).catch(function (err) {
        throw err;
    })
}

// export function onEnter(nextState, replace) {
//     var token = Cookies.get('CW_COOKIE_TOKEN');
//     if (!token) {
//         if (isCWBrowser())  {
//             replace('/login');
//         } else {
//             replace('/welcome');
//         }
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

export function isSafari() {
    var userAgent = navigator.userAgent;
    return userAgent.indexOf('Safari') > -1;
}

export function isIOS() {
    var userAgent = navigator.userAgent;
    return !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

export function isCWBrowser() {
    var userAgent = navigator.userAgent;
    return userAgent.indexOf('CWBrowser') > -1;
}

export function isAndroid() {
    var userAgent = navigator.userAgent;
    return userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1;
}

export function isQQ() {
    var userAgent = navigator.userAgent;
    return userAgent.match(/QQ\//i) == "QQ/";
}

export function isWeiXin() {
    var userAgent = window.navigator.userAgent.toLowerCase();
    return userAgent.match(/MicroMessenger/i) == 'micromessenger'
}

export function transformToBinaryArr(no) {
    return Number(no).toString(2).split('').map(item => Number(item));
}

export function validateImageUrl(url) {
    return url.indexOf('http://') > -1 || url.indexOf('https://') > -1;
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

