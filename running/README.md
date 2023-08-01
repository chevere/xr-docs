# Running

The xrDebug server is the layer charge of the server side application, to receive and stream debug messages. The xrDebug server can spawn from self-executing binary, your project folder and [Docker](docker.md).

```sh
xrdebug <options>
```

| Option | Description                    |
| ------ | ------------------------------ |
| -p     | Port (default 27420)           |
| -n     | Session name (default xrDebug) |
| -e     | Enable end-to-end encryption   |
| -v     | Enable sign verification       |
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
