# Docker configuration

When using Docker (local) the host [config](README.md) should point to the internal IP of your Docker host by using `host.docker.internal`.

💡 Implement this when needing to debug code emitted by applications running in local containers.

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

new XrInstance(
    new Xr(
        // ...
        host: 'host.docker.internal',
    )
);
```
