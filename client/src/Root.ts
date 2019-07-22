/* eslint-disable */
const { NODE_ENV } = process.env;

let root;

if (NODE_ENV === "production") {
    root = require("./Root.prod");
    module.exports = root;
} else if (NODE_ENV === "staging") {
    root = require("./Root.staging");
    module.exports = root;
} else {
    root = require("./Root.staging");
    module.exports = root;
}