# Helpers

Helpers refer to functions available at user-land code that can be used to interact with xrDebug. A client library implementing [xrDebug API](../developer/api.md) should provide at least the following helpers to conveniently debug your code:

* [xr](xr.md)
* [xrr](xrr.md) (xr raw)
* [xri](xri.md) (xr inspector)

The `xrConfig` helper must be provided for enabling users to configure xrDebug client interaction:

* [xrConfig](xrconfig.md)

**Note:** Each client library *may* implement its own additional configuration, for example using `env` or reading config from a file.

## Custom helpers

Custom helpers refer to extra helpers added to your project, framework or CMS in order to debug information useful for a given context. For example, when using a database-driven framework it could be nice to get support for debugging database queries.

Custom helpers should extend or base upon a pre-existing client library, that way you only focus in the payload and not in the connection to the xrDebug server.

You can learn how to create your own [custom helpers](../developer/custom-helpers.md) following the base PHP example.
