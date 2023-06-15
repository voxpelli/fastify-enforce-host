import chai from 'chai';
import fastify from 'fastify';

chai.should();

describe('main', () => {
  it('should skip redirect when not needed', async () => {
    const app = fastify();

    app.register(import('../index.js'), {
      baseUrl: 'http://localhost:3000/',
    });

    app.get('/', async () => {
      return 'Hi';
    });

    const response = await app.inject({
      method: 'GET',
      url: 'http://localhost:3000/',
    });

    response.headers.should.not.have.property('location');
    response.statusCode.should.equal(200);
    response.body.should.equal('Hi');
  });

  it('should redirect when needed', async () => {
    const app = fastify();

    app.register(import('../index.js'), {
      baseUrl: 'http://localhost:3000/',
    });

    app.get('/', async () => {
      return 'Hi';
    });

    const response = await app.inject({
      method: 'GET',
      url: 'http://127.0.0.1/',
    });

    response.statusCode.should.equal(302);
    response.headers.should.have.property('location', 'http://localhost:3000/');
    response.body.should.be.empty;
  });
});
