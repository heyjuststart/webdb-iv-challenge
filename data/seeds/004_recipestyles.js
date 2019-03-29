exports.seed = function(knex, Promise) {
  return knex('recipestyles').insert([
    {name: 'recipestyle1', dish_id: 1, recipe_id: 1 },
    {name: 'recipestyle2', dish_id: 2, recipe_id: 2 },
    {name: 'recipestyle3', dish_id: 3, recipe_id: 3 }
  ]);
};
