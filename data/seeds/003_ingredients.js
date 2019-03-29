exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {name: 'cup of ingredient1' },
    {name: 'cup of ingredient2' },
    {name: 'cup of ingredient3' }
  ]);
};
