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

## Bonus helpers

The PHP client adds the following bonus helpers thanks to the [VarDump](https://chevere.org/packages/var-dump) package.

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

To handle errors with xrDebug you will require to configure your project to handle errors as exceptions and register a shutdown function:

```php
use Chevere\ThrowableHandler\ThrowableHandler;

set_error_handler(
    ThrowableHandler::ERROR_AS_EXCEPTION
);
register_shutdown_function(
    ThrowableHandler::SHUTDOWN_ERROR_AS_EXCEPTION
);
```

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

## Custom inspectors

Extra inspectors can be defined to provide more context aware debug information. To create a custom inspector use `XrInspectorTrait` to implement the `XrInspectorInterface` and use `sendCommand` method.

For code below, `myDump` defines a method that will stream data from your application logic and `myPause` sends a pause with debug backtrace by default.

```php
<?php

use Chevere\Xr\Inspector\Traits\XrInspectorTrait;
use Chevere\Xr\Interfaces\XrInspectorInterface;

class MyInspector implements XrInspectorInterface
{
    use XrInspectorTrait;

    public function myDump(
        string $t = '',
        string $e = '',
        int $f = 0,
    ): void {
        $data = 'my queries from somewhere...';
        $this->sendCommand(
            command: 'message',
            body: $data,
            topic: $t,
            emote: $e,
            flags: $f,
        );
    }

    public function myPause(
        int $f = XR_DEBUG_BACKTRACE,
    ): void {
        $this->sendCommand(
            command: 'pause',
            flags: $f,
        );
    }
}
```

The method `sendCommand` enables to interact with the existing xrDebug instance.

```php
private function sendCommand(
    string $command,
    string $body = '',
    string $topic = '',
    string $emote = '',
    int $flags = 0
);
```

### Null inspector

A null inspector is required to void any inspection call **if xrDebug is disabled**. The null inspector should implement the same methods as the real inspector, but without carrying any action.

💡 Use `XrInspectorNullTrait` to implement the `XrInspectorInterface` when providing null inspector.

```php
<?php

use Chevere\Xr\Inspector\Traits\XrInspectorNullTrait;
use Chevere\Xr\Interfaces\XrInspectorInterface;

class MyInspectorNull implements XrInspectorInterface
{
    use XrInspectorNullTrait;

    public function myDump(
        string $t = '',
        string $e = '',
        int $f = 0,
    ): void {
    }

    public function myPause(
        int $f = XR_DEBUG_BACKTRACE,
    ): void {
    }
}
```

### Helper function for custom inspector

```php
use Chevere\Xr\Inspector\XrInspectorInstance;
use Chevere\Xr\Interfaces\XrInspectorInterface;
use LogicException;
use MyInspector;
use MyInspectorNull;

function my_inspector(): MyInspector
{
    try {
        return XrInspectorInstance::get();
    } catch (LogicException) {
        $inspector = getXr()->enable()
            ? MyInspector::class
            : MyInspectorNull::class;
        $client = getXr()->client();
        $inspector = new $inspector($client);
        $instance = new XrInspectorInstance($inspector);

        return $instance::get();
    }
}
```

To use your custom helper:

```php
my_inspector()->myDump();
my_inspector()->myPause();
```
