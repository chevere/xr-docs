# Installation

## System Requirements

XR Debug is built and tested for unix-like systems. It depends on `chevere/chevere` and it requires PHP.

* [PHP 8](https://www.php.net/releases/8.0)
* [chevere/chevere](https://github.com/chevere/chevere)

## Installing

* Requires [Composer](https://getcomposer.org/)
* Add `chevere/xr` as a dev dependency in your project:

```sh
composer require --dev chevere/xr
```

Once installed, the [helper functions](../helpers/README.md) will be available in the global namespace.

💡 Refer to [Server](../server/README.md) for instructions in how to provide the XR Debug server.
