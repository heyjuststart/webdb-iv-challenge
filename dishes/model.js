const db = require('../data/dbConfig.js');

const get = () => db('dishes');

const getById = id =>
  db('dishes')
    .where({ 'dishes.id': id })
    .first().then(dish => {
      return db('recipestyles')
        .join('recipes', 'recipes.id', '=', 'recipestyles.recipe_id')
        .where({ 'recipestyles.dish_id': id })
        .then(recipes => ( { ...dish, recipes } ));
    });

const insert = dish =>
  db('dishes')
    .insert(dish)
    .then(ids => getById(ids[0]));

const update = (id, changes) =>
  db('dishes')
    .where({ id })
    .update(changes);

const remove = id =>
  db('dishes')
    .where({ id })
    .del();


module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};
