exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shops').del()
    .then(function () {
      // Inserts seed entries
      return knex('shops').insert([
        {name: "Zubair's Donut Emporium", city: 'Austin'},
        {name: "Pete's snacks", city: 'Athens'},
        {name: "Bazzar Donuts", city: 'Dallas'},
        {name: "Yummy Joy", city: 'Huston'},
        {name: "Jayme's Pies n Donuts", city: 'Georgia'}
      ]);
    });
};
