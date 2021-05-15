const url = require("./urls");
const tools = require("./tools");
const getCountInfos = ({url, params, header, success, fail}) => {
  tools.get({url, params, header, success, fail});
}

module.exports = {
  getCountInfos
}
