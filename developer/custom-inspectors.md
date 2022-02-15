# Custom inspectors

💡 A custom inspector can provide better (customized) insights for your existing application.

We recommend setting up a new project and use XR as a non-dev dependency. From there, you can easily add your own custom inspector.

## XrInspectorInterface

💡 Use `XrInspectorTrait` to implement the `XrInspectorInterface`.

```php
<?php

use Chevere\Xr\Inspector\Traits\XrInspectorTrait;
use Chevere\Xr\Interfaces\XrInspectorInterface;

final class MyXrInspector implements XrInspectorInterface
{
    use XrInspectorTrait;

    public function myMethod(
        string $t = '',
        string $e = '',
        int $f = 0,
    ): void {
        $data = '{my data}';
        $this->sendMessage(
            body: $data,
            topic: $t,
            emote: $e,
            flags: $f,
        );
    }
}

```

## XrInspectorNull

💡 Use `XrInspectorNullTrait` to implement the `XrInspectorInterface` as a `null` inspector to void any inspection call if XR is disabled.

```php
<?php

use Chevere\Xr\Inspector\Traits\XrInspectorNullTrait;
use Chevere\Xr\Interfaces\XrInspectorInterface;

final class MyXrInspectorNull implements XrInspectorInterface
{
    use XrInspectorNullTrait;

    public function myMethod(
        string $t = '',
        string $e = '',
        int $f = 0,
    ): void {
    }
}


```

## Helper function

Register your custom helper function:

```php
use Chevere\Xr\Inspector\XrInspectorInstance;
use Chevere\Xr\Interfaces\XrInspectorInterface;
use LogicException;
use MyXrInspector;
use MyXrInspectorNull;

if (!function_exists('my_xri')) {
    /**
     * Access XR inspector to send debug information.
     */
    function my_xri(): XrInspectorInterface
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
}
```
