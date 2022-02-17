# XR Raw

Use `xrr()` to send a raw message (HTML) to the debugger.

💡 Supports topic `t`, emote `e` and flags `f` arguments.

```php
xrr('<h1>Hola, mundo!</h1>');

xrr('<span>Test</span>', t: 'Epic win');

xrr('<b>test</b>', e: '😎');

xrr('some string<br>', f: XR_BACKTRACE);
```
