# Why xrDebug?

You may be wonder *why I need another debugger?* if at PHP we already have debuggers like xDebug, Debugbar, Clockwork, Spatie Ray, etc. The main selling point of xrDebug is being a remote debugger with **minimal footprint**. Not only it is an small package, is all about less is more. xrDebug setup and running takes no time and the user interface is dead simple.

## Lightweight

*Small package, minimal dependencies.*

xrDebug is *really* lightweight. It doesn't need anything extra besides PHP and a web browser to use it. No distro-based package, no extra installs, compile extensions or even tweak your `php.ini`.

## Ephemeral

*And its gone!*

One-click command run xrDebug server and dispose it when done. It doesn't require a database or any other persistence requirement.

## Web app

*Want to toy with dump messages?*

Interact with the debugger to pause, resume, clear, copy and even export messages. xrDebug has been built to enable users to handle dump messages with ease and to share these messages with other peers.

## Secure

*Enterprise grade security features.*

Both ends of the server-side system are secure for your remote joy. xrDebug supports end-to-end encryption using AES-GCM authenticated encryption and signed requests using Ed25519.

## Beautiful looking dumps™️

*You'll never see better looking dumps!*

We [built a new var dumper](https://chevere.org/packages/var-dump.html) and it looks fantastic. Forget the ubiquitous `var_dump` & `dd` style without *any style*, your sight will be pleased as you will enjoy a more colorful *chevere* experience.

## Context

*Organize dumps with topics and emotes.*

xrDebug uses topics and emotes to provide extra context to your dump information, enabling you to filter among multiple messages.

## Why xrDebug and not X?

Any tool exists as a better fit depending on your use case and needs and only a fool will limit to just one debugger. We believe that it all depends on your context what suits best, we built the following comparison tables to enable you to easy understand where xrDebug fits best.

With PHP software you always have plenty alternatives and that's all what matters, that we embrace a language where we can take so many different choices.

### Spatie Ray

xrDebug was inspired by [Spatie Ray](https://myray.app/), but we took a very different approach. They made a debugger for solo developers, we made an stream server for supporting multiple peers. Both debuggers suit production debugging.

Our entire stack is Open Source, both server and client source are available for studying and compliance checking. Spatie's stuff is proprietary, there's a thin layer of uncertainty there.

| Item            | xrDebug                                | Spatie Ray  |
| --------------- | -------------------------------------- | ----------- |
| Server          | Open Source                            | Proprietary |
| User interface  | Web browser                            | Application |
| Pause execution | Yes                                    | Yes         |
| Remote debug    | Yes, anywhere (HTTP)                   | Yes (SSH)   |
| Context         | Topics, emotes                         | Colors      |
| Access          | Solo, team                             | Solo        |
| Security        | End-to-end encryption, request signing | SSH         |
| Message export  | Clipboard, PNG image                   | None        |

### Xdebug

xrDebug doesn't relate to [Xdebug](https://xdebug.org/) as the later has a heavy footprint and diffuses in extra features. To use it you must install a PHP extension and when enabled it will eat some resources. xDebug is absolutely not suitable for production usage as is a tool made for development purposes.

xrDebug focus in one single feature: Debugging, while xDebug adds profiling, tracing and code coverage. This makes xrDebug not only lighter, it is easier to maintain.

| Item             | xrDebug                                  | xDebug             |
| ---------------- | ---------------------------------------- | ------------------ |
| Installation     | Composer                                 | PHP extension      |
| Toggle           | Via [config](../configuration/README.md) | Modify `php.ini`   |
| User interface   | Web browser                              | None               |
| Production usage | Yes                                      | No                 |
| Pause execution  | Yes                                      | Yes, step debugger |
| License          | Apache-2.0 license                       | The Xdebug License |
| Pros             | Ephemeral, on-the-fly                    | Extra features     |

### Debugbar et all

xrDebug doesn't relate to **Debugbar** (or similar toolbars), **Clockwork**, or any of these catch-all data collectors which work more like system inspectors, and totally out of the question for production realm.

| Item             | xrDebug               | Others                                       |
| ---------------- | --------------------- | -------------------------------------------- |
| User interface   | Dedicated             | Embed                                        |
| Production usage | Yes                   | No                                           |
| Pause execution  | Yes                   | No                                           |
| Context          | Topics, emotes        | None                                         |
| Security         | End-to-end encryption | None (Debugbar), HTTP basic auth (Clockwork) |
| Pros             | Secure debugger       | Extended information                         |
