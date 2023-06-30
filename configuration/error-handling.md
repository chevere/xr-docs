# Error handling

To handle errors with XR Debug you will require to configure your project to handle errors as exceptions:

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
