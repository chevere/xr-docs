---
sidebarDepth: 2
---

# Installation

xrDebug is available for Windows, macOS, Linux and FreeBSD. Download the latest xrdebug binary from the [releases page](https://github.com/xrdebug/xrdebug/releases/latest).

## From binary

1. Go to the [releases page](https://github.com/xrdebug/xrdebug/releases/latest).
2. Download the appropriate binary for your operating system.
3. Extract the downloaded file.
4. Move the binary to a directory included in your `PATH`.

Optionally, you can run this command to install the latest version:

```sh
bash <(curl -sL xrdebug.com/bin.sh)
```

## From source

Ensure you have [Go](https://golang.org/dl/) installed.

```sh
go install github.com/xrdebug/xrdebug@latest
```

## Docker

Container images are available at [ghcr.io/xrdebug/xrdebug](https://github.com/xrdebug/xrdebug/pkgs/container/xrdebug).

Run the following command to start the server at port `27420`:

```sh
docker run -t --init --rm --pull=always -p 27420:27420 ghcr.io/xrdebug/xrdebug:latest
```
