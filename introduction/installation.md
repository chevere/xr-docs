# Installation

## System Requirements

💡 Version specific XR system requirements can be found in the `composer.json` file.

### PHP

XR is built and tested for unix-like systems. It depends on `chevere/chevere` and it requires PHP.

* [PHP 8](https://www.php.net/releases/8.0)
* [chevere/chevere](https://github.com/chevere/chevere)

## Installing

`🚧 As 0.2 XR includes client and server in the same package. This will change in the future.`

* Requires [Composer](https://getcomposer.org/)
* Add `chevere/xr` as a dev dependency in your project:

```sh
composer require --dev chevere/xr
```

Once installed, `xr()`, `xrr()` and `xri()` [helper functions](../helpers/README.md) will be available in the global namespace.
