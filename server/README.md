# 🦄 Server

The XR Debug server is the layer charge of receive and stream the debug messages. The XR Debug server can spawn from your project folder, [Docker](docker.md) and even from a [third-party server](../developer/server-spec.md).

The repository source is available at [GitHub](https://github.com/chevere/xr-server).

## Source server

To run from source clone the repository:

```sh
git clone https://github.com/chevere/xr-server.git
```

Then install dependencies using Composer:

```sh
composer install
```

Run the server:

```sh
./xr
```

## Dependency server

Install the server repository as a dependency for your project using Composer:

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
docker run -t --init --rm -p 27420:27420 ghcr.io/chevere/xr-server
```

🐋 Check [Docker configuration](../configuration/docker-configuration.md) when using Docker.

## Server options

```sh
./xr <options>
```

| Option | Description                    |
| ------ | ------------------------------ |
| -p     | Port                           |
| -e     | Enable end-to-end encryption   |
| -k     | Symmetric key (to use with -e) |
| -v     | Enable sign verification       |
| -s     | Private key (to use with -v)   |
| -c     | Cert file for TLS              |

## Demo

Spawn the server then run:

```php
php vendor/chevere/xr/demo/demo.php
```
