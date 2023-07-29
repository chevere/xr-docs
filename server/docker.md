# Docker

A [container image](https://github.com/chevere/xr/pkgs/container/xr) is available for running the xrDebug server. Refer to [Docker configuration](../configuration/docker-configuration.md) when using this container image.

## Docker commands

### Run

```sh
docker run -d -p 27420:27420 --name chevere-xr ghcr.io/chevere/xr
```

The server will be available at [http://localhost:27420](http://localhost:27420)

### Start

```sh
docker container start chevere-xr
```

### Stop

```sh
docker container stop chevere-xr
```

### Remove

```sh
docker container rm chevere-xr -f
```

### Build

```sh
docker build -t ghcr.io/chevere/xr:tag .
```
