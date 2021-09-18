// 后台业务接口前缀
export const apiRoot = {
  local: 'http://10.200.100.4:8080/', // 局域网环境
  develop: 'http://10.200.100.4:8080/', // 联调环境
  production: 'https://channel-ue30.shuyun.com/', // 生产环境
}[BACKEND_ENV];
