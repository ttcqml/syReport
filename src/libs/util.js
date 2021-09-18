import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import md5 from 'crypto-js/md5';

const keyPrefix = md5(Math.random() + '').toString();
let keyCount = 0;

// Base64加密解密封装
export const base64 = {
  encode(str) {
    let wordArray = Utf8.parse(str);
    return Base64.stringify(wordArray);
  },
  decode(str) {
    let parsedWordArray = Base64.parse(str);
    return parsedWordArray.toString(Utf8);
  },
};

// Base64加密解密封装
export function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};

// 移除一个对象中的undefined
export function removeUndefined(obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined) delete obj[key];
  });
  return obj;
};

// 盐加密
export function saltEncrypt(txt, salt) {
  let txt1 = sha256(txt).toString();
  let txt2 = txt1 + salt;
  let txt3 = sha256(txt2).toString();
  return txt3;
};

// 将一个变量转为字符串
export function toString(val) {
  if (typeof val == 'string') return val;
  if (val.message) return val.message;
  let str = val.toString();
  if (str == '[object Object]') return JSON.stringify(val);
  return str;
}

// 版本号比较
export function compareVersion(v1, v2) { // 如果v1比v2大，则返回true
  let v1_arr = v1.split('.');
  let v2_arr = v2.split('.');
  let delta;
  v1_arr.forEach((str1, i) => {
    if (delta) return;
    let str2 = v2_arr[i];
    delta = str1 - str2;
  });

  return delta > 0;
}

// 保存blob到文件
export function saveBlob(res) {
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
}

// 加工后台传回的导航数据，生成新的导航数据
export function getNavs(arr, pages) { // arr 原始导航数据 pages 前端path与页面的映射数据
  let paths = {}; // 以path为键的导航和菜单数据
  let navs = []; // 用来创建导航栏的数据
  let routes = []; // 用来创建react路由的数据
  arr.forEach(item => {
    let path = item.url;
    let Page = pages[path];

    // 填写paths
    paths[path] = item;

    // 填写navs
    navs.push({
      path,
      title: item.title,
    });

    // 填写routes
    Page && routes.push({
      path,
      Page,
      id: item.id,
    });
  });


  return { paths, navs, routes };
}

// 加工后台传回的菜单数据，生成新的菜单数据
export function getMenus(arr, pages) { // arr 原始菜单数据 pages 前端path与页面的映射数据
  let paths = {}; // 以path为键的菜单数据
  let menus = []; // 用来创建菜单栏的数据
  let routes = []; // 用来创建菜单相关的react路由的数据
  let fill = (item, menus) => { // 填写paths, menus, routes
    let path = item.url;
    let Page = pages[path];

    // 填写paths
    paths[path] = item;

    // 填写menus
    let subMenus = [];
    menus.push({
      path,
      title: item.title,
      icon: item.icon,
      subMenus,
    });

    // 填写routes
    Page && routes.push({
      path,
      Page,
      id: item.id,
      tabs: item.tabs || [],
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
    };
  });

  return { paths, menus, routes };
}

// 加工后台传回的TAB数据，生成新的TAB数据
export function getTabs(arr, pages) { // arr 原始TAB数据 pages 前端path与页面的映射数据
  let paths = {}; // 以path为键的TAB数据
  let tabs = []; // 用来创建TAB的数据
  let routes = []; // 用来创建react路由的数据
  arr.forEach(item => {
    let path = item.url;
    let Page = pages[path];

    // 填写paths
    paths[path] = item;

    // 填写tabs
    tabs.push({
      path,
      title: item.title,
    });

    // 填写routes
    Page && routes.push({
      path,
      Page,
      id: item.id,
    });
  });

  return { paths, tabs, routes };
}

// 获取菜单中第一个可以跳转的path
export function getFirstPath(menus, pages) { // menus 加工后的菜单数据 pages 前端path与页面的映射数据
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
}

// 判断一个值是否为数字
export const isNum = value => (value === '' || value === null) ? false : !isNaN(value);

// 获取一个唯一的key
export const getUniqKey = () => keyPrefix + keyCount++;

// 给一个由对象组成的数据中的每个对象添加一个唯一的key属性，并返回原数组引用
export const addUniqKeys = arr => {
  arr.forEach(item => !item.key && (item.key = getUniqKey()));
  return arr;
};
// num传入的数字，n需要的字符长度
export const prefixInteger = (num, n) => {
  return (Array(n).join(0) + num).slice(-n);
};

//数组转对象
export function toMap(arr, idField) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][idField]] = arr[i];
  }
  return obj;
}

//时间格式化
export function formatDate(date, fmt) {
  if (date === undefined) {
    return '';
  }
  if (typeof date === 'number') {
    date = new Date(date);
  }
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

/*  数据两位小数去零  */
export function newToDecimal(x){
  let n = parseFloat(x);
  if (isNaN(n)) {
    return false;
  }
  let f = Math.round(x*100)/100;
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