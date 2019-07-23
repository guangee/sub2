import axios from 'axios';
import {Message, Notice}from 'iview';

let util = {};

//axios默认设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '/admin';
axios.defaults.withCredentials = true;

/**
 * 从后端获取数据
 * data:{
 * url:string//接口地址
 * method :string//请求方式
 * params :object //参数
 * }
 **/

util.httpReq = function (data) {
  let { method, url, params } = data;
  if (method === 'get') {
    return axios({
      method: method,
      url: url,
      params: params, // 请求时带的参数
      timeout: 5000,
    }).then(
      (response) => {
        if (parseInt(response.status) === 200) {
          return response.data;
        } else {
          Message.error({
            content: response.data.msg,
            duration: 5,
            closable: true
          });
          return response.data;
        }
      }
    ).catch(function (response) {
      Message.error({
        content: response.message,
        duration: 5,
        closable: true
      });
    });
  } else {
    return axios.post(url, params).then(
      (response) => {
        if (parseInt(response.status) === 200) {
          return response.data;
        } else{
          Message.error({
            content: response.data.msg,
            duration: 5,
            closable: true
          });
          return response.data;
        }
      }
    ).catch(function (response) {
      Message.error({
        content: response.message,
        duration: 5,
        closable: true
      });
    });
  }
};


// 从route数据中获取当前path
util.getPathName = function (route) {
  let pathName = '';
  if (route.name.substr(0, 1) === ':') {
    // 字符串前带':'表示是动态参数，需要获取参数名
    pathName = route.params[route.name.substr(1)];
  } else {
    pathName = route.name;
  }
  return pathName;
};

export default util;
