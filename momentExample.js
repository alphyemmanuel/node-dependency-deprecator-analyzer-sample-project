const moment = require("moment");

function getCurrentTime() {
  return moment().format("YYYY-MM-DD HH:mm:ss");
}

console.log("Current Time:", getCurrentTime());

module.exports = { getCurrentTime };
