const db = require('../data/dbConfig.js');

const get = () => db('recipes');

const getById = id =>
  db('recipes')
    .join('recipestyles', 'recipestyles.recipe_id', '=', 'recipes.id')
    .join('dishes', 'dishes.id', '=', 'recipestyles.dish_id')
    .where({ 'recipes.id': id })
    .select(['dishes.name as dish_name', 'recipes.name as recipe_name'])
    .first()
    .then(recipe => {
      return db('ingredients')
        .join('recipeingredients as ri', 'ri.ingredient_id', '=', 'ingredients.id')
        .where({ 'ri.recipe_id': id })
        .select(['ri.quantity', 'ingredients.name'])
        .then(ingredients => ( {...recipe, ingredients } ));
    });

const insert = recipe =>
  db('recipes')
    .insert(recipe)
    .then(ids => getById(ids[0]));

module.exports = {
  get,
  getById,
  insert
};

