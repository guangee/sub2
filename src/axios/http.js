import axios from 'axios'
import router from "../router"

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.defaults.baseURL = '/admin';

axios.defaults.withCredentials = true;

//返回状态判断
axios.interceptors.response.use((res) => {
  //if (!res.data.success) {
  //去掉这个注释
  if (res.status !== 200) {
    return Promise.reject(res);
  }
  return res;
}, (error) => {

  if(error.response.status==401){
    router.replace({
      path: 'login',
      // query: {redirect: router.currentRoute.fullPath}
    })

  }

  return Promise.reject(error);
});

export default function fetch(url, params, type) {
  if (type == 'get') {
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  } else if (type == 'post') {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

}
