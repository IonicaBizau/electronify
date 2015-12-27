// Dependencies
var app = require("app")
  , BrowserWindow = require("browser-window")
  , ul = require("ul")
  ;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on("window-all-closed", function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != "darwin") {
        app.quit();
    }
});

var _isReady = false;

/**
 * Electronify
 * Creates a new browser window based on Electron.
 *
 * @name Electronify
 * @function
 * @param {String} path The path to the HTML file.
 * @param {Object} options An object representing the browser window options. It has the following defaults:
 *
 *  - `width` (Number): The window width (default: `800`).
 *  - `height` (Number): The window height (default: `600`).
 *
 * @return {ElectronApp} The Electron app object extended with the following fields:
 *
 *  - `mainWindow` (BrowserWindow): The browser window that was created.
 */
function Electronify(path, options) {
    if (!_isReady) {
        app.on("ready", function () {
            Electronify(path, options);
        });
        return app;
    }

    // Defaults
    var bwOpts = ul.merge(options, {
        width: 800
      , height: 600
    });

    // Save the browser window
    app.mainWindow = new BrowserWindow(bwOpts);

    app.mainWindow.loadURL("file://" + path);
    app.mainWindow.on("closed", function() {
        mainWindow = null;
    });

    return app;
}

app.on("ready", function() {
    _isReady = true;
});

module.exports = Electronify;
