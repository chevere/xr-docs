# 🦄 Server

The XR Debug server is the layer charge of receive and stream the debug messages. The XR Debug server can spawn from your project folder, [Docker](docker.md) and even from a [third-party server](../developer/server-spec.md).

The repository source is available at [GitHub](https://github.com/chevere/xr-server).

## Command

```sh
./xr <options>
```

| Option | Explain                       |
| ------ | ----------------------------- |
| -p     | Port                          |
| -e     | Enable end-to-end encryption  |
| -k     | Symmetric key (for -e option) |
| -v     | Enable sign verification      |
| -s     | Private key (for -v option)   |
| -c     | Cert file for TLS             |

## Dependency server

💡 If you installed `chevere/xr` the dependency server is already included.

Install the server repository as a dependency for your project:

```sh
composer require --dev chevere/xr-server
```

Run the server:

```sh
vendor/bin/xr
```

## Docker server

Run the following command to start the server at port `27420`:

```sh
docker run \
    --pull=always --rm --init \
    -i -p 27420:27420 \
    ghcr.io/chevere/xr-server:latest
```

🐋 Check [Docker configuration](../configuration/docker-configuration.md) when using Docker.

## Source server

To run from source clone the repository:

```sh
git clone https://github.com/chevere/xr-server.git
```

Run the server:

```sh
./xr
```

## Demo

Spawn the server, then run:

```php
php vendor/chevere/xr/demo/demo.php
```
