const path = require("path");

const _resolve = path.resolve(".", "dist");
const _join = path.join(__dirname, "/dist");

console.log("resolve", _resolve);
console.log("join", _join);
