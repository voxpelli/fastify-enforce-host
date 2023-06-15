# Fastify Enforce Host

Enforce a specific host name for your Fastify app

<!--
[![npm version](https://img.shields.io/npm/v/buffered-async-iterable.svg?style=flat)](https://www.npmjs.com/package/buffered-async-iterable)
[![npm downloads](https://img.shields.io/npm/dm/buffered-async-iterable.svg?style=flat)](https://www.npmjs.com/package/buffered-async-iterable)
-->
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/voxpelli/eslint-config)
[![Module type: ESM](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![Types in JS](https://img.shields.io/badge/types_in_js-yes-brightgreen)](https://github.com/voxpelli/types-in-js)
[![Follow @voxpelli@mastodon.social](https://img.shields.io/mastodon/follow/109247025527949675?domain=https%3A%2F%2Fmastodon.social&style=social)](https://mastodon.social/@voxpelli)

## Usage

```javascript
import fastify from 'fastify';

const app = fastify();

app.register(import('@yikesable/fastify-enforce-host'), {
  baseUrl: 'http://localhost:3000/',
});

```

<!--
## Similar modules

*

## See also

* [Announcement blog post](#)
* [Announcement tweet](#)
-->
