// Dependencies
var App = require("app")
  , BrowserWindow = require("browser-window")
  , Ul = require("ul")
  ;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
App.on("window-all-closed", function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != "darwin") {
        App.quit();
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
        App.on("ready", function () {
            Electronify(path, options);
        });
        return App;
    }

    // Defaults
    var bwOpts = Ul.merge(options, {
        width: 800
      , height: 600
    });

    // Save the browser window
    App.mainWindow = new BrowserWindow(bwOpts);

    App.mainWindow.loadUrl("file://" + path);
    App.mainWindow.on("closed", function() {
        mainWindow = null;
    });

    return App;
}

App.on("ready", function() {
    _isReady = true;
});

module.exports = Electronify;
