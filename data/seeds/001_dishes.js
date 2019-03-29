exports.seed = function(knex, Promise) {
  return knex('dishes').insert([
    {name: 'dish1' },
    {name: 'dish2' },
    {name: 'dish3' }
  ]);
};
