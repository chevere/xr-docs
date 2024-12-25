---
sidebarDepth: 3
---

# HTTP API

The HTTP API provides a RESTful interface to the server. See the [openapi.yml](https://raw.githubusercontent.com/xrdebug/xrdebug/refs/heads/3.0/api/openapi.yml) file for alternative API documentation.

## GET /

To access the web interface, open a web browser and navigate to the server's root URL. The server will serve the web interface.

```sh
open http://localhost:27420
```

## POST /messages

Sends a message to the server.

**Parameters:**

All parameters are optional, but at least one is required.

- `body`: The message body.
- `emote`: The message type (default: `info`).
- `file_line`: The line number.
- `file_path`: The file path.
- `id`: The message ID.
- `topic`: The message topic.

**Responses:**

- `200 OK`: Message sent.
- `400 Bad Request`: Invalid request.

```sh
curl --fail -X POST \
    --data "body=My message" \
    --data "file_path=file" \
    --data "file_line=1" \
    http://localhost:27420/messages
```

## POST /pauses

Creates a pause lock.

**Parameters:**

- `id`: The ID of the pause lock.

The following parameters are optional:

- `body`: The message body.
- `emote`: The message type (default: `info`).
- `file_line`: The line number.
- `file_path`: The file path.
- `topic`: The message topic

**Responses:**

- `201 Created`: Lock created `Location: /pauses/{id}`.
- `409 Conflict`: Lock already exists.

```sh
curl --fail -X POST --data "id=123" http://localhost:27420/pauses
```

## GET /pauses/{id}

Retrieves the status of an existing pause lock.

**Parameters:**

- `id` (path): The ID of the pause lock.

**Responses:**

- `200 OK`: Returns the pause lock (JSON).
- `404 Not Found`: Lock not found.

```sh
curl --fail -X GET http://localhost:27420/pauses/123
```

## DELETE /pauses/{id}

Deletes a pause lock.

**Parameters:**

- `id` (path): The ID of the pause lock.

**Responses:**

- `204 No Content`: Lock deleted.
- `404 Not Found`: Lock not found.

```sh
curl --fail -X DELETE http://localhost:27420/pauses/123
```

## PATCH /pauses/{id}

Updates a pause lock status to `stop: true`.

**Parameters:**

- `id` (path): The ID of the pause lock.

**Responses:**

- `200 OK`: Lock updated, returns the pause lock (JSON).
- `404 Not Found`: Lock not found.

```sh
curl --fail -X PATCH http://localhost:27420/pauses/123
```

## GET /stream

Establishes a Server-Sent Events (SSE) connection.

**Responses:**

- `200 OK`: Returns the SSE stream.

```sh
curl --fail -X GET http://localhost:27420/stream
```
