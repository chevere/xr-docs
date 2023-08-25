# Get started

## What is xrDebug?

xrDebug is a dump debug utility providing an [application server](../running/README.md) where you can send debug payloads, and stream these messages to multiple peers in any web browser.

Here's, this is what you write in your code:

```php
xr('Hello, world!');

xr(theArray: ['a' => 0, 'b' => 1], t: 'my-topic', e: '📌');

xr(🤭: 'wow', 👽: 'many', 😎: 'args');
```

Here's how it looks in xrDebug:

![intro](../src/app/intro.png)

There are other [helper functions](../helpers/README.md) that allow you to show system information, pause your code, etc. You can easily build your own custom helpers to dump functions tailored for your specific application context.

## How it works?

* An HTTP web server is in charge of listening to messages emitted from your code.
* You can [configure](../configuration/README.md) the server where your code stream messages to.
* Calls to `xr()` [helpers](../helpers/README.md) in your code emit a message to the configured xrDebug server.

xrDebug receives any variable introspection using helpers in your code and then these messages are streamed in the web interface of xrDebug server.

## Does it work with X?

xrDebug works with anything as it is a language-agnostic dump debug server. It is portable, distributed as a self-executable binary with also source and `.phar` file distribution.

You can use it in your framework, CMS or custom application. You are encouraged to [contribute](contributing.md) with vendor-specific support to make xrDebug more context-aware.
