# Server

The xrDebug server is the layer charge of receive and stream the debug messages. The xrDebug server can spawn from your project folder, [Docker](docker.md) and even from a [third-party server](../developer/server-spec.md).

The repository source is available at [GitHub](https://github.com/chevere/xrdebug).

## PHAR server (recommended)

Download latest `xrdebug.phar` from [releases](https://github.com/chevere/xrdebug/releases).

Make the file executable:

```sh
chmod +x xrdebug.phar
```

Move it to bin:

```sh
mv xrdebug.phar /usr/local/bin/xrdebug
```

Run the server:

```sh
xrdebug
```

## Source server

To run from source clone the repository:

```sh
git clone https://github.com/chevere/xrdebug.git
```

Then install dependencies using Composer:

```sh
composer install
```

Run the server:

```sh
./xrdebug
```

## Dependency server

Install the server repository as a dependency for your project using Composer:

```sh
composer require --dev chevere/xrdebug
```

Run the server:

```sh
vendor/bin/xrdebug
```

## Docker server

Run the following command to start the server at port `27420`:

```sh
docker run -t --init --rm -p 27420:27420 ghcr.io/chevere/xrdebug
```

🐋 Check [Docker configuration](../configuration/docker-configuration.md) when using Docker.

## Server options

```sh
./xrdebug <options>
```

| Option | Description                    |
| ------ | ------------------------------ |
| -p     | Port (default 27420)           |
| -n     | Session name (default xrDebug) |
| -e     | Enable end-to-end encryption   |
| -v     | Enable sign verification       |
| -c     | Cert file for TLS              |
| -k     | [for -e option] Symmetric key  |
| -s     | [for -v option] Private key    |
| -i     | Editor (default vscode)        |

[For -i option] Supported IDEs:

* atom
* emacs
* espresso
* idea
* macvim
* netbeans
* phpstorm
* sublime
* textmate
* vscode
