# 🦄 Server

The XR Debug server in the layer charge of receive and stream the debug messages. The XR Debug server can spawn from your project folder, [Docker](docker.md) and even from a [third-party server](../developer/server-spec.md).

## Start server

Run the following command to start the server at port `27420`:

<code-group>
<code-block title="🐘 PHP">
```sh
php vendor/chevere/xr/server.php -p 27420
```
</code-block>

<code-block title="🐳 Docker">
```sh
docker run -d -p 27420:27420 --name chevere-xr ghcr.io/chevere/xr
```
</code-block>
</code-group>

👉 The server will be available at [http://localhost:27420](http://localhost:27420) and ready to listen to any [helper function](../helpers/README.md).
🐋 Check [Docker configuration](../configuration/docker-configuration.md) when using Docker.

## Stop server

To stop the server use `Ctrl + C` interrupt/kill (SIGINT) signal.

## Demo

Open the debugger and then run:

<code-group>
<code-block title="🐘 PHP">
```php
php vendor/chevere/xr/demo/demo.php
```
</code-block>

<code-block title="🐳 Docker">
```php
docker exec -it chevere-xr \
    php demo/demo.php
```
</code-block>
</code-group>
