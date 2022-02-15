# XR Inspector

The `xri()` helper function. Use `xri` to interact with the inspector.

💡 Supports [topic](#topic) `t`, [emote](#emote) `e` and [flags](#flags) `f` arguments **on methods**.

## Pause

```php
xri()->pause(t:'hammer-time');
```

When sending pause, you will be able to control execution from the debugger:

![pause](../src/app/pause.png)

## Memory

```php
xri()->memory();
```
