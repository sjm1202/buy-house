const defaultHeader = {
  "content-type": "application/json",
}
//get方法
const get = ({url, params, header, success, fail}) => {
  header = header || {};
  header = {...defaultHeader, header}
  wx.request({
    url: url + paramsToString(params),
    method: "GET",
    header, 
    success,
    fail
  })
}
//post方法
const post = ({url, params, data, header, success, fail})=> {
  header = header || {};
  header = {...defaultHeader, header}
  wx.request({
    url: url + paramsToString(params),
    method: "POST",
    header, 
    success,
    fail
  })
}
//put方法
const put = ({url, params, data, header, success, fail})=> {
  header = header || {};
  header = {...defaultHeader, header}
  wx.request({
    url: url + paramsToString(params),
    method: "PUT",
    header, 
    success,
    fail
  })
}
//del方法
const del = ({url, params, data, header, success, fail})=> {
  header = header || {};
  header = {...defaultHeader, header}
  wx.request({
    url: url + paramsToString(params),
    method: "DELETE",
    header, 
    success,
    fail
  })
}
paramsToString = (params) => {
  if(!params){
    return ""
  }
  let keys = Object.keys(params);
  let str = ""
  keys.forEach((key, index) => {
    if(index === 0){
      str += "?"
    }else{
      str += "&"
    }
    str += `${key}=${params[key]}`;
  })
  return str
}
module.exports = {
  get,
  post,
  put,
  del
}