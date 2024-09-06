// npm - global command, comes with node
// check node version using "npm -v" in terminal

// local dependency - use dependency in this particular project only
// npm i <packageName>

// global dependency - use dependency any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (macOS)

// package.json - manifest file (this stores important information about project/package)

// *3 ways to create package.json

// (1) manual approach
// Create package.json in the root, create properties, etc

// (2) step by step
// npm init

// (3) everything default
// npm init -y

const _ = require("lodash");

const items = [1, 2, [3, [4]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
