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

Download the `.tar.gz` file for your CPU architecture and extract it to a directory in your `PATH`.

| CPU     | Download                                                                                                               |
| ------- | ---------------------------------------------------------------------------------------------------------------------- |
| Silicon | [xrdebug-macos-arm64.tar.gz](https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug-macos-arm64.tar.gz)   |
| Intel   | [xrdebug-macos-x86_64.tar.gz](https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug-macos-x86_64.tar.gz) |

::: details CLI instructions
Run the following to install from your terminal:

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
:::

### Linux & Windows WSL

Download the `.tar.gz` file for your CPU architecture and extract it to a directory in your `PATH`.

| CPU     | Download                                                                                                                 |
| ------- | ------------------------------------------------------------------------------------------------------------------------ |
| aarch64 | [xrdebug-linux-aarch64.tar.gz](https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug-linux-aarch64.tar.gz) |
| x86_64  | [xrdebug-linux-x86_64.tar.gz](https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug-linux-x86_64.tar.gz)   |

::: details CLI instructions
Run the following to install from your terminal:

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
:::

### Binary on PATH

Run the following command to move the downloaded binary to a directory in your `PATH`:

```sh
mv xrdebug /usr/local/bin/xrdebug
```

## PHAR

Download latest [xrdebug.phar](https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug.phar) file.

::: details CLI instructions
To download and verify from terminal:

```sh
# download
curl -LO https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug.phar
curl -LO https://github.com/xrdebug/xrdebug/releases/latest/download/xrdebug.phar.asc
# verify
gpg --recv-keys 75BD018B5EB1DAC838C358414B997D0D617BB354
gpg --with-fingerprint --verify xrdebug.phar.asc xrdebug.phar
```

:::

## Source

To install from source clone the [repository](https://github.com/xrdebug/xrdebug):

```sh
git clone https://github.com/xrdebug/xrdebug.git
```

Install dependencies using Composer:

```sh
composer install
```

The command will be available at:

```sh
./xrdebug
```

## Packagist

Use package [xrdebug/xrdebug](https://packagist.org/packages/xrdebug/xrdebug) to install as a dependency for your project using Composer:

```sh
composer require --dev xrdebug/xrdebug
```

The dependency server will be available at:

```sh
vendor/bin/xrdebug
```

## Docker

Container images are available at [ghcr.io/xrdebug/xrdebug](https://github.com/xrdebug/xrdebug/pkgs/container/xrdebug).

Run the following command to start the server at port `27420`:

```sh
docker run -t --init --rm -p 27420:27420 ghcr.io/xrdebug/xrdebug
```
