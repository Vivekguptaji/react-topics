import axios from 'axios'

const common_wrong_msg = 'something went wrong, please try after sometime';
const for_network_msg = 'Please verify your network connection, try after sometime'; 


axios.interceptors.request.use(function (config) { 
  debugger;
  config.headers['api_token'] = 'sdsadsadsadsadsad';
  return config;
}, function (error) { 
  debugger;
  return Promise.reject(error);
});
 
axios.interceptors.response.use(function (response) {
    debugger;
    return response;
}, function (error) {
  debugger;
  console.log('Error from Axios: ', error.message)
  if (error.response && error.response.status === 404) {
    error.message = for_network_msg
  }
  else { 
    error.message = common_wrong_msg
  }
    return Promise.reject(error);
});
  
export default axios;