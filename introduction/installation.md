# Installation

## System Requirements

💡 XR system requirements can be found in the `composer.json` file.

### PHP

XR is built and tested for unix-like systems. It depends on `chevere/chevere` and it requires PHP.

* [PHP 8](https://www.php.net/releases/8.0)
* [chevere/chevere](https://github.com/chevere/chevere)

## Installing

`🚧 As v0.2, XR includes client and server in the same package. This will change in the future.`

* Requires [Composer](https://getcomposer.org/)
* Add `chevere/xr` as a dev dependency in your project:

```sh
composer require --dev chevere/xr
```

The above command will install XR and its dependencies at `vendor/`.

Once installed, `xr()`, `xrr()` and `xri()` helper functions will be available in the global namespace.

## Dev

`🚧 Min stability dev`

You will require to add this to your `composer.json` file.

```json
    "minimum-stability": "dev",
    "prefer-stable": true
```
