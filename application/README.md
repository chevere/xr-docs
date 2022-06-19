# Application

The application refers to the web server that provides the server layer for XR Debug. The repository is available at [GitHub](https://github.com/chevere/xr-server).

👉 The server listen to any [helper function](../helpers/README.md).

## Docker server

Run the following command to start the server at port `27420`:

```sh
docker run --rm --init -i -p 27420:27420 \
    --name chevere-xr ghcr.io/chevere/xr-server
```

🐋 Check [Docker configuration](../configuration/docker-configuration.md) when using Docker.

## Source server

To run from source clone the repository:

```sh
git clone https://github.com/chevere/xr-server.git
```

Run the server at port `-p` `27420`:

```sh
./xrserver -p 27420
```

## Dependency server

Install the server repository as a dependency for your project:

```sh
composer require --dev chevere/xr-server
```

Run the server at port `-p` `27420`:

```sh
vendor/bin/xrserver -p 27420
```

## Demo

Spawn the server, then run:

```php
php vendor/chevere/xr/demo/demo.php
```
