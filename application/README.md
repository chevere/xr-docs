# 🦄 Application

## Start server application

💡 Check [Docker configuration](../configuration/docker-configuration.md) when using Docker.

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

## Demo

Want to see a demo for XR? Open the debugger and then run:

```php
php vendor/chevere/xr/demo/demo.php
```
