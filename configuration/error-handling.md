# Error handling

You will require to handle errors as exceptions and from there use [Exception handling](exception-handling.md).

```php
use Chevere\ThrowableHandler\ThrowableHandler;

set_error_handler(
    ThrowableHandler::ERRORS_AS_EXCEPTIONS
);
register_shutdown_function(
    ThrowableHandler::FATAL_ERROR_HANDLER
);
```
