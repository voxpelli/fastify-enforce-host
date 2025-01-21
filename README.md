# Fastify Enforce Host

Enforce a specific host name for your Fastify app

[![npm version](https://img.shields.io/npm/v/@voxpelli//fastify-enforce-host.svg?style=flat)](https://www.npmjs.com/package/@voxpelli//fastify-enforce-host)
[![npm downloads](https://img.shields.io/npm/dm/@voxpelli//fastify-enforce-host.svg?style=flat)](https://www.npmjs.com/package/@voxpelli//fastify-enforce-host)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-7fffff?style=flat&labelColor=ff80ff)](https://github.com/neostandard/neostandard)
[![Module type: ESM](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![Types in JS](https://img.shields.io/badge/types_in_js-yes-brightgreen)](https://github.com/voxpelli/types-in-js)
[![Follow @voxpelli@mastodon.social](https://img.shields.io/mastodon/follow/109247025527949675?domain=https%3A%2F%2Fmastodon.social&style=social)](https://mastodon.social/@voxpelli)

## Usage

```javascript
import { fastify } from 'fastify';

const app = fastify();

app.register(import('@voxpelli/fastify-enforce-host'), {
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
