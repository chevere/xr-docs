---
sidebar: false
---

# Run

## Binary

To start xrDebug server run from terminal:

```sh
xrdebug <options>
```

> (*) Where `xrdebug` reflect the path to the executable file from [install](../install/).

## Docker

Run the following command to start the server at port `27420`:

```sh
docker run -t --init -p 27420:27420 ghcr.io/xrdebug/xrdebug:latest
```

> (*) Use `host.docker.internal` as the host in your xrDebug client configuration.

## Options

- `-a`: IP address to listen on (default: ``)
- `-p`: Port to listen on (use `0` for random, default: `27420`)
- `-c`: Path to TLS certificate file
- `-z`: Path to TLS private key
- `-e`: Enable end-to-end encryption (default: `false`)
- `-k`: (for `-e` option) Path to symmetric key (AES-GCM AE)
- `-s`: Enable sign verification (default: `false`)
- `-x`: (for `-s` option) Path to private key (ed25519)
- `-n`: Session name (default: `xrDebug`)
- `-i`: Editor to use (default: `vscode`, options: `atom`, `bracket`, `emacs`, `espresso`, `fleet`, `idea`, `macvim`, `netbeans`, `nova`, `phpstorm`, `sublime`, `textmate`, `vscode`, `zed`)

## Examples

- Run server on port `12345`:

  ```sh
  xrdebug -p 12345
  ```

- Run server with end-to-end encryption:

  ```sh
  xrdebug -e -k private.key
  ```

- Run server with sign verification:

  ```sh
  xrdebug -s -x private.key
  ```

- Run server with TLS:

  ```sh
  xrdebug -c cert.pem -z key.pem
  ```

- Run server with "My Session" name:

  ```sh
  xrdebug -n "My Session"
  ```
