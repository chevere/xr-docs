# Introduction

XR is a dump debug server utility for PHP. No extras required, debug your PHP code anywhere.

Here's an example for any PHP code:

```php
xr('Hello, world!');

xr(theArray: ['a' => 0, 'b' => 1], t: 'my-topic', e: '📌');

xr(🤭: 'wow', 👽: 'many', 😎: 'args');
```

Here's how it looks in XR debugger:

![intro](../src/app/intro.png)

There are other helper functions that allow you to show system information, pause your code, etc. You can easily build your own dump functions tailored for your specific application context.

## How it works?

💡 Calls to `xr()` in your code emit a message to the XR server.

XR spawns an HTTP web application server (ReactPHP) with SSE to broadcast dump messages emited from your code.
