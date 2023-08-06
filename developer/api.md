# API

The xrDebug API standard defines a language-agnostic web service where any compatible client library can implement [xr helpers](../helpers/README.md) in their own language.

## Examples

Following examples use [curl](https://curl.se/) to issue HTTP requests to xrDebug API.

### Create a debug message

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

### Create a pause

`POST /pauses`

When creating a pause a lock for the given id will be created. When the helper sends `xri()->pause()` the system creates a lock file with `{"stop":false}` contents.

Requires `id`, supports optional body fields: `body`, `emote`, `file_line`, `file_path`, `topic`.

```sh
curl --fail -X POST \
    --data "id=b1cabc9a-145f-11ee-be56-0242ac120002" \
    http://127.0.0.1:27420/pauses
```

### Get a pause

`GET /pauses/{id}`

If a pause exists it means that execution is paused for the given id. The helper which called `xri()->pause()` should sleep while the pause exists. If the contents are `{"stop":false}` the id is paused, if contents are `{"stop":true}` the id is stopped.

```sh
curl --fail -X GET \
    http://127.0.0.1:27420/pauses/b1cabc9a-145f-11ee-be56-0242ac120002
```

### Delete a pause

`DELETE /pauses/{id}`

When deleting a pause the lock previously created will be removed, which will continue code execution.

```sh
curl --fail -X DELETE \
    http://127.0.0.1:27420/pauses/b1cabc9a-145f-11ee-be56-0242ac120002
```

### Update a pause to stop execution

`PATCH /pauses/{id}`

When updating a pause it will update the lock file to return `{"stop":true}`. The helper which called `xri()->pause()` should stop execution once it notices that the pause was updated to instruct stop code execution.

```sh
curl --fail -X PATCH \
    http://127.0.0.1:27420/pauses/b1cabc9a-145f-11ee-be56-0242ac120002
```

## Schwager

xrDebug uses [Schwager](https://chevere.org/packages/schwager.html) for describing HTTP API standard. The `schwager.json` file is included in every [release](https://github.com/chevere/xrdebug/releases).

* All parameters required except if `required: false`

```json
{
    "api": "xr",
    "name": "xrDebug API",
    "version": "1.0.0",
    "servers": [
        {
            "description": "xrDebug"
        }
    ],
    "paths": {
        "\/": {
            "name": "\/",
            "regex": "\/",
            "endpoints": {
                "GET": {
                    "description": "Single page application",
                    "responses": {
                        "200": [
                            {
                                "context": "SPAController",
                                "body": {
                                    "type": "string",
                                    "regex": "^.*$\/m"
                                }
                            }
                        ]
                    }
                }
            }
        },
        "\/messages": {
            "name": "\/messages",
            "regex": "\/messages",
            "endpoints": {
                "POST": {
                    "description": "Create a debug message",
                    "body": {
                        "type": "array#map",
                        "parameters": {
                            "body": {
                                "required": false,
                                "type": "string",
                                "regex": ".*?"
                            },
                            "emote": {
                                "required": false,
                                "type": "string"
                            },
                            "file_line": {
                                "required": false,
                                "type": "string"
                            },
                            "file_path": {
                                "required": false,
                                "type": "string"
                            },
                            "id": {
                                "required": false,
                                "type": "string"
                            },
                            "topic": {
                                "required": false,
                                "type": "string"
                            }
                        }
                    },
                    "responses": {
                        "204": [
                            {
                                "context": "MessagePostController",
                                "body": {
                                    "type": "null"
                                }
                            }
                        ]
                    }
                }
            }
        },
        "\/pauses": {
            "name": "\/pauses",
            "regex": "\/pauses",
            "endpoints": {
                "POST": {
                    "description": "Create a pause",
                    "body": {
                        "type": "array#map",
                        "parameters": {
                            "id": {
                                "type": "string",
                                "regex": "^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$"
                            },
                            "body": {
                                "required": false,
                                "type": "string",
                                "regex": ".*?"
                            },
                            "emote": {
                                "required": false,
                                "type": "string"
                            },
                            "file_line": {
                                "required": false,
                                "type": "string"
                            },
                            "file_path": {
                                "required": false,
                                "type": "string"
                            },
                            "topic": {
                                "required": false,
                                "type": "string"
                            }
                        }
                    },
                    "responses": {
                        "201": [
                            {
                                "context": "PausePostController",
                                "body": {
                                    "type": "array#map",
                                    "parameters": {
                                        "pause": {
                                            "type": "boolean"
                                        },
                                        "stop": {
                                            "type": "boolean"
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        },
        "\/pauses\/{id}": {
            "name": "\/pauses\/{id}",
            "regex": "^(?|\/pauses\/([0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}))$",
            "variables": {
                "id": {
                    "type": "string",
                    "regex": "^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$"
                }
            },
            "endpoints": {
                "DELETE": {
                    "description": "Delete a pause",
                    "responses": {
                        "204": [
                            {
                                "context": "PauseDeleteController"
                            }
                        ],
                        "404": [
                            {
                                "context": "PauseDeleteController"
                            }
                        ]
                    }
                },
                "GET": {
                    "description": "Get a pause",
                    "responses": {
                        "200": [
                            {
                                "context": "PauseGetController",
                                "body": {
                                    "type": "array#map",
                                    "parameters": {
                                        "pause": {
                                            "type": "boolean"
                                        },
                                        "stop": {
                                            "type": "boolean"
                                        }
                                    }
                                }
                            }
                        ],
                        "404": [
                            {
                                "context": "PauseGetController"
                            }
                        ]
                    }
                },
                "PATCH": {
                    "description": "Update a pause to stop execution",
                    "responses": {
                        "200": [
                            {
                                "context": "PausePatchController",
                                "body": {
                                    "type": "array#map",
                                    "parameters": {
                                        "pause": {
                                            "type": "boolean"
                                        },
                                        "stop": {
                                            "type": "boolean"
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        },
        "\/stream": {
            "name": "\/stream",
            "regex": "\/stream",
            "endpoints": {
                "GET": {
                    "description": "Debug stream",
                    "responses": {
                        "200": [
                            {
                                "context": "StreamController",
                                "body": {
                                    "type": "className",
                                    "className": "React\\Stream\\ThroughStream"
                                }
                            }
                        ]
                    }
                }
            }
        }
    }
}
```
