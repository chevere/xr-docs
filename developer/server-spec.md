---
sidebar: false
---

# Server spec

`🚧 work in progress`

The XR Debug server spec defines a web service standard compatible with all the client libraries following the XR Debug interface. This enables to create custom compatible server implementation for using with XR Debug.

```plain
POST http://localhost:27420/message
    body=Hola, mundo
    file_path=/var/www/file.php
    file_line=123
    ...
```

* `body` - The message raw body (HTML).
* `file_path` - The file path.
* `file_line` - The file line.
* `emote` - emote (emojis/symbols).
* `topic` - Topic as message context.
* `action` - `message|pause`.
