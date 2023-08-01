# xrConfig

Use `xrConfig()` to configure the xrDebug server connection.

```php
xrConfig(
    isEnabled: true,
    isHttps: false,
    host: 'localhost',
    port: 27420,
    key: file_get_contents('private.key')
);
```

| Property  | Type   | Effect                                   |
| --------- | ------ | ---------------------------------------- |
| isEnabled | bool   | Controls sending messages to the server  |
| isHttps   | bool   | Controls use of https                    |
| host      | string | The host where xrDebug server is running |
| port      | int    | The Port to connect to the `host`        |
| key       | string | Private key                              |

## Docker

When using Docker (local) the host config should point to the internal IP of your Docker host by using `host.docker.internal`.

💡 Implement this when needing to debug code emitted by applications running in local containers.

```php
xrConfig(
    // ...
    host: 'host.docker.internal',
);
```
