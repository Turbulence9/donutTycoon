const expect = require('chai').expect;
process.env.PORT = 1234;
const server = require('../server.js');
const request = require('supertest')(server);
const knex = require('../db/knex.js');

describe("Shop Test", function() {
  it('should show all the shops', function(done) {
    request.get('/shops')
    .end((err, res) => {
      expect(res.text).to.contain('Zubair');
      done();
    });
  });
});
