/* eslint-disable */
// @ts-ignore
const env = process.env.NODE_ENV;

let root;

if (env === "production") {
    root = require("./Root.prod");
} else {
    root = require("./Root.staging");
}

module.exports = root;
