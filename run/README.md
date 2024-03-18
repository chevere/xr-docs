---
sidebar: false
---

# Run

To run xrDebug execute from terminal:

<code-group>
<code-block title="macOS/Linux">
```sh
xrdebug <options>
```
</code-block>

<code-block title="Windows">
```sh
wsl ./xrdebug <options>
```
</code-block>
</code-group>

> (*) Where `xrdebug` and `./xrdebug` reflect the path to the executable file from [install](../install/).

## Server options

| Option | Description                             |
| ------ | --------------------------------------- |
| -p     | Port [use 0 for random] (default 27420) |
| -a     | IP address (default 0.0.0.0)            |
| -c     | Cert file for TLS [PEM: local_cert]     |
| -z     | Private key for TLS [PEM: local_pk]     |

## Cipher options

| Option | Description                   |
| ------ | ----------------------------- |
| -e     | Enable end-to-end encryption  |
| -k     | [for -e option] Symmetric key |
| -s     | Enable sign verification      |
| -x     | [for -x option] Private key   |

## Session options

| Option | Description                          |
| ------ | ------------------------------------ |
| -n     | Session name (default xrDebug)       |
| -w     | Working directory (default temp dir) |

## IDE options

Supported editors: atom emacs espresso idea macvim netbeans phpstorm sublime textmate vscode

| Option | Description             |
| ------ | ----------------------- |
| -i     | Editor (default vscode) |

## Help

Pass `-h` or `--help` to show help information.

```sh
xrdebug --help
```

## Version

Pass `--version` to show version information.

```sh
xrdebug --version
```
