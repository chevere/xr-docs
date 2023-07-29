# xr

Use `xr()` to dump variables.

💡 Supports [topic](#topic) `t`, [emote](#emote) `e` and [flags](#flags) `f` arguments.

## Dump variables

Use `xr($var1, $var2,...)` to dump any variable(s).

```php
xr($var, 'Hola, mundo!');
```

## Topic

Pass a topic using `t:`.

```php
xr($var, t: 'Epic win');
```

## Emote

Pass an emote using `e:`.

```php
xr($var, e: '😎');
```

## Flags

Pass bitwise flags to trigger special behavior.

* `f: XR_BACKTRACE` to include debug backtrace.

```php
xr($var, f: XR_BACKTRACE);
```
