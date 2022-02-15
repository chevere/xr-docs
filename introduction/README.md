# XR

## Introduction

XR is a dump debug server utility for PHP. No extras required, debug your PHP code anywhere.

Here's an example for any PHP code:

```php
xr('Hello, world!');

xr(theArray: ['a' => 0, 'b' => 1], e: '🔴');

xr(🤭: 'wow', 👽: 'many', 😎: 'args');

xr('This has topic', t: 'my-topic');
```

Here's how that looks like in XR:

`🚧 Missing picture`

There are other helper functions that allow you to show system information, pause your code, etc. You can easily build your own dump functions tailored for your specific application context.

## How it works?

💡 Calls to `xr()` in your code emit a message to the XR server.

XR spawns an HTTP web application server (ReactPHP) with SSE to broadcast dump messages emited from your code.

## Why XR and not X?

### Lightweight

XR is *very* lightweight, you don't need anything extra besides PHP and a web browser to use it. No need to install any distro-based package or even tweak your `php.ini`.

### Ephemeral

One-click command run in split seconds the XR server and dispose it when done, no need to copile/re-configure your PHP extensions. It doesn't require a database or any other persistence requirement.

### Web application

Easy interact with the debugger to to pause, resume, clear, copy and even export messages. XR has been built to enable users to handle dump messages with ease and to share these messages with other peers.

### Beautiful looking dumps™️

Forget the ubiqutus, same-looking `var-dumper` style that nobody cares to make look better. We [built a new one](https://github/chevere/var-dump) and it looks fantastic. Your sight will be pleased.

### Context

XR support topics and emotes to provide context to your dump information, which you can use as filters in the debugger window. Use topics as "log" or "user-data" to label your messages. Use emotes as 🔵, 💯 or 🚧 for an emoji-based context.
