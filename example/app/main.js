// Dependencies
const Remote = require("electron").remote;

// Display the Electronify version
version.innerHTML = Remote.require("./version");
