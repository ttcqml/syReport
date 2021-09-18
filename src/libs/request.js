import {apiRoot} from './config';
import {removeUndefined} from 'libs/util';
import {message} from 'antd';

const XHR = XMLHttpRequest; // 因为mock会改写原生的XMLHttpRequest，在改写前先保存原生的XMLHttpRequest
const xhrs = {};
let count = 0;
let curXhr;

export const ajax = option => {
  let defOption = {
    root: apiRoot,
    timeout: 100000,
    method: 'GET',
    url: '',
    param: {},
    responseType: 'text',
  };

  let {root, timeout, method, url, param, responseType} = {...defOption, ...option};

  url = /^http/i.test(url) ? url : root + url;

  return new Promise((resolve, reject) => {
    let xhr = curXhr = root == 'http://mock.com/' ? new XMLHttpRequest() : new XHR();
    let xhrID = count++;
    xhrs[xhrID] = xhr;

    xhr.open(method, url);
    xhr.timeout = timeout;
    let headers = getHeaders();
    Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));
    BACKEND_ENV != 'production' && console.time(xhrID + '号请求耗时');
    xhr.send(param.constructor.name == 'FormData' ? param : JSON.stringify(removeUndefined(param)));
    xhr.responseType = responseType;

    xhr.onload = function () {
      let res = this.response;
      if (url === (/^http/i.test("login/getSaltPoss") ? "login/getSaltPoss" : root + "login/getSaltPoss")) {
        resolve(res);
      }
      try {
        res = JSON.parse(res)
      } catch (e) {
      }

      if (BACKEND_ENV != 'production') {
        console.group();
        console.timeEnd(xhrID + '号请求耗时');
        console.log(`请求url：${url}`);
        console.log(`请求method：${method}`);
        console.log(`请求param：`, param);
        console.log(`请求result：`, res);
        console.groupEnd();
      }

      delete xhrs[xhrID];

      if (this.status >= 200 && this.status < 400) {
        if (responseType == 'blob') {
          switch (res.type) {
            case 'application/octet-stream':
              let name = this.getResponseHeader('content-disposition').split('filename=')[1];
              res.name = decodeURIComponent(name);
              resolve(res);
              break;
            case 'application/json':
              res.text().then(d => {
                res.json = JSON.parse(d);
                resolve(res);
              }).catch(reject);
              break;
            default:
              resolve(res);
          }
        } else {

          if (res.errorCode == null) {
            resolve(res);
          } else {
            /*如果是员工未登录*/
            if (res.errorCode == "60004") {
              window.parent.postMessage({type: 'logout'}, '*');
              return;
            }
            message.error(res.message || "内部服务器错误");
          }
        }
      } else {
        reject(`${method} ${url} ${this.status} (${this.statusText})`);
      }
    };

    xhr.onerror = function () {
      console.group();
      console.timeEnd(xhrID + '号请求耗时');
      console.log(`请求url：${url}`);
      console.log(`请求method：${method}`);
      console.log(`请求param：`, param);
      console.error('网络异常');
      console.groupEnd();

      delete xhrs[xhrID];

      reject('网络异常');
    };

    xhr.onabort = function () {
      console.group();
      console.timeEnd(xhrID + '号请求耗时');
      console.log(`请求url：${url}`);
      console.log(`请求method：${method}`);
      console.log(`请求param：`, param);
      console.error('abort request');
      console.groupEnd();

      delete xhrs[xhrID];

      reject('abort request');
    };

    xhr.ontimeout = function () {
      console.group();
      console.timeEnd(xhrID + '号请求耗时');
      console.log(`请求url：${url}`);
      console.log(`请求method：${method}`);
      console.log(`请求param：`, param);
      console.error(`请求超时`);
      console.groupEnd();

      delete xhrs[xhrID];

      reject('请求超时');
    };
  });
};

export const post = option => {
  return ajax({method: 'POST', ...option});
};

export const get = option => {
  let opt = typeof option == 'string' ? {url: option} : option;
  return ajax({method: 'GET', ...opt});
};

export const abortAll = () => {
  Object.keys(xhrs).forEach(id => xhrs[id].abort());
};

// 在发出一个请求后，立即调用该方法可以同步获取该请求的xhr对象，可以用来进行之后的取消该请求的操作
export const getCurXhr = () => curXhr;

export const getHeaders = () => {
  return {
    "content-type": "application/json; charset=utf-8",
    // "accept": "application/json, text/javascript, */*",
  };
}
