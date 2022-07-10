---
id: node-git-server.gitevents.on
hide_title: true
custom_edit_url: null
title: GitEvents.on() method
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) > [node-git-server](./node-git-server.md) > [GitEvents](./node-git-server.gitevents.md) > [on](./node-git-server.gitevents.on.md)

## GitEvents.on() method

<b>Signature:</b>

```typescript
on(event: 'push', listener: (push: PushData) => void): this;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  event | 'push' |  |
|  listener | (push: [PushData](./node-git-server.pushdata.md)<!-- -->) => void |  |

<b>Returns:</b>

this

## Example

repos.on('push', function (push) { ... }

Emitted when somebody does a `git push` to the repo.

Exactly one listener must call `push.accept()` or `push.reject()`<!-- -->. If there are no listeners, `push.accept()` is called automatically.