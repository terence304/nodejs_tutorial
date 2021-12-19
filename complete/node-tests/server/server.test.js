const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('Should return hello world response', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toMatchObject({
                error: 'Page not found.'
            });
        })
        .end(done);
});