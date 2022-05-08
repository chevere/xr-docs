# Docker configuration

When using Docker (local) the host [config](README.md) should point to the internal IP of your Docker host by using `host.docker.internal`.

<code-group>
<code-block title="File-based">
```php
<?php

return [
    // ...
    'host' => 'host.docker.internal',
];
```
</code-block>

<code-block title="Code-based">
```php
use Chevere\Xr\XrInstance;

// (...) your logic sets $enable, $host and $port
new XrInstance(
    new Xr(
        enable: $enable,
        host: $host,
        port: $port
    )
);
```
</code-block>
</code-group>
