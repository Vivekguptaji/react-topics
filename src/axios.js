import axios from 'axios'


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    debugger;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    debugger;
    return response;
  }, function (error) {
    return Promise.reject(error);
});
  
export default axios;