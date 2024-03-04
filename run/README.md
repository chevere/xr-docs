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

## Options

| Option | Description                             |
| ------ | --------------------------------------- |
| -p     | Port [use 0 for random] (default 27420) |
| -n     | Session name (default xrDebug)          |
| -e     | Enable end-to-end encryption            |
| -x     | Enable sign verification                |
| -w     | Working directory (default temp dir)    |
| -c     | Cert file for TLS                       |
| -k     | [for -e option] Symmetric key           |
| -s     | [for -x option] Private key             |
| -i     | Editor (default vscode)                 |

## Help

Pass `--help` to show help information.

```sh
xrdebug --help
```

## Version

Pass `--version` to show version information.

```sh
xrdebug --version
```
