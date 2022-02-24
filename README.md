---
home: true
heroImage: /logo.svg
heroText: XR debug
tagline: Lightweight debug server utility for PHP.
actionText: Introduction →
actionLink: /introduction/
features:
- title: 😘 Easy to use
  details: With a gorgeous minimalistic user interface.
- title: 🍒 Portable & HTML based
  details: One-click server run. No extra dependencies.
- title: 🦄 Beautiful
  details: Yet another debugger, but it looks danky!
footer: Made by Rodolfo Berrios
---

# Debug PHP anywhere

## Step 1

Install XR with [Composer](https://getcomposer.org/) in your codebase.

```sh
composer require --dev chevere/xr
```

Once installed, the XR [helpers](helpers/README.md) will be ready to use.

## Step 2

Run the XR application server:

<code-group>
<code-block title="🐘 PHP">
```sh
php vendor/chevere/xr/server.php -p 27420
```
</code-block>

<code-block title="🐳 Docker">
```sh
docker run -d -p 27420:27420 --name chevere-xr ghcr.io/chevere/xr
```
</code-block>
</code-group>

* Open [localhost:27420](http://localhost:27420) and profit

## Video demo

<video width="100%" poster="./src/social/github.jpg" controls>
    <source src="./src/video/cremino.mp4" type="video/mp4">
</video>
