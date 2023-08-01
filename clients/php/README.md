# PHP client

The PHP client library for xrDebug is available at [chevere/xr](https://github.com/chevere/xr).

* Requires [Composer](https://getcomposer.org/)
* Add `chevere/xr` as a dev dependency in your project:

```sh
composer require --dev chevere/xr
```

Helper functions will be available in the global namespace.

## Configuring PHP client

The PHP client can be also configured by placing a `xr.php` file in the project root directory.

> We recommend adding `xr.php` to your `.gitignore`.

```php
<?php

return [
    'isEnabled' => true,
    'isHttps' => false,
    'host' => 'localhost',
    'port' => 27420,
    'key' => file_get_contents('private.key'),
];
```
