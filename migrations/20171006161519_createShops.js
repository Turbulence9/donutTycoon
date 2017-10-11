exports.up = function(knex, Promise) {
  return knex.schema.createTable('shops',(t) => {
    t.increments();
    t.text('name');
    t.text('city');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shops');
};
