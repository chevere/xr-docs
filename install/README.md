---
sidebarDepth: 2
---

# Installation

xrDebug is available for Windows, macOS, Linux and FreeBSD. Download the latest xrdebug binary from the [releases page](https://github.com/xrdebug/xrdebug/releases/latest).

## Binary install

1. Go to the [releases page](https://github.com/xrdebug/xrdebug/releases/latest).
2. Download the appropriate binary for your operating system.
3. Extract the downloaded file.
4. Move the binary to a directory included in your `PATH`.

Optionally, you can run this command to install the latest version:

```sh
bash <(curl -sL xrdebug.com/bin.sh)
```

## Install from source

Ensure you have [Go](https://golang.org/dl/) installed.

```sh
go install github.com/xrdebug/xrdebug@latest
```

## Docker image

Container images are available at [ghcr.io/xrdebug/xrdebug](https://github.com/xrdebug/xrdebug/pkgs/container/xrdebug).

```sh
docker pull ghcr.io/xrdebug/xrdebug:latest
```

See [Run > Docker](../run/README.md#docker) for the `docker run` command.
