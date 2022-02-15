# Exception handling

💡 XR's throwable handler can hook or replace your existing exception handler logic.

Use `registerThrowableHandler` to enable XR throwable handling.

```php

use Chevere\Xr\registerThrowableHandler;

// True append XR's to your existing handler
// False use only XR's handler
registerThrowableHandler(true);
```

Alternatively, you can use `throwableHandler` in any existing exception handler logic:

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
