# Docker configuration

When using Docker (local) the host [config](README.md) should point to the internal IP of your Docker host by using `host.docker.internal`.

You need to do implement this when you want to use the XR Debug server container to debug code emitted by other containers.

```php
<?php

return [
    // ...
    'host' => 'host.docker.internal',
];
```
