# HTTP API

xrDebug HTTP API standard defines a language-agnostic web service as variable introspection is generated on client-side.

Following examples use [curl](https://curl.se/) to issue HTTP requests to xrDebug API.

## Create debug message

`POST /messages`

When creating a debug message it will be streamed to xrDebug window.

All parameters are optional: `body`, `emote`, `file_line`, `file_path`, `id`, `topic` (but at least one is required).

```sh
curl --fail -X POST \
    --data "body=My message" \
    --data "file_path=file" \
    --data "file_line=1" \
    http://127.0.0.1:27420/messages
```

## Create pause

`POST /pauses`

When creating a pause, a lock for the given id will be created. When the helper sends `xri()->pause()` the debugger creates a lock with `{"stop":false}` contents.

Requires `id`, supports optional body fields: `body`, `emote`, `file_line`, `file_path`, `topic`.

```sh
curl --fail -X POST \
    --data "id=b1cabc9a-145f-11ee-be56-0242ac120002" \
    http://127.0.0.1:27420/pauses
```

## Get pause

`GET /pauses/{id}`

If a pause exists it means that execution is paused for the given id. The helper which called `xri()->pause()` should sleep/wait while the pause exists. If pause contents are `{"stop":false}` the id is paused, if contents are `{"stop":true}` the id is stopped.

```sh
curl --fail -X GET \
    http://127.0.0.1:27420/pauses/b1cabc9a-145f-11ee-be56-0242ac120002
```

## Delete pause

`DELETE /pauses/{id}`

When deleting a pause the lock previously created will be removed, which will enable client library to continue code execution.

```sh
curl --fail -X DELETE \
    http://127.0.0.1:27420/pauses/b1cabc9a-145f-11ee-be56-0242ac120002
```

## Update pause (stop execution)

`PATCH /pauses/{id}`

When updating a pause it will update the pause to a full stop. GET requests will return `{"stop":true}`. The helper which called `xri()->pause()` should stop execution once the pause was updated to stop code execution.

```sh
curl --fail -X PATCH \
    http://127.0.0.1:27420/pauses/b1cabc9a-145f-11ee-be56-0242ac120002
```

## Request signing

When using sign verification (`-v` option) requests must add the `X-Signature` header.

First, sign the data fields:

```php
$serialize = serialize($data);
$sign = $privateKey->sign($serialize);
$signature = base64_encode($sign);
```

Then pass the signature header:

```sh
curl --fail -X POST \
    --data "body=My signed message" \
    --data "file_path=file" \
    --data "file_line=1" \
    -H "X-Signature: <signature>" \
    http://127.0.0.1:27420/messages
```
