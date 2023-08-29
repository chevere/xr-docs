# Installation

## Self-executable binary <Badge text="recommended"/>

Download latest `xrdebug` binary from [releases](https://github.com/chevere/xrdebug/releases).

The binary will be available at:

```sh
xrdebug
```

## PHAR

Download latest `xrdebug.phar` file from [releases](https://github.com/chevere/xrdebug/releases).

Make the file executable:

```sh
chmod +x xrdebug.phar
```

Move it to bin:

```sh
mv xrdebug.phar /usr/local/bin/xrdebug
```

The PHAR will be available at:

```sh
xrdebug
```

## Source server

To install from source clone the repository:

```sh
git clone https://github.com/chevere/xrdebug.git
```

Then install dependencies using Composer:

```sh
composer install
```

The source will be available at:

```sh
./xrdebug
```

## Dependency server

Install the server repository as a dependency for your project using Composer:

```sh
composer require --dev chevere/xrdebug
```

The dependency server will be available at:

```sh
vendor/bin/xrdebug
```

## Docker server

Run the following command to start the server at port `27420`:

```sh
docker run -t --init --rm -p 27420:27420 ghcr.io/chevere/xrdebug
```
