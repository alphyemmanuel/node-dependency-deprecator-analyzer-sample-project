var express = require('express');
var app = express();
const { getCurrentTime } = require("./momentExample");
const { fetchData } = require("./requestExample");

console.log("Current Time:", getCurrentTime());

const url = "https://jsonplaceholder.typicode.com/todos/1";
fetchData(url, (err, data) => {
    if (err) {
        console.error("Request Failed:", err);
    } else {
        console.log("Fetched Data:", data);
    }
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});