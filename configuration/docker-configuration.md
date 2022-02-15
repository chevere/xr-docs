# Docker configuration

When using Docker (local) the host [config](README.md) should point to the internal IP of your Docker host by using `host.docker.internal`.

```php
<?php

return [
    // ...
    'host' => 'host.docker.internal',
];
```
