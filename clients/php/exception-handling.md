# PHP exception handling

The PHP client provides a throwable handler can hook or replace your existing exception handler logic thanks to the [ThrowableHandler](https://chevere.org/packages/throwable-handler) package.

## Register xrDebug handler

Use `registerThrowableHandler` to enable xrDebug throwable handling.

```php

use Chevere\Xr\registerThrowableHandler;

// True append xrDebug to your existing handler
// False use only xrDebug handler
registerThrowableHandler(true);
```

## Triggered handler

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
