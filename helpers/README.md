# Helpers

Helpers refer to functions available at user-land code that can be used to interact with xrDebug. A client library implementing [xrDebug API](../developer/api.md) should provide at least the following helpers to conveniently debug your code:

* [xr](xr.md)
* [xrr](xrr.md) (xr raw)
* [xri](xri.md) (xr inspector)

The `xrConfig` helper must be provided for enabling users to configure xrDebug client interaction:

* [xrConfig](xrconfig.md)

## Guidelines

Client libraries *may* implement its own additional configuration system, for example using `env` or reading config from a file.

Client libraries *may* provide more helpers as needed.
