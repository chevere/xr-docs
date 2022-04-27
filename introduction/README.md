# Introduction

XR Debug is a dump debug utility for PHP. No extras required, debug your PHP code anywhere. It uses a ReactPHP SSE server to provide a web-based debug application.

Here's an example for any PHP code:

```php
xr('Hello, world!');

xr(theArray: ['a' => 0, 'b' => 1], t: 'my-topic', e: '📌');

xr(🤭: 'wow', 👽: 'many', 😎: 'args');
```

Here's how it looks in XR Debug debugger:

![intro](../src/app/intro.png)

There are other helper functions that allow you to show system information, pause your code, etc. You can easily build your own dump functions tailored for your specific application context.

## How it works?

💡 Calls to `xr()` in your code emit a message to the XR Debug server.

XR Debug spawns an HTTP web application server (ReactPHP) with SSE to broadcast dump messages emitted from your code.
