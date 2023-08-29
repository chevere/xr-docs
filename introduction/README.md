# Get started

## What is xrDebug?

xrDebug is a dump debug utility providing an application server where you can send debug payloads, and stream these messages to multiple peers in any web browser.

Here's, this is what you write in your code (from the [PHP client](https://github.com/chevere/xr)):

```php
xr('Hello, world!');

xr(theArray: ['a' => 0, 'b' => 1], t: 'my-topic', e: '📌');

xr(🤭: 'wow', 👽: 'many', 😎: 'args');
```

Here's how it looks in xrDebug:

![intro](../src/app/intro.png)

## How it works?

* xrDebug listens to messages emitted from your code.
* Calls to xrDebug helpers in your code emit a message to server.

## Why xrDebug?

Not only it is a small package, is all about less is more. xrDebug setup and running takes no time and the user interface is dead simple. Perfect for remote debugging with support for simultaneous peers and advanced security features.

### Lightweight

*Small package, minimal dependencies.*

xrDebug is *really* lightweight. It doesn't need anything extra besides its self-executable binary and a web browser to use it. No distro-based package, no extra installs, compile extensions or even tweak your `php.ini`.

### Ephemeral

*And its gone!*

One-click command run xrDebug server and dispose it when done. It doesn't require a database or any other persistence requirement.

### Web app

*Want to toy with dump messages?*

Interact with the debugger to pause, resume, clear, copy and even export messages. xrDebug has been built to enable users to handle dump messages with ease and to share these messages with other peers.

### Secure

*Debugging with security features.*

Both ends of the server-side system are secure for your remote joy. xrDebug supports end-to-end encryption using AES-GCM authenticated encryption and signed requests using Ed25519.

### Beautiful looking dumps™️

*You'll never see better looking dumps!*

It uses [varDump](https://chevere.org/packages/var-dump.html) and it looks fantastic. Forget the ubiquitous `var_dump` & `dd` style without *any style*, your sight will be pleased as you will enjoy a more colorful *chevere* experience.

### Context

*Organize dumps with topics and emotes.*

xrDebug uses topics and emotes to provide extra context to your dump information, enabling you to filter among multiple messages.
