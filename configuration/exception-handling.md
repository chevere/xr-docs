# Exception handling

XR Debug provides a throwable handler can hook or replace your existing exception handler logic.

::: tip ThrowableHandler
Check our [ThrowableHandler](https://chevere.org/packages/throwable-handler.html) package for more into exception & error handling for PHP software. The `chevere/throwable-handler` package is included with XR Debug.
:::

## Register XR Debug handler

Use `Chevere\Xr\registerThrowableHandler` to enable XR Debug throwable handling.

```php

use Chevere\Xr\registerThrowableHandler;

// True append XR Debug to your existing handler
// False use only XR Debug handler
registerThrowableHandler(true);
```

## Triggered handler

Use `Chevere\Xr\throwableHandler` in any existing exception handler logic:

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
