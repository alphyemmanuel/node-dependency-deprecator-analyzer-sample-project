const { getCurrentTime } = require("./momentExample");
const { fetchData } = require("./requestExample");

console.log("Current Time from momentExample.js:", getCurrentTime());

const url = "https://jsonplaceholder.typicode.com/todos/1";
fetchData(url, (err, data) => {
  if (err) {
    console.error("Request Failed:", err);
  } else {
    console.log("Data from requestExample.js:", data);
  }
});
