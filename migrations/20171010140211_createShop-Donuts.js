exports.up = function(knex, Promise) {
  return knex.schema.createTable('shops_donuts',(t) => {
    t.integer('shop_id').unsigned();
    t.foreign('shop_id').references('shops.id').onDelete('CASCADE');
    t.integer('donut_id').unsigned();
    t.foreign('donut_id').references('donuts.id').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shops_donuts');
};
