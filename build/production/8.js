(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"form":"form-2gIFu","name":"name-3qGfF","card":"card-WyNp-"};

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(301);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var libs_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(395);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(396);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(397);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(249);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(398);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(399);
/* harmony import */ var libs_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    document.title = '销售报表系统';
    super(props);

    _defineProperty(this, "login", form => {
      Object(libs_request__WEBPACK_IMPORTED_MODULE_2__[/* post */ "a"])({
        url: 'report/login',
        param: {
          username: form.username,
          password: form.password
        }
      }).then(d => {
        if (d.login === "1") {
          sessionStorage.setItem("login", d.login);
          this.props.history.push('/Main');
        } else {
          antd__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].error("登录账号或密码错误");
        }
      });
    });

    this.state = {};
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      className: _index_css__WEBPACK_IMPORTED_MODULE_0___default.a.card,
      hoverable: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _index_css__WEBPACK_IMPORTED_MODULE_0___default.a.name
    }, "\u9500\u552E\u62A5\u8868\u7CFB\u7EDF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      className: _index_css__WEBPACK_IMPORTED_MODULE_0___default.a.form,
      onFinish: this.login
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].Item, {
      name: "username",
      rules: [{
        required: true,
        message: '账号不能为空'
      }]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      size: "large",
      prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null),
      allowClear: true,
      autoComplete: "off",
      placeholder: "\u8BF7\u8F93\u5165\u5458\u5DE5\u8D26\u53F7"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].Item, {
      name: "password",
      rules: [{
        required: true,
        message: '密码不能为空'
      }]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Password, {
      size: "large",
      allowClear: true,
      prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null),
      placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      type: "primary",
      className: "btn-login",
      size: "large",
      htmlType: "submit",
      block: true
    }, "\u767B\xA0\xA0\xA0\xA0\xA0\u5F55")))));
  }

});
;

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export base64 */
/* unused harmony export getBase64 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removeUndefined; });
/* unused harmony export saltEncrypt */
/* unused harmony export toString */
/* unused harmony export compareVersion */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return saveBlob; });
/* unused harmony export getNavs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMenus; });
/* unused harmony export getTabs */
/* unused harmony export getFirstPath */
/* unused harmony export isNum */
/* unused harmony export getUniqKey */
/* unused harmony export addUniqKeys */
/* unused harmony export prefixInteger */
/* unused harmony export toMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatDate; });
/* unused harmony export newToDecimal */
/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(267);
/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js_sha256__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(268);
/* harmony import */ var crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(269);
/* harmony import */ var crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(270);
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js_md5__WEBPACK_IMPORTED_MODULE_3__);




const keyPrefix = crypto_js_md5__WEBPACK_IMPORTED_MODULE_3___default()(Math.random() + '').toString();
let keyCount = 0; // Base64加密解密封装

const base64 = {
  encode(str) {
    let wordArray = crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_2___default.a.parse(str);
    return crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(wordArray);
  },

  decode(str) {
    let parsedWordArray = crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_1___default.a.parse(str);
    return parsedWordArray.toString(crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_2___default.a);
  }

}; // Base64加密解密封装

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = error => reject(error);
  });
}
; // 移除一个对象中的undefined

function removeUndefined(obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined) delete obj[key];
  });
  return obj;
}
; // 盐加密

function saltEncrypt(txt, salt) {
  let txt1 = crypto_js_sha256__WEBPACK_IMPORTED_MODULE_0___default()(txt).toString();
  let txt2 = txt1 + salt;
  let txt3 = crypto_js_sha256__WEBPACK_IMPORTED_MODULE_0___default()(txt2).toString();
  return txt3;
}
; // 将一个变量转为字符串

function toString(val) {
  if (typeof val == 'string') return val;
  if (val.message) return val.message;
  let str = val.toString();
  if (str == '[object Object]') return JSON.stringify(val);
  return str;
} // 版本号比较

function compareVersion(v1, v2) {
  // 如果v1比v2大，则返回true
  let v1_arr = v1.split('.');
  let v2_arr = v2.split('.');
  let delta;
  v1_arr.forEach((str1, i) => {
    if (delta) return;
    let str2 = v2_arr[i];
    delta = str1 - str2;
  });
  return delta > 0;
} // 保存blob到文件

function saveBlob(res) {
  let blob = new Blob([res], {
    type: "application/vnd.ms-excel"
  });
  let resUrl = URL.createObjectURL(blob);
  let link = document.createElement("a");
  link.style.display = "none";
  link.href = resUrl;
  link.setAttribute("download", new Date().getTime() + ".xls");
  document.body.appendChild(link);
  link.click();
} // 加工后台传回的导航数据，生成新的导航数据

function getNavs(arr, pages) {
  // arr 原始导航数据 pages 前端path与页面的映射数据
  let paths = {}; // 以path为键的导航和菜单数据

  let navs = []; // 用来创建导航栏的数据

  let routes = []; // 用来创建react路由的数据

  arr.forEach(item => {
    let path = item.url;
    let Page = pages[path]; // 填写paths

    paths[path] = item; // 填写navs

    navs.push({
      path,
      title: item.title
    }); // 填写routes

    Page && routes.push({
      path,
      Page,
      id: item.id
    });
  });
  return {
    paths,
    navs,
    routes
  };
} // 加工后台传回的菜单数据，生成新的菜单数据

function getMenus(arr, pages) {
  // arr 原始菜单数据 pages 前端path与页面的映射数据
  let paths = {}; // 以path为键的菜单数据

  let menus = []; // 用来创建菜单栏的数据

  let routes = []; // 用来创建菜单相关的react路由的数据

  let fill = (item, menus) => {
    // 填写paths, menus, routes
    let path = item.url;
    let Page = pages[path]; // 填写paths

    paths[path] = item; // 填写menus

    let subMenus = [];
    menus.push({
      path,
      title: item.title,
      icon: item.icon,
      subMenus
    }); // 填写routes

    Page && routes.push({
      path,
      Page,
      id: item.id,
      tabs: item.tabs || []
    });
    return subMenus;
  };

  arr.forEach(fst => {
    let secMenus = fill(fst, menus);

    if (fst.secs) {
      fst.secs.forEach(sec => {
        let tabMenus = fill(sec, secMenus);
        if (sec.tabs) sec.tabs.forEach(tab => {
          fill(tab, tabMenus);
        });
      });
    }

    ;
  });
  return {
    paths,
    menus,
    routes
  };
} // 加工后台传回的TAB数据，生成新的TAB数据

function getTabs(arr, pages) {
  // arr 原始TAB数据 pages 前端path与页面的映射数据
  let paths = {}; // 以path为键的TAB数据

  let tabs = []; // 用来创建TAB的数据

  let routes = []; // 用来创建react路由的数据

  arr.forEach(item => {
    let path = item.url;
    let Page = pages[path]; // 填写paths

    paths[path] = item; // 填写tabs

    tabs.push({
      path,
      title: item.title
    }); // 填写routes

    Page && routes.push({
      path,
      Page,
      id: item.id
    });
  });
  return {
    paths,
    tabs,
    routes
  };
} // 获取菜单中第一个可以跳转的path

function getFirstPath(menus, pages) {
  // menus 加工后的菜单数据 pages 前端path与页面的映射数据
  return menus.reduce((pre, cur) => {
    if (!pre) {
      if (pages[cur.path]) {
        pre = cur.path;
      } else if (cur.subMenus.length) {
        pre = getFirstPath(cur.subMenus, pages);
      }
    }

    return pre;
  }, false);
} // 判断一个值是否为数字

const isNum = value => value === '' || value === null ? false : !isNaN(value); // 获取一个唯一的key

const getUniqKey = () => keyPrefix + keyCount++; // 给一个由对象组成的数据中的每个对象添加一个唯一的key属性，并返回原数组引用

const addUniqKeys = arr => {
  arr.forEach(item => !item.key && (item.key = getUniqKey()));
  return arr;
}; // num传入的数字，n需要的字符长度

const prefixInteger = (num, n) => {
  return (Array(n).join(0) + num).slice(-n);
}; //数组转对象

function toMap(arr, idField) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][idField]] = arr[i];
  }

  return obj;
} //时间格式化

function formatDate(date, fmt) {
  if (date === undefined) {
    return '';
  }

  if (typeof date === 'number') {
    date = new Date(date);
  }

  var o = {
    "M+": date.getMonth() + 1,
    //月份
    "d+": date.getDate(),
    //日
    "h+": date.getHours(),
    //小时
    "m+": date.getMinutes(),
    //分
    "s+": date.getSeconds(),
    //秒
    "q+": Math.floor((date.getMonth() + 3) / 3),
    //季度
    "S": date.getMilliseconds() //毫秒

  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

  for (var k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));

  return fmt;
}
/*  数据两位小数去零  */

function newToDecimal(x) {
  let n = parseFloat(x);

  if (isNaN(n)) {
    return false;
  }

  let f = Math.round(x * 100) / 100;
  let s = f.toString();
  let rs = s.indexOf('.');

  if (rs < 0) {
    rs = s.length;
    s += '.';
  }

  while (s.length <= rs + 1) {
    s += '0';
  }

  return s;
}

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ post; });

// UNUSED EXPORTS: ajax, get, abortAll, getCurXhr, getHeaders

// CONCATENATED MODULE: ./src/libs/config.js
// 后台业务接口前缀
const apiRoot = {
  local: 'http://10.200.100.4:8080/',
  // 局域网环境
  develop: 'http://10.200.100.4:8080/',
  // 联调环境
  production: 'https://channel-ue30.shuyun.com/' // 生产环境

}["production"];
// EXTERNAL MODULE: ./src/libs/util.js
var util = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 3 modules
var message = __webpack_require__(72);

// CONCATENATED MODULE: ./src/libs/request.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const XHR = XMLHttpRequest; // 因为mock会改写原生的XMLHttpRequest，在改写前先保存原生的XMLHttpRequest

const xhrs = {};
let count = 0;
let curXhr;
const ajax = option => {
  let defOption = {
    root: apiRoot,
    timeout: 100000,
    method: 'GET',
    url: '',
    param: {},
    responseType: 'text'
  };

  let {
    root,
    timeout,
    method,
    url,
    param,
    responseType
  } = _objectSpread(_objectSpread({}, defOption), option);

  url = /^http/i.test(url) ? url : root + url;
  return new Promise((resolve, reject) => {
    let xhr = curXhr = root == 'http://mock.com/' ? new XMLHttpRequest() : new XHR();
    let xhrID = count++;
    xhrs[xhrID] = xhr;
    xhr.open(method, url);
    xhr.timeout = timeout;
    let headers = getHeaders();
    Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));
     false && false;
    xhr.send(param.constructor.name == 'FormData' ? param : JSON.stringify(Object(util["c" /* removeUndefined */])(param)));
    xhr.responseType = responseType;

    xhr.onload = function () {
      let res = this.response;

      if (url === (/^http/i.test("login/getSaltPoss") ? "login/getSaltPoss" : root + "login/getSaltPoss")) {
        resolve(res);
      }

      try {
        res = JSON.parse(res);
      } catch (e) {}

      if (false) {}

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
              window.parent.postMessage({
                type: 'logout'
              }, '*');
              return;
            }

            message["b" /* default */].error(res.message || "内部服务器错误");
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
const post = option => {
  return ajax(_objectSpread({
    method: 'POST'
  }, option));
};
const get = option => {
  let opt = typeof option == 'string' ? {
    url: option
  } : option;
  return ajax(_objectSpread({
    method: 'GET'
  }, opt));
};
const abortAll = () => {
  Object.keys(xhrs).forEach(id => xhrs[id].abort());
}; // 在发出一个请求后，立即调用该方法可以同步获取该请求的xhr对象，可以用来进行之后的取消该请求的操作

const getCurXhr = () => curXhr;
const getHeaders = () => {
  return {
    "content-type": "application/json; charset=utf-8" // "accept": "application/json, text/javascript, */*",

  };
};

/***/ })

}]);