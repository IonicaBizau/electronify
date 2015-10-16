// Dependencies
var Remote = require("remote");

// Display the Electronify version
version.innerHTML = Remote.require("./version");
