# ⚙️ Configuration

## File-based

Configure xrDebug by creating a file named `xr.php` in your project root directory with the following options:

| Property  | Type   | Effect                                   |
| --------- | ------ | ---------------------------------------- |
| isEnabled | bool   | Controls sending messages to the server  |
| isHttps   | bool   | Controls use of https                    |
| host      | string | The host where xrDebug server is running |
| port      | int    | The Port to connect to the `host`        |
| key       | string | Private key                              |

The following example is a `xr.php` file:

```php
<?php

return [
    'isEnabled' => true,
    'isHttps' => false,
    'host' => 'localhost',
    'port' => 27420,
    'key' => '',
];
```

xrDebug assumes the above configuration values by default.

> We recommend adding `xr.php` to your `.gitignore`.

## Code-based

If you want to handle xrDebug settings somewhere within your existing application logic and not depend on the `xr.php` file:

```php
use Chevere\Xr\Xr;
use Chevere\Xr\XrInstance;

$isEnabled = true;
$isHttps = false;
$host = 'localhost';
$port = 27420;
$key = file_get_contents('private.key');
new XrInstance(
    new Xr(
        isEnabled: $isEnabled,
        isHttps: $isEnabled,
        host: $host,
        port: $port,
        key: $key
    )
);
```
