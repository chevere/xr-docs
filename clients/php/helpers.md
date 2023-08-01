# Helpers

The PHP client adds the following helpers thanks to the [VarDump](https://chevere.org/packages/var-dump) package.

## vd

Use `vd()` to dump information about one or more variables to the registered output writer stream.

```php
vd('Hola, mundo!', $var);
```

## vdd

Use `vdd()` to dump information about one or more variables to the registered output writer stream and die.

```php
vdd('Hola, mundo!', $var);
```
