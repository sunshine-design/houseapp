import aixos from "axios";
import qs from "qs"; //php只能发get请求,需要用qs.stringify转换
import axios from "axios";
// export const ip = "http://127.0.0.1:80";
export const ip = "http://192.168.43.224:80";
// 获取用户验证码
export function valitecode() {
  return aixos.get(ip + "/valitecode.php");
}

// 用户登录
// acc :用户名
// pwd ：密码
export function loginlist(acc, pwd) {
  return axios.post(ip + "/login.php", qs.stringify({ acc, pwd }));
}

// 用户注册
export function reglist(acc, pwd) {
  return axios.post(ip + "/reg.php", qs.stringify({ acc, pwd }));
}
// 猜你喜欢
export function gethouselist() {
  return axios.get(ip + "/gethouselist.php");
}
