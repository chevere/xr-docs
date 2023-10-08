# Specification

xrDebug uses [Schwager](https://chevere.org/packages/schwager.html) for describing its HTTP API. The [schwager.json](https://github.com/chevere/xrdebug/releases/latest/download/schwager.json) file is available since `1.0`.

* All parameters required except if `required: false`

```json
{
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
                                "headers": [
                                    "Content-Type: text\/html"
                                ],
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
                    "request": {
                        "headers": [
                            "Content-Type: application\/json"
                        ],
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
                        ],
                        "400": [
                            {
                                "context": "VerifySignatureMiddleware"
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
                    "request": {
                        "headers": [
                            "Content-Type: application\/json"
                        ],
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
                        }
                    },
                    "responses": {
                        "201": [
                            {
                                "context": "PausePostController",
                                "headers": [
                                    "Content-Type: application\/json"
                                ],
                                "body": {
                                    "type": "array#map",
                                    "parameters": {
                                        "stop": {
                                            "type": "boolean"
                                        }
                                    }
                                }
                            }
                        ],
                        "400": [
                            {
                                "context": "VerifySignatureMiddleware"
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
                                "context": "PauseDeleteController",
                                "body": {
                                    "type": "null"
                                }
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
                                "headers": [
                                    "Content-Type: application\/json"
                                ],
                                "body": {
                                    "type": "array#map",
                                    "parameters": {
                                        "stop": {
                                            "type": "boolean"
                                        }
                                    }
                                }
                            }
                        ],
                        "400": [
                            {
                                "context": "VerifySignatureMiddleware"
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
                                "headers": [
                                    "Content-Type: application\/json"
                                ],
                                "body": {
                                    "type": "array#map",
                                    "parameters": {
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
