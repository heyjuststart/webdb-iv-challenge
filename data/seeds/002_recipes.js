exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {name: 'recipe1', directions: 'recipe directions 1' },
    {name: 'recipe2', directions: 'recipe directions 2' },
    {name: 'recipe3', directions: 'recipe directions 3' }
  ]);
};

