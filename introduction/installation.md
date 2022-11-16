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

## Running the server

The `chevere/xr` package includes the XR Debug server. To run the server:

```sh
vendor/bin/xr
```

💡 Refer to [Server](../server/README.md) for additional instructions in how to provide the XR Debug server.
