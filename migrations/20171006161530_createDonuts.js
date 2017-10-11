exports.up = function(knex, Promise) {
  return knex.schema.createTable('donuts',(t) => {
    t.increments();
    t.text('name');
    t.text('topping');
    t.integer('price');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('donuts');
};
