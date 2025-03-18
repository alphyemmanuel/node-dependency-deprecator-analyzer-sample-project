const request = require("request");

function fetchData(url, callback) {
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(null, JSON.parse(body));
    } else {
      callback(error, null);
    }
  });
}

module.exports = { fetchData };
