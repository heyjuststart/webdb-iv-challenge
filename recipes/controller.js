const express = require('express');

const Recipes = require('./model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.get();
    res.status(200).json(recipes);
  } catch (e) {
    /* handle error */
    res.status(500).json({
      message: 'The recipes information could not be retrieved'
    });
  }
});

router.post('/', async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({
        errorMessage: 'Please provide a name'
      });
    }
    const recipe = await Recipes.insert(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'There was an error while saving the recipe to the database'
    });
  }
});

module.exports = router;

