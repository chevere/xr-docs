---
sidebarDepth: 2
---

# Installation

xrDebug is available as a self-contained binary, PHAR file, Composer package, Docker image, and source code. See [run](../run/README.md) for instructions on how to run the software.

xrDebug is available for macOS, Linux, and Windows WSL. Access to the [latest release](https://github.com/xrdebug/xrdebug/releases/latest) artifacts at GitHub.

## Self-contained binary <Badge text="recommended"/>

Download latest `xrdebug` binary by running the following command in your terminal, it detects your operating system and CPU architecture (macOS/Linux) and installs the binary at `/usr/local/bin`:

```sh
bash <(curl -sL xrdebug.com/bin.sh)
```

## Self-contained binary (manual)

Download latest `xrdebug` binary for your operating system and CPU architecture.

### macOS

Download the `.tar.gz` file for your CPU architecture.

| CPU     | Download                                                                                                               |
| ------- | ---------------------------------------------------------------------------------------------------------------------- |
| Silicon | [xrdebug-macos-arm64.tar.gz](https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug-macos-arm64.tar.gz)   |
| Intel   | [xrdebug-macos-x86_64.tar.gz](https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug-macos-x86_64.tar.gz) |

Run the following to install xrDebug on macOS from your terminal:

<code-group>
<code-block title="Silicon">
```sh
curl -LO https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug-macos-arm64.tar.gz
tar -xvf xrdebug-macos-arm64.tar.gz
chmod +x xrdebug
```
</code-block>

<code-block title="Intel">
```sh
curl -LO https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug-macos-x86_64.tar.gz
tar -xvf xrdebug-macos-x86_64.tar.gz
chmod +x xrdebug
```
</code-block>
</code-group>

### Linux & Windows WSL

Download the `.tar.gz` file for your CPU architecture.

| CPU     | Download                                                                                                                 |
| ------- | ------------------------------------------------------------------------------------------------------------------------ |
| aarch64 | [xrdebug-linux-aarch64.tar.gz](https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug-linux-aarch64.tar.gz) |
| x86_64  | [xrdebug-linux-x86_64.tar.gz](https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug-linux-x86_64.tar.gz)   |

Run the following to install xrDebug on Linux from your terminal:

<code-group>
<code-block title="aarch64">
```sh
curl -LO https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug-linux-aarch64.tar.gz
tar -xvf xrdebug-linux-aarch64.tar.gz
chmod +x xrdebug
```
</code-block>

<code-block title="x86_64">
```sh
curl -LO https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug-linux-x86_64.tar.gz
tar -xvf xrdebug-linux-x86_64.tar.gz
chmod +x xrdebug
```
</code-block>
</code-group>

### Binary on PATH

Once extracted and with executable permissions set, the xrDebug software will be available to run as:

```sh
./xrdebug
```

Run the following command to move the downloaded binary to a directory in your `PATH`:

```sh
mv xrdebug /usr/local/bin/xrdebug
```

After moving the binary to a directory within `PATH` the xrDebug software will be available system wide as:

```sh
xrdebug
```

## PHAR

Download latest [xrdebug.phar](https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug.phar) file.

Run the following command to download and verify xrDebug `.phar` from terminal:

```sh
# download
curl -LO https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug.phar
curl -LO https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug.phar.asc
# verify
gpg --recv-keys 75BD018B5EB1DAC838C358414B997D0D617BB354
gpg --with-fingerprint --verify xrdebug.phar.asc xrdebug.phar
```

The xrDebug software will be available to run as:

```sh
php xrdebug.phar
```

## Source

To install from source clone the [repository](https://github.com/xrdebug/xrdebug) and install dependencies using [Composer](https://getcomposer.org).

```sh
git clone https://github.com/xrdebug/xrdebug.git
cd xrdebug
composer install
```

The xrDebug software will be available to run as:

```sh
./xrdebug
```

## Packagist

Use package [xrdebug/xrdebug](https://packagist.org/packages/xrdebug/xrdebug) to install as a dependency for your project using [Composer](https://getcomposer.org):

```sh
composer require --dev xrdebug/xrdebug
```

The xrDebug dependency server software will be available at:

```sh
vendor/bin/xrdebug
```

## Docker

Container images are available at [ghcr.io/xrdebug/xrdebug](https://github.com/xrdebug/xrdebug/pkgs/container/xrdebug).

Run the following command to start the server at port `27420`:

```sh
docker run -t --init --rm -p 27420:27420 ghcr.io/xrdebug/xrdebug
```
