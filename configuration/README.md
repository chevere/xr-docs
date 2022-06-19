# ⚙️ Configuration

## File-based

Configure XR Debug by creating a file named `xr.php` in your project root directory with the following options:

| Property | Type   | Effect                                    |
| -------- | ------ | ----------------------------------------- |
| enable   | bool   | Controls sending messages to the server   |
| host     | string | The host where XR Debug server is running |
| port     | int    | The Port to connect to the `host`         |

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

If you want to handle XR Debug settings somewhere within your existing application logic and not depend on the `xr.php` file:

```php
use Chevere\Xr\Xr;
use Chevere\Xr\XrInstance;

$host = 'localhost';
new XrInstance(
    new Xr(
        enable: $enable,
        host: $host,
        port: $port
    )
);
```
