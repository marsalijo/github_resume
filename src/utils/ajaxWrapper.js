import axios from "axios";

export default (url, method = "GET", body = {}) => {
  const headers = {
    "Content-Type": "application/json",
  };

  let API_URL;
  if (process.env.NODE_ENV === "development") {
      API_URL = `/api/${url}`;
    } else {
        API_URL = `https://api.github.com/${url}`;
    }

    const onSuccess = (response) => {
        // log each request response
        return response;
    };
    const onError = function(error) {
        if (error.response) 
        // some error happened with the server side
            console.log(error.response);
        else 
        // some error happened while processing the request
            console.error('Error Message:', error.message);     
            return Promise.reject(error.response || error.message);
    };

  const ajaxRequest = axios({
    url: API_URL,
    method,
    headers,
    [method === "POST" ? "data" : "params"]: body,
  }).then(onSuccess).catch(onError);;

  return ajaxRequest;
};
