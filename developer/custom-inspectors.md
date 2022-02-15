# Custom inspectors

💡 A custom inspector can provide better (customized) insights for your existing application.

* Use `Inspector/Traits/XrInspectorTrait` to implement the `Interfaces/XrInspectorInterface`.
* Create a `null` inspector (check `Inspector/XrInspectorNull` to void any inspection call if XR is disabled.
* Register your custom `function`, just like `xri()` at `functions.php` but replacing your symbols.
