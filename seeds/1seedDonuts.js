
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donuts').del()
    .then(function () {
      // Inserts seed entries
      return knex('donuts').insert([
        {name: 'chocolate', topping: 'sprinkles', price: 3},
        {name: 'glazed', topping: 'glazed', price: 4},
        {name: 'strawberry', topping: 'frosting', price: 6},
        {name: 'lemon', topping: 'powdered sugar', price: 5},
        {name: 'gluten-free', topping: 'honey', price: 20}
      ]);
    });
};
