---
sidebar: false
home: false
heroImage: /logo.svg
heroText: xrDebug
tagline: Lightweight portable debug utility
actionText: Install →
actionLink: /install/
---

::: slot footer
Apache 2.0 Licensed | Copyright © [Rodolfo Berrios](https://rodolfoberrios.com)
:::

# xrDebug

[xrDebug](https://xrdebug.com/) is a lightweight web-based debug software. [Play video](https://xrdebug.com/xrdebug.mp4)

## Quick start

* [Install](/install) server

```sh
bash <(curl -sL xrdebug.com/bin.sh)
```

* [Run](run/README.md) `xrdebug` to spawn server

```sh
xrdebug
```

* Install a client library for your language or use the [HTTP API](./api/) directly

## Client libraries

A client library is a wrapper around the HTTP API.

| Technology | Package                                                   |
| ---------- | --------------------------------------------------------- |
| PHP        | [xrdebug/php](https://packagist.org/packages/xrdebug/php) |
| WordPress  | [xrdebug/wordpress](https://github.com/xrdebug/wordpress) |

## Contributing

If you want to contribute to xrDebug, please check the [developer guide](/developer).
