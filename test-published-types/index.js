/// <reference types="node" />

import fastify from 'fastify';

const app = fastify();

app.register(import('@voxpelli/fastify-enforce-host'), {
  baseUrl: `http://localhost:3000/`
});
