# Client library

A client library enables to interact with xrDebug from anywhere you can send HTTP requests.

## Message

To send messages is required to `POST /messages`. Code below outlines a `sendMessage` function.

```php
function sendMessage($data): void
{
    // POST /messages
    $curl = new Curl(/** on data **/);
    $curl->exec();
    // ...
}
```

## Pause

To implement pause is required to `POST /pauses` and sleep/wait while the `id` is paused. Code below outlines a `sendPause` and `isPaused` functions used on the PHP client.

```php
function sendPause(...$args): void
{
    // POST /pauses
    $curl = new Curl(/** on id **/);
    $curl->exec();
    $curlError = $curl->error();
    // Ignore on error
    if ($curlError !== '') {
        return;
    }
    // Sleep while id is paused
    do {
        sleep(1);
    } while (isPaused($id));
}

function isPaused($id): bool
{
    // POST /pauses/$id
    $curl = new Curl(/** on id **/);
    $curlExec = $curl->exec();
    // Free pause on error
    if (! $curlExec || $curl->error() !== '') {
        return false;
    }
    // Read response {stop: true|false}
    $response = json_decode($curlExec);
    $stop = $response->stop ?? false;
    // Stop execution on stop: true
    if ($stop) {
        throw new Exception();
    }

    return true;
}
```
