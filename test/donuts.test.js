const expect = require('chai').expect;
process.env.PORT = 1234;
const server = require('../server.js');
const request = require('supertest')(server);
const knex = require('../db/knex.js');

describe("Donut Test", function() {
  it('should show all the donuts', function(done) {
    request.get('/donuts')
    .end((err, res) => {
      expect(res.text).to.contain('honey');
      done();
    });
  });
});
