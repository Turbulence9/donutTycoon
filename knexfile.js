module.exports = {
  development: {
    client: 'postgres',
    connection: 'postgres://localhost:5432/donutTycoon-dev'
  },
  test: {
    client: 'postgres',
    connection: 'postgres://localhost:5432/donutTycoon-test'
  }
};
