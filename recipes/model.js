const db = require('../data/dbConfig.js');

const get = () => db('recipes');

const getById = id =>
  db('recipes')
    .where({ 'recipes.id': id })
    .first();

const insert = recipe =>
  db('recipes')
    .insert(recipe)
    .then(ids => getById(ids[0]));

module.exports = {
  get,
  getById,
  insert
};

