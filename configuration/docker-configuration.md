# Docker configuration

When using Docker (local) the host [config](README.md) should point to the internal IP of your Docker host by using `host.docker.internal`.

You need to implement this when you want to use the XR Debug server container to debug code emitted by other containers.

## File-based

```php
<?php

return [
    // ...
    'host' => 'host.docker.internal',
];
```

## Code-based

```php
use Chevere\Xr\Xr;
use Chevere\Xr\XrInstance;

$host = 'host.docker.internal';
new XrInstance(
    new Xr(
        enable: $enable,
        host: $host,
        port: $port
    )
);
```
