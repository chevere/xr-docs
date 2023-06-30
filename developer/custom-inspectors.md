# Custom inspectors

An inspector is a class implementing `XrInspectorInterface` and it can be used provide customized debug insights for your application.

## Inspector interface

This interface is in charge of defining a standard XR Debug inspector and in concrete classes you can freely add any method(s) for stream messages by using the `sendMessage` method.

### Inspector sample

💡 Use `XrInspectorTrait` to implement the `XrInspectorInterface`.

```php
<?php

use Chevere\Xr\Inspector\Traits\XrInspectorTrait;
use Chevere\Xr\Interfaces\XrInspectorInterface;

final class MyXrInspector implements XrInspectorInterface
{
    use XrInspectorTrait;

    public function myQueries(
        string $t = '',
        string $e = '',
        int $f = 0,
    ): void {
        $data = 'my queries from somewhere...';
        $this->sendMessage(
            body: $data,
            topic: $t,
            emote: $e,
            flags: $f,
        );
    }
}
```

For code above, `myQueries` defines an method inspector that will stream queries from your application. To pass queries in this context you could use a static call, or create an object to collect that and make it visible to `MyXrInspector`.

### Notes on parameters

* Define topic `$t`, emote `$e` and flag `$f` in your parameters so your inspector adheres to XR Debug functionality.
* Use docblock to document your parameters, it will be easy for your users.

## Null inspector

A null inspector is required to void any inspection call **if XR Debug is disabled**. The null inspector should implement the same methods as the real inspector, but without carrying any action.

### Null inspector sample

💡 Use `XrInspectorNullTrait` to implement the `XrInspectorInterface`.

```php
<?php

use Chevere\Xr\Inspector\Traits\XrInspectorNullTrait;
use Chevere\Xr\Interfaces\XrInspectorInterface;

final class MyXrInspectorNull implements XrInspectorInterface
{
    use XrInspectorNullTrait;

    public function myQueries(
        string $t = '',
        string $e = '',
        int $f = 0,
    ): void {
    }
}
```

### Design recommendation

Copy the real inspector once you done and remove the body from the methods. Don't worry in designing the null inspector at the same time the real thing.

## Helper functions

For each inspector you will want to create a helper function to easily access to it.

### Helper function sample

💡 This helper function is special as if XR Debug is disabled it will use the [null inspector](#null-inspector), voiding any variable introspection.

```php
use Chevere\Xr\Inspector\XrInspectorInstance;
use Chevere\Xr\Interfaces\XrInspectorInterface;
use LogicException;
use MyXrInspector;
use MyXrInspectorNull;

/**
 * Access to my custom XR Debug inspector
 */
function my_xri(): MyXrInspector
{
    try {
        return XrInspectorInstance::get();
    } catch (LogicException) {
        $xrInspector = getXr()->enable()
            ? MyXrInspector::class
            : MyXrInspectorNull::class;
        $xrInspector = new $xrInspector(getXr()->client());

        return (new XrInspectorInstance($xrInspector))::get();
    }
}
```

Finally, to use your helper:

```php
my_xri()->myQueries();
```
