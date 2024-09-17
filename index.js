import { URL } from 'node:url';

import fp from 'fastify-plugin';

/**
 * @typedef FastifyEnforceHostOptions
 * @property {string} baseUrl
 */

/**  @type {import('fastify').FastifyPluginAsync<FastifyEnforceHostOptions>} */
const fastifyEnforceHost = async (fastify, { baseUrl }) => {
  if (typeof baseUrl !== 'string') throw new TypeError(`Expected a string baseUrl, got: ${typeof baseUrl}`);

  const parsedUrl = new URL(baseUrl);

  const desiredProtocol = parsedUrl.protocol.slice(0, -1);
  const desiredHost = parsedUrl.host;

  fastify.addHook('onRequest', (request, reply, done) => {
    const usedProtocol = request.protocol;
    const usedHostname = request.hostname;

    if (
      usedProtocol === desiredProtocol &&
      (
        usedHostname === desiredHost ||
        // Happens in the tests
        (usedHostname.endsWith(':80') && usedHostname === desiredHost + ':80')
      )
    ) {
      return done();
    }

    request.log.warn({ usedProtocol, usedHostname, usedMethod: request.method, desiredProtocol, desiredHost }, 'Site accessed through wrong hostname');

    if (request.method !== 'GET') {
      return reply.status(404).send('Hostname not in use');
    }

    const redirectTarget = new URL(request.url, baseUrl);

    return reply.redirect(redirectTarget.toString());
  });
};

export default fp(fastifyEnforceHost, { fastify: '>=5.x' });
