# Introduction

xrDebug is a dump debug utility for PHP. It uses a [ReactPHP](https://reactphp.org/) [SSE](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) server to provide a web-based debug [application server](../server/README.md) that you can access in any web browser.

Here's, this is what you write in your PHP code:

```php
xr('Hello, world!');

xr(theArray: ['a' => 0, 'b' => 1], t: 'my-topic', e: '📌');

xr(🤭: 'wow', 👽: 'many', 😎: 'args');
```

Here's how it looks in xrDebug debugger:

![intro](../src/app/intro.png)

There are other [helper functions](../helpers/README.md) that allow you to show system information, pause your code, etc. You can easily [build your own](../developer/custom-inspectors.md) dump functions tailored for your specific application context.

## How it works?

* An [HTTP web server](../server/README.md) is in charge of listening to messages emitted from your code.
* You can [configure](../configuration/README.md) the server where your code stream messages to.
* Calls to `xr()` [helpers](../helpers/README.md) in your code emit a message to the configured xrDebug server.

xrDebug generates a beautiful variable introspection on site using [VarDump](https://chevere.org/packages/var-dump.html), then these HTML messages are streamed in the web interface of your xrDebug server.

## Does it work with X?

xrDebug works in any PHP 8.0+ codebase.

You can use it in your framework, CMS or custom application. You are encouraged to [contribute](contributing.md) with vendor-specific support to make xrDebug more context-aware.
