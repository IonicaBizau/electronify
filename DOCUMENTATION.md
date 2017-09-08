## Documentation

You can see below the API reference of this module.

### `Electronify(path, options)`
Creates a new browser window based on Electron.

#### Params

- **String** `path`: The path to the HTML file.
- **Object** `options`: An object representing the browser window options. It has the following defaults:
 - `width` (Number): The window width (default: `800`).
 - `height` (Number): The window height (default: `600`).

#### Return
- **ElectronApp** The Electron app object extended with the following fields:
 - `mainWindow` (BrowserWindow): The browser window that was created.

