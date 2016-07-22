"use strict";

const {app, BrowserWindow} = require("electron")
    , ul = require("ul")
    ;

let mainWindow = null
  , _isReady = false
  , _opts = {}
  ;

function createWindow (bwOpts) {
    mainWindow = app.mainWindow = new BrowserWindow(bwOpts);

    app.mainWindow.loadURL("file://" + bwOpts._path);
    app.mainWindow.on("closed", () => {
        mainWindow = null;
    });
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        app.quit();
    }
});

// macOS specific: create the window on activate
app.on('activate', function () {
    !mainWindow && createWindow(_opts);
});

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
        app.on("ready", () => Electronify(path, options));
        return app;
    }

    // Defaults
    var bwOpts = ul.merge(options, {
        width: 800
      , height: 600
      , _path: path
    });

    _opts = bwOpts;
    createWindow(_opts);

    return app;
}

app.on("ready", () => {
    _isReady = true;
});

module.exports = Electronify;
