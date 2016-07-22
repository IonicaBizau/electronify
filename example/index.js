const Electronify = require("../lib");

// Create the app
var app = Electronify(__dirname + "/app/index.html", {
    resizable: false
});
