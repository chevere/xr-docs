# XR Inspector

Use `xri()` to interact with the inspector.

💡 Supports topic `t`, emote `e` and flags `f` arguments **on methods**.

## Pause

```php
xri()->pause();
xri()->pause(t: 'stop', e: '⏯');
```

When sending pause, you will be able to control execution from the debugger:

![pause](../src/app/pause.png)

## Memory

```php
xri()->memory();
xri()->memory(f: XR_BACKTRACE);
```
