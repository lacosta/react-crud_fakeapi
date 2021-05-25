export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeaders = { accept: "application/json" };
    const abortController = new AbortController();

    options.signal = abortController.signal;
    options.method = options.method || 'GET';
    options.header = options.header
      ? {...defaultHeaders, ...options.header}
      : defaultHeaders;
    options.body = JSON.stringify(options.body) || false;

    if(!options.body) delete options.body;

    setTimeout(() => abortController.abort(), 3000);

    return (
      fetch(endpoint, options)
        .then(res => res.ok
          ? res.json()
          : Promise.reject({
            err: true,
            status: res.status || "000",
            statusText:
              res.statusText
              || "Oops, something went wrong!"
          }))
        .catch(err => err)
    )
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = 'POST';
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = 'PUT';
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = 'DELETE';
    return customFetch(url, options);
  };

  return {
    del,
    get,
    post,
    put,
  };
};
