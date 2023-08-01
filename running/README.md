---
sidebar: false
---

# Running xrDebug

To run xrDebug execute:

```sh
xrdebug <options>
```

## Options

| Option | Description                    |
| ------ | ------------------------------ |
| -p     | Port (default 27420)           |
| -n     | Session name (default xrDebug) |
| -e     | Enable end-to-end encryption   |
| -v     | Enable sign verification       |
| -w     | Working directory              |
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

## Help

Pass `-h` to show help information.

```sh
xrdebug -h
```
