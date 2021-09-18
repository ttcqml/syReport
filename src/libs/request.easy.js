import { message } from 'antd';
import { ajax } from './request';
import { toString } from './util';

export { getCurXhr } from './request';

export const post = option => {
  return new Promise((resolve, reject) => {
    let opt = {
      method: 'POST',
      key: '', // 取返回对象的哪个key的值作为resolve的参数（注意：只有当key值为真值时，才会对rst字段进行判断；不是真值则需要自行判断rst）
      always: null, // 不管成功与否都会执行的方法
      ...option,
    };
    ajax(opt).then(d => {
      if (opt.key && d.responseType !==  'blob') {
        if (d.rst == 1) {
          if (opt.key === true) {
            let obj = { ...d };
            delete obj.rst;
            delete obj.msg;
            resolve(obj);
          } else {
            resolve(d[opt.key]);
          }
        } else {
          reject(d.msg);
          message.error(d.msg);
        }
      } else {
        resolve(d);
      }
      opt.always && opt.always();
    }).catch(err => {
      if (err == 'abort request') return; // abort请求，不做任何处理，交给业务代码去同步处理
      reject(err);
      console.error(err);
      message.error(toString(err));
      opt.always && opt.always();
    });
  });
};

export const get = option => {
  if (typeof option == 'string') {
    return post({
      method: 'GET',
      url: option,
    });
  } else {
    return post({
      method: 'GET',
      ...option,
    });
  }
};