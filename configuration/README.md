# Configuration

## File-based

💡 Configure XR by creating a file named `xr.php` in your project root directory with the following options:

* `enable` `bool` - Controls sending messages to the server. Set `true` to enable, `false` to disable.
* `host` `string` - The host where XR server is running.
* `port` `int` - The Port to connect to the `host`.

The following example is a `xr.php` file with default settings.

```php
<?php

return [
    'enable' => true,
    'host' => 'localhost',
    'port' => 27420,
];
```

> We recommend adding `xr.php` to your `.gitignore`.

## Code-based

💡 If you want to handle XR settings somewhere within your existing application logic and not depend on the `xr.php` file:

```php
use Chevere\Xr\XrInstance;

// (...) your logic sets $enable, $host and $port
new XrInstance(
    new Xr(
        enable: $enable,
        host: $host:
        port: $port
    )
);
```
