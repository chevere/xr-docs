# PHP

The PHP client library for xrDebug is available at [chevere/xr](https://github.com/chevere/xr).

## Installing

* Requires [Composer](https://getcomposer.org/)
* Add `chevere/xr` as a dev dependency in your project:

```sh
composer require --dev chevere/xr
```

Helper functions will be available in the global namespace.

## Configuring

In addition to [xrConfig](../helpers/xrconfig.md), PHP client can be configured by placing a `xr.php` file in project's root directory.

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

## Extra helpers

The PHP client adds the following debug helpers thanks to the [VarDump](https://chevere.org/packages/var-dump) package.

### vd

Use `vd()` to dump information about one or more variables to output stream.

```php
vd('Hola, mundo!', $var);
```

### vdd

Use `vdd()` to dump information about one or more variables to the output stream and die.

```php
vdd('Hola, mundo!', $var);
```

## Error handling

To handle errors with xrDebug and the PHP client you will require to configure your project to handle errors as exceptions:

```php
use Chevere\ThrowableHandler\ThrowableHandler;

set_error_handler(
    ThrowableHandler::ERROR_AS_EXCEPTION
);
register_shutdown_function(
    ThrowableHandler::SHUTDOWN_ERROR_AS_EXCEPTION
);
```

Once done, continue to [Exception handling](exception-handling.md).

## Exception handling

The PHP client provides a throwable handler that can hook or replace existing exception handler logic thanks to the [ThrowableHandler](https://chevere.org/packages/throwable-handler) package.

### Register handler

Use `registerThrowableHandler` to enable xrDebug throwable handling.

```php

use Chevere\Xr\registerThrowableHandler;

// True append xrDebug to your existing handler
// False use only xrDebug handler
registerThrowableHandler(true);
```

### Triggered handler

Use `throwableHandler` in any existing exception handler logic:

```php
use Chevere\Xr\throwableHandler;

set_exception_handler(
    function(Throwable $throwable) {
        // ...
        try {
            throwableHandler($throwable);
        } catch(Throwable) {
            // Don't panic
        }
    }
);
```
