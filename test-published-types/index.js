/// <reference types="node" />

import fastify from 'fastify';

const app = fastify();

app.register(import('@yikesable/fastify-enforce-host'), {
  baseUrl: `http://localhost:3000/`
});
