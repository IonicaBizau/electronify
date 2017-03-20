
[![electronify](http://i.imgur.com/q2L4Qna.png)](#)

# Electronify

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/electronify.svg)](https://www.npmjs.com/package/electronify) [![Downloads](https://img.shields.io/npm/dt/electronify.svg)](https://www.npmjs.com/package/electronify)

> The simplest way to build Electron apps.

[Electron](https://github.com/atom/electron) is amazing! Electronify makes its usage simpler by reusing the same code snippets in common apps.

[![electronify](http://i.imgur.com/o5sBv1w.png)](#)

## :cloud: Installation

```sh
$ npm i --save electronify
```


## :clipboard: Example



```js
const Electronify = require("electronify");

// Create the app
var app = Electronify(__dirname + "/app/index.html", {
    resizable: false
});
```

## :memo: Documentation


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



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`magnesium`](https://github.com/IonicaBizau/magnesium#readme)—A terminal emulator based on Electron.
 - [`photon-browser`](https://github.com/IonicaBizau/photon-browser#readme)—A tiny web browser based on Photon and Electron.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
