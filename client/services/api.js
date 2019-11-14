const apiCall = (endpoint, method, callback) => {
  fetch(endpoint, {
    method,
    body,
    headers: {
      "content-type": "application/json"
    }
      .then(res => res.json())
      .then(response => {
        if (callback) {
          callback(response);
        }
      })
  });
};
