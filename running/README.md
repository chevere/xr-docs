---
sidebar: false
---

# Running

To run xrDebug execute:

```sh
xrdebug <options>
```

> (*) Command location may vary depending on your [installation](../introduction/installation.md).

## Options

| Option | Description                    |
| ------ | ------------------------------ |
| -p     | Port (default 27420)           |
| -n     | Session name (default xrDebug) |
| -e     | Enable end-to-end encryption   |
| -x     | Enable sign verification       |
| -w     | Working directory              |
| -c     | Cert file for TLS              |
| -k     | [for -e option] Symmetric key  |
| -s     | [for -x option] Private key    |
| -i     | Editor (default vscode)        |

## Help

Pass `-h` to show help information.

```sh
xrdebug -h
```

## Version

Pass `-v` to show version information.

```sh
xrdebug -v
```
